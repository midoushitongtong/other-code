// 函数默认参数
// function test(a = 1, b = 2) {
//   console.log(a);
//   console.log(b);
// }
// test();

// function func(a, b = 1, c = 2) {
//   return a + b + c;
// }
// 填写 undefined 就会命中 b 的默认值
// console.log(func(1, undefined, 3));
// 注意: 通常我们会将, 没有参数默认值的往前写, 有参数默认值的往后写

// 参数的默认值可以是其他参数的运算表达式
// function func(a, b = 1, c = a + b) {
//   console.log(Array.from(arguments));
//   console.log(c);
// }
// func(1);

// const a = new URL('http://127.0.0.1?a=1&b=2');
// console.log(Object.fromEntries(a.searchParams.entries()));
// console.log(Object.entries({ a: 1, b: 2 }));

// function func(a, b) {
//   // 获取函数参数的个数(不会统计有默认值的参数)
//   console.log(func.length);
// }
// func();

// function funcEs5() {
//   // 在 es5 中只能使用 arguments 来获取函数的不确定参数
//   var items = Array.prototype.slice.call(arguments);
//   var count = 0;
//   for (var i = 0; i < items.length; i++) {
//     count += items[i];
//   }
//   return count;
// }
// console.log(funcEs5(1, 2, 3));

// function func(...a) {
//   // 参数 a 直接是一个数组, 不需要进行转换, 而 arguments 是伪数组需要进行转换
//   // 在 es6 中可以用扩展运算符来获取函数的不确定参数
//   return a.reduce((prev, item) => prev + item, 0);
// }
// console.log(func(1, 2, 3));

// function func(a, ...b) {
//   // 参数 a 是第一个参数
//   // 参数 b 起其余剩余参数
//   return b.reduce((prev, item) => prev + item, 0) + a;
// }
// console.log(func(1, 2, 3));

// function sum(a, b, c) {
//   return a + b + c;
// }

// const data = [1, 2, 3];
// console.log(sum.apply(this, data));
// console.log(sum(...data));

// const sum = (a, b, c) => ({
//   a,
//   b,
//   c,
// });

// console.log(sum(1, 2, 3));

// 普通函数的 this, 指向他的调用者, 没有调用者指向 windwos
// 箭头函数的 this, 指向函数定义时所属的对象, 而不是他的调用者, 默认指向父级 this
// 箭头函数没有自己的 this arguments super 或 new target

// const a = {
//   name: 'a',
//   say: () => {
//     console.log(this);
//   },
// };

// a.say();

class bbchushui {
  num = 2;

  obj = {
    num: 1,
    cao: () => {
      const cao2 = () => {
        const cao3 = () => {
          const cao4 = () => {
            console.log(this.num);
          };
          cao4();
        };
        cao3();
      };
      cao2();
    },
  };
}

new bbchushui().obj.cao(); // 2
