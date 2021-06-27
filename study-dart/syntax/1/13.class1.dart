// dary 中所有数据都是对象, 所有对象都继承 Object 类

class Person {
  String name = '';
  int age = 0;

  // Person(String name, int age) {
  //   this.name = name;
  //   this.age = age;
  // }

  // 构造函数的简写 (功能等同于上面)
  Person(this.name, this.age);

  void setName(String name) {
    this.name = name;
  }

  String getName() {
    return this.name;
  }

  void setAge(int age) {
    this.age = age;
  }

  int getAge() {
    return this.age;
  }
}

void main() {
  Person p = new Person('a', 1);
  print('${p.getName()}: ${p.getAge()}');

  // Person p2 = new Person();
  // p2.setName('b');
  // p2.setAge(2);
  // print('${p2.getName()}: ${p2.getAge()}');
}
