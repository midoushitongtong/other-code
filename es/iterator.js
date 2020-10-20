// const data = {
//   authors: {
//     a: ['a1', 'a2', 'a3'],
//     b: [],
//     c: ['c1', 'c2', 'c3'],
//   },
// };

// // 给 data 对象加上迭代器
// data[Symbol.iterator] = function () {
//   const { authors } = this;
//   let values = [];
//   for ([key, value] of Object.entries(authors)) {
//     values = values.concat(value);
//   }

//   return {
//     next() {
//       return {
//         done: values.length === 0,
//         value: values.shift(),
//       };
//     },
//   };
// };
// for (v of data) {
//   console.log(v);
// }

// function* test() {
//   let val;
//   // *表示右边是一个可遍历对象, generator 会遵循可迭代协议, 返回一个迭代器
//   val = yield* [1, 2, 3];
//   console.log(val);
// }
// const t = test();
// console.log(t);
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());
// console.log(t.next());

const data = {
  authors: {
    a: ['a1', 'a2', 'a3'],
    b: [],
    c: ['c1', 'c2', 'c3'],
  },
};

// generator 遵循 iterator 协议
data[Symbol.iterator] = function* () {
  const { authors } = this;
  let values = [];
  for ([key, value] of Object.entries(authors)) {
    values = values.concat(value);
  }

  while (true) {
    if (values.length === 0) {
      return false;
    }
    yield values.shift();
  }
};

console.log(data[Symbol.iterator]().next()); // a1
for (value of data) {
  console.log(value);
}
