class Person {
  late String name;
  late int age;

  Person(this.name, this.age);

  void printInfo() {
    print('name: ${this.name}\nage: ${this.age}');
  }
}

class Web extends Person {
  late String gender;

  String? hello;

  Web(String name, int age, String gender, {this.hello}) : super(name, age) {
    this.gender = gender;
  }

  // 覆写父类的方法
  @override // 加上 override 关键字 (编辑器会检查父类有无此方法, 没有的话就提示你父类不存在此方法, 相当于只是定义了一个新方法)
  void printInfo() {
    super.printInfo();
    print('gender: ${this.gender}, hello: ${this.hello}');
  }
}

void main() {
  // Person p = new Person('abc', 1);
  // p.printInfo();

  Web w = new Web('abc', 2, 'male', hello: '123');
  w.printInfo();
}
