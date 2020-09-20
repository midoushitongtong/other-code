##### pwa 是什么

- Progressive Web Apps, 渐进式 Web 应用 (https://web.dev/progressive-web-apps/)
- 是用于提升 web app 体验的一种新方法
- 主要运用现代 web api 以及传统渐进式增强策略来创建跨平台 web app

##### pwa 中常用的功能

- web app manifest
- service worker
- promise / async / await
- fetch api
- cache storage
- cache strategy
- notification

##### web app manifest

- 传统的 web app 入口
  - 域名 / ip
  - 收藏夹
  - 搜索引擎
- 通过 web app manifest 作为入口
  - web app manifest 可以让网站安装到设备的主屏幕, 有唯一的图标和名称
  - 有启动界面, 避免生硬的过度
  - 隐藏浏览器的地址栏, 让其看起来和 native app 类似
- https://web.dev/add-manifest/

##### service worker

- 简介
  - 和 web worker 不同的是, web worker 做的事情都是临时的, 计算结果不能被缓存下来, 如果下次有同样的操作, 还得费时再来一遍
  - service worker 一旦被 `install` ,就永远存在, 除非手动 unregister
  - 用的时候直接唤醒, 不用自动睡眠
  - 可编程拦截代理请求和返回, 缓存文件, 缓存文件可以被 main 线程读取到
  - 离线内容开发者可控
  - 必须在 https 环境下工作
  - 异步实现, 内部通过 Promise
- 特点
  - 前端有很多优化的手段, CDN, 异步加载, 资源缓存 等, 但如果断网了, 就都没法访问了
  - service worker 允许在网络环境比较差, 或者离线的环境下仍然可以使用service worker 可以提高 web app 的访问体验, 可以让一部分资源优先读缓存
  - service worker 是一个独立的 worker 线程, 相当于独立的网页进程, 是一种特殊的 web worker
  - 关于 `web worker`
    - javascript 都是运行在单一的主线程上，在同一时间只做一件事情
    - 随着 web 应用的不断复杂，如果在 js 线程进行了大量耗资源、耗时间的运算，就会造成性能问题
    - w3c 提供了 web worker 的 api，可以将一些耗资源、耗时间的运算交给 wob worker 来干, 完成后 通过 `postMessage` 的方法告诉主线程
    - web worker 是一个独立的线程, 不能操作 dom, bom
- 生命周期
  - https://developer.mozilla.org/zh-CN/docs/Web/API/ExtendableEvent/waitUntil

##### promise

- promise 是异步编程的一种解决方案, 比传统解决方案回调函数和事件, 更强大和更合理

##### async / await 

- ES2017, ES8 引入, 使得异步操作更方便

##### cache storage

- cacheStorage 表示 cache 对象存储, 配合 service worker 来实现资源缓存

##### cache strategy

- 缓存策略
  - 优先网络(先从网络读, 读不到从缓存读)
  - 优先缓存(先从缓存读, 读不到从网络读)

##### notification

- 用于向用户发送桌面通知