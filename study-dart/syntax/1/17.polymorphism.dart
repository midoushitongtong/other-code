/**
 * 多态:
 *  - 父类定义一个方法不去实现, 让继承它的子类去实现, 每个子类都有不同的表现
 *  - 允许将子类的指针赋值给父类类型的指针, 同一个函数调用会有不同的结果
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

class Fish2 extends Animal {
  @override
  void eat() {
    print("fish2");
  }
}

void main() {
  // 多态
  Animal a = new Fish();
  a.eat();
  Animal a2 = new Fish2();
  a2.eat();
}
