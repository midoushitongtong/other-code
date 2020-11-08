// // 如何遍历异步操作?
// function test(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(time), time);
//   });
// }
// async function runTest() {
//   const arr = [test(1000), test(3000), test(1500)];
//   // 使用 for await of 遍历异步操作
//   for await (const item of arr) {
//     console.log(Date.now(), item);
//   }
// }
// runTest();

// // 迭代器中使用 for await of
// const obj = {
//   count: 0,
//   test(time) {
//     return new Promise((resolve) => {
//       setTimeout(
//         () =>
//           resolve({
//             done: false,
//             value: time,
//           }),
//         time
//       );
//     });
//   },
//   // 异步迭代器, 每一项迭代的值都是异步操作
//   [Symbol.asyncIterator]() {
//     return {
//       next: () => {
//         this.count++;
//         if (this.count <= 3) {
//           return this.test(Math.random() * 1000);
//         } else {
//           return Promise.resolve({
//             done: true,
//             value: null,
//           });
//         }
//       },
//     };
//   },
// };
// async function runTest() {
//   for await (const item of obj) {
//     console.log(item);
//   }
// }
// runTest();

// const test = (count) => {
//   return new Promise((resolve, reject) => {
//     if (count < 5) {
//       resolve(count);
//     } else {
//       reject(new Error(count));
//     }
//   });
// };
// test(3)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() =>
//     console.log(
//       'promise 执行完成, 此方法一定会执行, 无论是 resolve 还是 reject'
//     )
//   );
// setTimeout(() => {
//   test(5)
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))
//     .finally(() =>
//       console.log(
//         'promise 执行完成, 此方法一定会执行, 无论是 resolve 还是 reject'
//       )
//     );
// }, 1000);

// const a = {
//   a: 1,
// };
// const b = {
//   a,
//   b: 2,
// };
// const c = {
//   // object spread 操作符
//   // 将 b 对象中的属性浅拷贝到 c 中
//   ...b,
//   c: 3,
// };
// console.log(c);

// const aa = {
//   a: 1,
//   b: 2,
//   d: 5,
// };
// // object reset 操作符, 将 a 解构出来, 剩余的属性存在 q 中
// const { a, ...q } = aa;
// console.log(q);

// /s 启用 dotAll 模式
/**
 * . 是一个特殊字符, 它可以匹配任意字符
 * 但不能匹配以下字符
 *  -四个字节的UTF-16字符
 * - 换行符（\n）
 * - 回车符（\r）
 * - 行分隔符
 * - 段分隔符
 *
 * 为了让 . 能匹配任意字符, es9 中引入了 dotAll 修饰符
 */
// console.log(/foo.bar/.test('foo\nbar')); // false
// console.log(/foo.bar/s.test('foo\nbar')); // true
// console.log(/foo.bar/.dotAll); // false 不支持 dotAll
// console.log(/foo.bar/s.dotAll); // true 支持 dotAll

// 命名分组匹配
// const arr = '2020-01-05'.match(/(\d{4})-(\d{2})-(\d{2})/);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// const arr2 = '2020-01-05'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
// console.log(arr2.groups.year);
// console.log(arr2.groups.month);
// console.log(arr2.groups.day);

// const str = 'hello world';
// // 这里的小括号不是分组, 而是一种先行断言的模式
// // 先行断言, 如果匹配到 hello 就会向后匹配, 等于 \sworld 才满足条件
// console.log(str.match(/hello(?=\sworld)/));
// // 后行断言, 如果匹配到 world 就会向前匹配，等于 hello\s 才满足条件
// console.log(str.match(/(?<=hello\s)world/));
// // 后行断言, 如果匹配到 world 就会向前匹配，不等于 hello\s 才满足条件
// console.log(str.match(/(?<!hello\s)world/)); // null

// console.log('$foo %foo foo'.replace(/(?<=\$)foo/, 'bar'));
// console.log('$1 qqq aaa ccc 12'.match(/(?<=\$)(\d)+/)[0]);
