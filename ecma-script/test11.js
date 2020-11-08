// let count = 100.5;
// // if (count > 100) {
// //   count = Math.floor.apply(null, [count]);
// // } else {
// //   count = Math.ceil.apply(null, [count]);
// // }
// // 利用反射动态地调用某个方法
// Reflect.apply(count > 100 ? Math.floor : Math.ceil, null, [count]);
// console.log(count);

// // 利用反射动态的创建某个类
// const d = Reflect.construct(Date, []);
// console.log(d, d instanceof Date);

// 反射提供一了部分 api 的语法糖, 可用可不用
// const obj = {};
// const a = Reflect.defineProperty(obj, 'name', {
//   value: 'a',
// });
// console.log(a);

// const obj = {};
// const a = Object.defineProperty(obj, 'name', {
//   value: 'b',
// });
// console.log(a);

// const obj = {
//   a: 1,
// };
// console.log(Reflect.get(obj, 'a'));
// const arr = [1, 2];
// console.log(Reflect.get(arr, 1));

// const obj = {
//   a: 1,
// };
// console.log(obj.hasOwnProperty('a'));
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'a'));

// console.log(Date.prototype);
// console.log(Reflect.getPrototypeOf(new Date()));

// const obj = {
//   a: 1,
// };
// Reflect.deleteProperty(obj, 'a');
// console.log(obj.a);

// const obj = {
//   a: 1,
// };
// console.log(Reflect.ownKeys(obj));
// console.log(Object.keys(obj));

// const obj = {
//   a: 1,
// };
// Reflect.preventExtensions(obj);
// Reflect.preventExtensions(obj);
// console.log(Reflect.isExtensible(obj));

// const obj = {
//   a: 1,
// };
// const arr = [1, 2];
// Reflect.set(obj, 'a', 5);
// Reflect.set(arr, 1, 5);
// console.log(obj);
// console.log(arr);

// const arr = [1, 2, 3];
// console.log(Reflect.getPrototypeOf(arr));
// // 将 arr 的 prototype 设置为 string 的 prototype
// // Object.setPrototypeOf(arr, String.prototype);
// // Reflect.setPrototypeOf(arr, String.prototype);
// console.log(arr.sort); // undefined
