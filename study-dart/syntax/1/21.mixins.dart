/**
 * mixins 混入
 * - mixins 类只能继承自 Object 不能继承其他类
 * - mixins 类不能有构造函数
 * - 一个类可以 mixins 多个 mixins 类
 * - mixins 绝不是继承 也不是接口 而是一种全新的特性
 */

class A {
  void printA() {
    print('A');
  }
}

class B {
  void printB() {
    print('B');
  }
}

class C {
  String name;

  C(this.name);

  printC() {
    print('C');
  }
}

// mixins A B 达到多继承效果
class D extends C with A, B {
  D(String name) : super(name) {
    print("123");
  }
}

void main() {
  D d = new D('1');
  d.printA();
  d.printB();
}
