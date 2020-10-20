// const s = new Set();

// s.add('1').add('11').add('111');

// s.delete('1');

// // console.log(s.has('11'));
// // console.log(s.keys());
// // console.log(s.values());
// // console.log(s.entries());
// // s.forEach((item) => {
// //   console.log(item);
// // });
// for (const item of s) {
//   console.log(item);
// }

// const m = new Map([[1, 2]]);

// m.set(2, 3);
// m.set('2', '3');
// m.delete(1);

// console.log(m.keys());
// console.log(m.values());
// console.log(m.entries());

// m.forEach((value, key) => {
//   console.log(key, value);
// });

// for (const [key, value] of m) {
//   console.log(key, value);
// }

const b = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 5,
  },
};

const c = {
  a: 33,
  b: {
    c: 22,
    d: 33,
  },
};

// 将 b 中的数据浅拷贝到 a 中
Object.assign(b, c);

console.log(b);

new WeakMap([[{}, 1]]);
