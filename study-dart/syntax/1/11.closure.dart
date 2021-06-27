void main() {
  /**
   * 闭包的作用
   *  - 避免污染外部作用域
   *  - 常驻内存
   *  - 隐藏内部实现
   * 怎么才会产生闭包
   *  一个作用域使用了另一个作用域的数据, 就会形成闭包
   */
  int Function() getNum() {
    // a 不会污染外部作用域, 同时也可以常驻内存
    int a = 1;

    return () {
      // 此作用域引用了外部作用域的 a, 所以产生了闭包
      return a++;
    };
  }

  // a 是闭包, 只要还在使用, 就不会被垃圾回收机制销毁
  int Function() a = getNum();
  print(a());
  print(a());
  print(a());
  print(a());
  print(a());
}
