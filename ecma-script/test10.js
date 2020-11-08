// const loadScript = (src, callback) => {
//   const script = document.createElement('script');
//   script.src = src;
//   script.onload = () => {
//     callback(src);
//   };
//   script.onerror = (error) => {
//     callback(error);
//   };
//   document.head.append(script);
// };

// loadScript('test10d_1.js', (script) => {
//   if (script.type === 'error') {
//     console.log('load failed', script);
//   } else {
//     console.log('load success', script);
//     loadScript('test10_2.js', (script) => {
//       console.log('load success', script);
//       loadScript('test10_3.js', (script) => {
//         console.log('load success', script);
//       });
//     });
//   }
// });

const loadScript = (src) => {
  // pending, undefined
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(src); // fulfilled, result
    };
    script.onerror = (error) => {
      reject(error); // rejected, error
    };
    document.head.append(script);
  });
};

// loadScript('test10_1.js')
//   .then(
//     () => {
//       // 返回一个新的 promise 影响后续的 then 方法
//       return loadScript('123.js');
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then(
//     () => {
//       // 这里不会执行
//       loadScript('test10_3.js');
//     },
//     (error) => {
//       // 这里会执行, 因为 123.js 不存在会报错
//       console.log(error);
//     }
//   );

// function test(boolean) {
//   if (boolean) {
//     return new Promise((resolve, reject) => {
//       resolve();
//     });
//   } else {
//     return Promise.reject(new Error('error'));
//   }
// }

// test(0).then(
//   () => {
//     console.log(1);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// test(1).then(() => {
//   console.log(2);
// });

// loadScript('test10_1.js')
//   .then(
//     () => {
//       // 这里会报错
//       return loadScript('xx.js');
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then(() => {
//     loadScript('test10_3.js');
//   })
//   .catch((error) => {
//     // catch 捕获报错
//     console.log(3);
//     console.log(error);
//   });

const p1 = loadScript('test10_1.js');
const p2 = loadScript('test10_2.js');
const p3 = loadScript('test10_3.js');

// 同时执行若干的 promise, 等待全部完成后获取全部全结果
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// 竞争, 返回最先完成的 promise
Promise.race([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  }),
])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
