// web worker 是一个独立的线程, 不能操作 dom, bom
// 适合做大量的运算

self.addEventListener('message', (e) => {
  // 收到主线程的通知, 开始计算
  if (e.data.action === 'calculator') {
    console.log('收到 main 线程的通知, 开始计算');

    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    // 将计算结果返回给主线程
    self.postMessage({
      total,
    });
  }
});
