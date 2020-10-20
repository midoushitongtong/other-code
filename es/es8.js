// const obj = {
//   a: 1,
//   b: 2,
// };
// // 将对象变成可遍历对象
// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }
// 其他api Object.keys Object.values

// for (let i = 0; i < 11; i++) {
//   // 不够两位, 前面自动补 0
//   console.log(i.toString().padStart(2, '0'));
// }
// for (let i = 0; i < 100; i += 50) {
//   // 自动补全, 缺多少位补多少位
//   console.log(i.toString().padStart(3, 'ab'));
//   // 0 - 缺2位 - 最终 ab0
//   // 50 - 缺1位 - 最终 a50
// }
// for (let i = 0; i < 11; i++) {
//   // 不够两位, 后面自动补 1
//   console.log(i.toString().padEnd(2, '1'));
// }

// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// Object.defineProperty(data, 'a', {
//   // key a 不可被枚举
//   enumerable: false,
//   // key a 不可被修改
//   writable: false,
// });
// console.log(Object.keys(data)); // b, c
// data.a = 2; // 无效
// console.log(data.a); // 1
// // 获取 key 为 a 的描述信息
// // 可以发现 enumerable 为 false, 表示不可被枚举
// console.log(Object.getOwnPropertyDescriptor(data, 'a'));
// // 获取全部 key 的描述信息
// console.log(Object.getOwnPropertyDescriptors(data));

// // 加上 async 会自动返回一个 promise
// async function test() {
//   return 1; // return Promise.resolve(1);
// }
// test().then((res) => {
//   console.log(res);
// });

// async function test() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1500);
//   });

//   // 等待 promise 执行完成
//   const r = await p;
//   console.log(r);

//   console.log(2);

//   return 3;
// }

// test().then((res) => {
//   console.log(res);
// });
