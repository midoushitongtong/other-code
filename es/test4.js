// const Animal = function (type) {
//   this.type = type;
// };

// Animal.prototype.eat = function () {
//   console.log('eat');
// };

// Animal.walk = function () {
//   console.log('walk');
// };

// const Dog = function () {
//   // 初始化父类构造函数(只继承了构造函数, 没有涉及到原型链)
//   Animal.call(this, 'dog');
// };

// // 指向 Animal 的原型链(引用类型)
// Dog.prototype = Animal.prototype;

// Dog.prototype.run = function () {
//   console.log('run');
// };

// new Dog().run();

// 子类调用父类的构造函数, 指向父类的原型链

// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   eat() {
//     console.log('eat');
//   }

//   static walk() {
//     console.log('walk');
//   }
// }

// class Dog extends Animal {
//   // 不写 constructor 默认隐式指向父类的 constructor

//   // 写 constructor 就是显式, 默认不会执行父类的 constructor, 需要手动调用
//   constructor(type) {
//     // 调用父类的构造函数
//     super(type);
//     this.age = 1;
//   }
// }

// new Dog().eat();

// Dog.walk();
