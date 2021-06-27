/**
 * 静态成员不能访问非静态成员
 * 非静态成员可以访问静态成员
 * 
 * 静态成员在类加载阶段就已经初始化, 和 java 一样
 */
class Person {
  static String name = '123';

  String name2 = 'abc';

  static void showName() {
    print(Person.name);
  }

  void showName2() {
    print(this.name2);
  }
}

void main() {
  // Person.showName();

  Person p = new Person();
  // 对象操作符 1 is
  // 判断一个变量是否为 Person 实例
  print(p is Object);

  // 对象操作符 2 as
  // 将一个变量断言成 Person 实例
  (p as Person).showName2();

  // 对象操作符 3 ..
  // 连缀操作, 类似链式调用
  p
    ..showName2()
    ..name2;
}
