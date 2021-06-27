/**
 * dart 库主要有三种
 *  - 自定义的库
 *    import './abc.dart';
 *  - 系统内置库
 *    import 'dart:math';
 *  - pub 包管理系统
 *    1. 根目录创建 pubspec.yarm
 *    2. 配置包 名称 版本 等信息
 *    3. pub get 下载到本地
 *    使用的时候 import 'package:http://abc.dart';
 */
import './Test.dart' as T; // 库的重命名
// import './Test.dart' show Test; // 只引入这个库中的 Test 类, 其他成员不引入
// import './Test.dart' hide Test; // 不引入这个库的 Test 类, 其他成员正常引入
import 'dart:math';

void main() {
  T.Test t = new T.Test('1');
  print(t.getName());

  print(max(2, 5));
}
