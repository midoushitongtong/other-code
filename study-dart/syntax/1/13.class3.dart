import '13.Person.dart';

void main() {
  Person p = new Person('1');
  print(p.getName());

  Person p2 = new Person.now('2');
  print(p2.getName());

  Person p3 = new Person.setName('3');
  print(p3.getName());

  // 编译错误, 无法访问独立文件中的 class 内的 private 成员
  // print(p3._name);
  // print(p3._getABC());
}
