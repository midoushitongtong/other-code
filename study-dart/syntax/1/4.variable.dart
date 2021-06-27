// dart 是强类型静态类型语言, 但是可以不声明变量类型, 会自动类型推断
/**
 * 强类型: 不倾向于对变量进行隐式转换的语言
 * 弱类型: 倾向于对变量进行隐式转换的语言
 * 动态类型: 可以在运行时改变变量的类型
 * 静态类型: 不可以在运行时改变变量的类型
 */
/**
 * 变量名命名规则
 * 标识符不能是关键字
 * 标识符不能以数字开头
 * 标识符区分大小写
 */

void main() {
  var str = 'hello world';
  String str2 = 'hello world';
  int num = 1;
  int num2 = 2;

  print(str);
  print(str2);
  print(num);
  print(num2);
}
