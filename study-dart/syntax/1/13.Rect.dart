class Rect {
  int width;

  int height;

  // 延迟赋值
  Rect()
      : width = 1,
        height = 11 {}

  get area {
    return this.width * this.height;
  }
}
