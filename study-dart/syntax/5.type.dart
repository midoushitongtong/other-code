/**
 * 数据类型
 *  Number
 *    int
 *    double
 *  String
 *  bool
 *  List
 *  Map
 */

void main() {
  // 1. 字符串定义的 3 种方式
  // var str1 = '1';
  // String str2 = '2';
  // String str3 = '''
  //   1
  //   2
  //   3
  // ''';

  // print(str1);
  // print(str2);
  // print(str3);

  // 字符串拼接
  // String str1 = 'hello';
  // String str2 = 'world';
  // print('$str1 $str2');
  // print(str1 + ' ' + str2);

  // 2.整形
  // int a = 1;
  // print(a);

  // 3.浮点型
  // double b = 2.2;
  // print(b);

  // 4.布尔
  // bool flag = true;
  // if (flag) {
  //   print(flag);
  // }

  // 5.list
  // List list = ['1', '2', '3'];
  // print(list);
  // list.forEach((item) {
  //   print(item);
  // });

  // 限制类型
  // List<String> list2 = ['1', '2', '3'];
  // print(list2);

  // 添加某个元素
  // List list3 = [];
  // print(list3);
  // print(list3.length);
  // list3.add(1);
  // print(list3);
  // print(list3.length);

  // 通过 new 创建的方式, 已废弃
  // List list4 = new List();

  // 创建固定长度的集合, 第二个参数为初始化的数据, 默认 5 个都是 '1'
  // List list5 = List.filled(5, '1');
  // list5[0] = 'a';
  // print(list5);
  // list5.add(1); // 报错, 固定长度不可 add
  // list5.remove(1); // 报错, 固定长度不可 remove
  // list5.length = 1; // 报错, 不可修改长度

  // List list6 = [];
  // list6.length = 5; // 长度变成 5, 默认填充 5 个 null 数据
  // print(list6); // [null, null, null, null, null]
  // list6.length = 3;
  // print(list6); // [null, null, null]

  // 6.map
  // key 和 js 不一样, 必须加引号
  // Map map = {'name': '123', 'age': '1'};
  // print(map['name']);
  // print(map['age']);
  // print(map);

  // Map map2 = new Map();
  // map2.name = '123'; 不能这样赋值, 必须通过中括号来赋值, 因为 . 可能会访问到方法
  // map2['name'] = '123';
  // map2['age'] = '1';
  // print(map2);
  // map2.forEach((key, value) {
  //   print('$key: $value');
  // });
}
