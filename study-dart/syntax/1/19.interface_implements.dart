import '18.interface.dart';

// 实现一个接口, 必须实现里面的所有成员方法以及成员变量
class Mysql implements DB {
  @override
  String uri = '127.0.0.1';

  Mysql(this.uri);

  @override
  void insert() {
    print(this.uri);
    print("insert");
  }

  @override
  void update() {
    print(this.uri);
    print("update");
  }

  @override
  void delete() {
    print(this.uri);
    print("delete");
  }
}

void main() {
  Mysql m = new Mysql('123');
  m.insert();
}
