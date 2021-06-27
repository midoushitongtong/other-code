class Person {
  // 在成员变量或者成员函数前面加 "_" 说明这是一个 private 成员
  // private 成员只能在独立文件中定义的 class 有效, 如果不是在独立文件中定义的 class, private 成员则会被认为是 public
  String _name = '';

  // 这是默认的构造函数
  Person(this._name);

  // 这是命名构造函数
  Person.now(String name) {
    print('调用 - 命名构造函数');
    this._name = name;
  }

  // 这是命名构造函数
  Person.setName(String name) {
    print('调用 - 命名构造函数');
    this._name = name;
  }

  void setName(String name) {
    this._name = name;
  }

  String _getName() {
    return this._name;
  }

  String getName() {
    return this._getName();
  }
}
