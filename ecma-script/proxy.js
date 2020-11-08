// const obj2 = {};
// let value = null;
// Object.defineProperty(obj2, 'name', {
//   set(val) {
//     value = val;
//   },
//   get() {
//     return value;
//   },
// });
// obj2.name = 1;
// console.log(obj2.name);

// const o = {
//   a: 1,
// };
// const p = new Proxy(o, {
//   get(target, key) {
//     return target[key] + 1;
//   },
// });
// console.log(p.a);

// 使用 proxy 让对象变为只读
// const o = {
//   a: 1,
// };
// const d = new Proxy(o, {
//   get(target, key) {
//     return target[key];
//   },
//   // 不让其赋值
//   set() {
//     return false;
//   },
// });
// // 赋值无效
// d.a = 2;
// console.log(d.a); // 1

// 使用 defineProperty 让对象变为只读
// const o = {
//   a: 1,
// };
// for (const [key] of Object.entries(o)) {
//   Reflect.defineProperty(o, key, {
//     writable: false,
//   });
// }
// o.a = 2;
// console.log(o.a); // 1

// window.addEventListener(
//   'error',
//   (e) => {
//     console.log(e);
//     // 上报错误
//   },
//   true
// );
// const o = {
//   price: 1,
// };
// const p = new Proxy(o, {
//   get(target, key) {
//     return target[key] || '';
//   },
//   set(target, key, value) {
//     if (Reflect.has(target, key)) {
//       if (key === 'price') {
//         if (value > 300) {
//           // 触发错误
//           throw new TypeError('price exceed 300');
//         }
//         target[key] = value;
//       } else {
//         target[key] = value;
//       }
//     } else {
//       return false;
//     }
//   },
// });
// p.price = 500;
// console.log(p.price);

// class Test {
//   constructor() {
//     // 利用 proxy 防止外部修改
//     const proxy = new Proxy(
//       {
//         id: Math.random().toString(36).slice(-8),
//       },
//       {
//         set() {
//           return false;
//         },
//       }
//     );
//     this.proxy = proxy;
//   }

//   get id() {
//     return this.proxy.id;
//   }
// }

// const test = new Test();

// test.id = 3;

// for (let i = 0; i < 10; i++) {
//   console.log(test.id);
// }

const d = {
  a: 1,
};

// 可撤销的代理对象
const p = Proxy.revocable(d, {
  get(target, key) {
    if (key === 'a') {
      return 5;
    }
    return target[key];
  },
});

p.revoke();

// console.log(d); // error
