const CACHE_NAME = 'cache_v2';

// install 生命周期一般用与缓存
self.addEventListener('install', async (event) => {
  console.log('install', event);

  event.waitUntil(
    caches
      // 开启 cache
      .open(CACHE_NAME)
      // 将资源缓存到开启的 cache
      .then((cache) => {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/index.css',
          '/images/logo-192x192.png',
          '/images/logo-512x512.png',
        ]);
      })
      .then(() => {
        // 强制从 install 过渡到 activate
        self.skipWaiting();
      })
  );
});

// activate 生命周期一般用于清除缓存
self.addEventListener('activate', async (event) => {
  console.log('activate', event);

  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return keys.map((key) => {
          if (key !== CACHE_NAME) {
            // 删除旧的 缓存
            return caches.delete(key);
          }
        });
      })
      .then(() => {
        // service worker 激活后立即获取控制权
        return self.clients.claim();
      })
  );
});

// fetch 会在发送请求的时候触发
self.addEventListener('fetch', (event) => {
  console.log('fetch', event);

  // 网络优先
  const networkFirst = async (request) => {
    try {
      // 先从网络读取最新的资源
      const fresh = await fetch(request);
      return fresh;
    } catch (error) {
      // 从缓存读取
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) {
        console.log('缓存已命中', cached);
      } else {
        console.log('缓存未命中', cached);
      }
      return cached;
    }
  };

  event.respondWith(networkFirst(event.request));
});
