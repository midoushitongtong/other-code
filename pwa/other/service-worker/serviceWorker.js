self.addEventListener('install', (event) => {
  console.log('install', event);

  // 让 service worker 跳过等待, 直接进到 activate 状态
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('activate', event);

  // service worker 激活后立即获取控制权(最好不要这么做, 只有当首次加载非常重要时才这么做)
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // fetch 会在发送请求的时候触发
  console.log('fetch', event);
});

/**
 * install
 *  如果 serviceWorker.js 文件发生改变, install 事件会重新触发
 *
 * activate
 *  active 会在 install 之后触发
 *  但如果现在已经存在 service worker 了, 那么就处于等待状态, 直到前面的 serviceWorker 终止
 *  可以通过 self.skipWaiting() 方法跳过等待, 返回一个 promise 对象
 *  可以通过 event.waitUntil 方法确保在 promise 完成后才会调用下一个生命周期函数
 *
 * service workder 激活后, 会再下一次刷新页面才会生效, 可以通过 self.clients.claim 获取控制权
 */
