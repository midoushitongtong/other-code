/**
 * 抽象类：
 *  - abstract 关键字类定义抽象类
 *  - 抽象方法不能定义 abstract 关键字，没有方法体就是抽象方法
 *  - 子类继承抽象类必须实现抽象方法
 *  - 抽象类不能实例化
 *  
 * 抽象类主要用于约束, 起到一个标准的作用
 */

abstract class Animal {
  void eat(); // 抽象方法

  void printInfo() {
    print("hello");
  }
}

class Fish extends Animal {
  @override
  void eat() {
    print("fish");
  }
}

void main() {
  Fish f = new Fish();
  f.eat();
  f.printInfo();

  // 报错 抽象类不能被实例化
  // new Animal();
}
