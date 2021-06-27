void main() {
  // 检测数据是什么类型
  var data = {'a': '1'};

  if (data is String) {
    print('string');
  }

  if (data is int) {
    print('int');
  }

  if (data is bool) {
    print('bool');
  }

  if (data is List) {
    print('list');
  }

  if (data is Map) {
    print('map');
  }
}
