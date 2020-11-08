// // 解构数组
// const arr = ['hello', 'xxx', 'world'];
// // 加逗号跳过某个解构参数
// const [h, , w] = arr;
// console.log(h, w);

// // 解构字符串
// const str = 'abc';
// const [a, b] = str;
// console.log(a, b);

// 解构 set
// const set = new Set([1, 2, 3]);
// const [a, b] = set;
// console.log(a, b);

// 解构 object
// const obj = {
//   a: 1,
//   b: 2,
// };
// // 解构赋值, 不生成新的变量, 直接赋值给现在的变量
// // 注意: 前面不能加 let const 关键字
// [obj.a, obj.b] = ['hello', 'world'];
// console.log(obj.a, obj.b);

// const obj = {
//   a: 1,
//   b: 2,
// };
// for ([key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// let [a, b, ...c] = arr;
// console.log(a, b, c); // 1 2 [3, 4, 5, 6, 7]

// const arr = [1];
// // 解构的时候发现没有数据, 会得到 undefined, 如果是扩展运算符获得到空数组 []
// let [a, b, ...c] = arr;
// console.log(a, b, c); // 1 undefined []

// const arr = [1];
// // 默认值
// let [a, b = 'hello', ...c] = arr;
// console.log(a, b, c); // 1 undefined []

// let obj = {
//   a: 1,
//   b: 2,
// };
// // bb 是替代 b 的变量名称
// const { a, b: bb, c = 100 } = obj;
// console.log(a, bb, c);

// let obj = {
//   a: 1,
//   b: 2,
// };
// let { a, ...last } = obj;
// console.log(a, last);

// const obj = {
//   a: 1,
//   b: {
//     a: 1,
//     b: 2,
//   },
//   arr: ['hello', 'world'],
// };
// // 深度解构以及更改变量名称
// const {
//   b: { a: ww },
//   arr: [, arr2],
// } = obj;
// console.log(ww);
// console.log(arr2);

function func({ width, height }) {
  console.log(`width: ${width}`);
  console.log(`height: ${height}`);
}

const obj = {
  width: 100,
  height: 150,
};

func(obj);
