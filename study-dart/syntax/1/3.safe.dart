void main() {
  // 默认不允许数据为空, dart 有非空类型校验
  // int b = 1;
  // b = null; // 报错
  // print(b);

  // ? 标识, 可空类型
  int? a = 1;
  a = null;
  print(a); // null

  // ?. 运算符, 防止数据为空
  String? b = null;
  print(b?.length); // null

  // ! 运算符, 断言, 告诉 ide 我知道这个变量具体是什么类型
  String? c = 'abc';
  c = null;
  try {
    print(c!.length); // 编译不报错, 运行时报错
  } catch (e) {
    print(e); // Null check operator used on a null value
  }
}
