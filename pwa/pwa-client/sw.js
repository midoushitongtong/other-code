const CACHE_NAME = 'cache_v2';
const CACHE_RESOURCES = [
  '/',
  '/css/index.css',
  '/js/index.js',
  '/images/logo-192x192.png',
  '/images/logo-512x512.png',
  'http://localhost:3000/api/theaterMovies',
];

// install 生命周期一般用与缓存
self.addEventListener('install', (event) => {
  console.log('install');

  event.waitUntil(
    caches
      // 开启 cache
      .open(CACHE_NAME)
      .then((cache) => {
        // 将资源缓存到开启的 cache
        return cache.addAll(CACHE_RESOURCES);
      })
      .then(() => {
        // 强制从 install 过渡到 activate
        self.skipWaiting();
      })
  );
});

// activate 生命周期一般用于清除缓存
self.addEventListener('activate', (event) => {
  console.log('activate');

  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return keys.map((key) => {
          if (key !== CACHE_NAME) {
            // 删除旧缓存
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

self.addEventListener('fetch', (event) => {
  console.log('fetch');

  const { request } = event;

  // 不用域不缓存
  // const url = new URL(request.url);
  // if (url.origin !== self.origin) {
  //   return;
  // }

  if (request.url.includes('http://localhost:3000/api/')) {
    return event.respondWith(neworkFirst(request));
  } else {
    return event.respondWith(cacheFirst(request));
  }
});

// 缓存优先
const cacheFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  } else {
    try {
      const fresh = await fetch(request);
      cache.put(request, fresh.clone());
      return fresh;
    } catch (error) {
      console.log(error);
    }
  }
};

// 网络优先
const neworkFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME);

  try {
    const fresh = await fetch(request);
    cache.put(request, fresh.clone());
    return fresh;
  } catch (error) {
    console.log(error);

    const cached = await cache.match(request);
    return cached;
  }
};
