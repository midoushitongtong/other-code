##### 微任务和宏任务

- 微任务: process.nextTick, promise, Object.observe, MutationObserver
- 宏任务: script, setTimeout, setInterval, setImmediate, I/O, UI Render
- 任务优先级:
  - 1. 事件循环从宏任务开始执行, 宏任务执行完成后, 假如存在微任务, 会先执行所有微任务
  - 2. 等微任务执行完成, 在执行宏任务
  - 1 跟 2 是一个循环的过程
  - 微任务是宏任务的跟屁虫, 一直跟在`当前`宏任务的后面

```javascript
setTimeout(function () {
  // setTimeout 执行的方法是宏任务
  // 添加在宏任务队列中, 等待下一次事件循环才开始运行
  console.log(1);
});

new Promise(function (r) {
  console.log(2);
  r();
  console.log(3);
}).then(function () {
  // .then 执行的方法是微任务
  // 添加到当前宏任务的微任务队列中, 等待当前宏任务执行完成后才开始运行
  console.log(4);
});

console.log(5);

// 2
// 3
// 5
// 4
// 1
```
