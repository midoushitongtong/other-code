void main() {
  // Set set = new Set();
  // set.add('1');
  // set.add('5');
  // set.add('1'); // 会添加失败 set 不可添加相同数据
  // print(set);

  // List list = [1, 1, 1];
  // Set set = new Set();
  // set.addAll(list);
  // print(set);
  // print(set.toList());
  // print(list.toSet().toList());

  // Map map = {'name': '1', 'age': 5};
  // map["a"] = 50;
  // print(map.keys.toList());
  // print(map.values.toList());

  // Map map = {};
  // map.addAll({'name': '1', 'age': 5});
  // map.remove('name');
  // print(map);
  // print(map.containsKey('age'));
  // print(map.containsValue(5));

  List list = [1, 2, 3];
  list.forEach((item) {
    print(item);
  });
  print(list.map((item) => item * 2));
  print(list.where((item) => item > 2));
  print(list.any((item) => item > 2)); // 有一个满足条件就返回 true
  print(list.every((item) => item > 0)); // 全部满足条件才返回 ture

  Map map = {'name': '1', 'age': 2};
  map.forEach((key, value) {
    print('${key}: ${value}');
  });
  // map.entries.forEach((item) {
  //   print(item.key);
  //   print(item.value);
  // });
}
