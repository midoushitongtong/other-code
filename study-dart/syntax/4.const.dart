// 常量, 定义了就不能改变
/**
 * const 和 final 关键字都用于定义常量
 * 两者的区别
 *  - final 拥有 const 的编译时常量的特性, 最重要的他是运行时常量, 并且 final 是惰性的
 */

void main() {
  const a = 1;
  final b = 2;

  // const a2 = new DateTime.now(); // 编译器报错, 因为这不是一个不变的量，每时每刻都在变化
  final b2 = new DateTime.now(); // 正常, 因为 final 是运行时常量

  print(a);
  print(b);
}
