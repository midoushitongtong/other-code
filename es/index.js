// const arr = [1, 2, 3, 5];

// arr.forEach((item) => {
//   console.log(item);
// });

// 返回 true 继续遍历
// arr.every((item) => {
//   console.log(item);
//   return true;
// });

// 返回 false 继续遍历
// arr.some((item) => {
//   console.log(item);
//   return false;
// });

// arr.a = '12312';
// for (const index in arr) {
//   // 这里的 index 是字符串
//   // for in 通常用于遍历对象, 遍历数组可以会出现 bug
//   console.log(arr[index]);
// }

// for (const item of arr) {
//   console.log(item);
// }

// const price = {
//   a: [1, 2, 3],
//   b: [3, 5, 23],
// };

// for (const key in price) {
//   console.log(key);
// }

// function test(a, b) {
//   // arguments 是伪书组
//   // 将伪数组转换成数组
//   console.log([].slice.call(arguments));
//   console.log(Array.from(arguments));
// }
// test(1, 2);

// let arr2 = Array.from({ length: 5 }, () => 1);
// console.log(arr2);

// let arr3 = Array.of('1', '2', '3');
// console.log(arr3);

// let arr = Array(5);
// arr[0] = 1;
// arr.fill(2, 2, 3);
// console.log(arr);

// console.log([1, 2].filter((item) => item === 2));

// 找到满足条件的第一个值, 只要找到了就不继续放下找
// console.log([1, 2].find((item) => item === 23));

// 找到满足条件的第一个值, 只要找到了就不继续放下找
// console.log([1, 2].findIndex((item) => item === 2));

// let Animal = function (type) {
//   this.type = type;

//   // 这种继承违背了类的继承原则, 假如实例对象修改了 eat 应该是一起修改而不是单个修改
//   // 也会导致每个对象过于庞大
//   // this.eat = function () {};
// };

// 使用原型链继承可以解决上面的问题
// Animal.prototype.eat = function () {
//   console.log(1);
// };

// const a = new Animal();
// const b = new Animal();

// a.eat();
// b.eat();

// class Test {
//   constructor(type) {
//     this.type = type;
//   }

//   eat() {
//     console.log(1);
//   }
// }

// const a = new Test(1);
// const b = new Test(2);

// a.eat();
// b.eat();
// class Test {
//   constructor() {
//     this._age = 1;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(val) {
//     if (val >= 5) {
//       this._age = val;
//     }
//   }
// }

// const t = new Test();

// t.age = 6;

// console.log(t.age);

// const A = function () {};

// A.prototype.walk = function () {
//   A.walk2();
// };

// // static method
// A.walk2 = function () {
//   console.log('walk is call');
// };

// const d = new A();
// d.walk();

class Test {
  static walk() {
    console.log(1);
  }

  static tess() {
    console.log(22);
  }
}

Test.walk();
