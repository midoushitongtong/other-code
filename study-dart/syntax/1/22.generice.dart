/**
 * 泛型
 *  - 主要的作用: 支持不确定数据类型
 * 使用场景
 *  - 当有一个方法, 逻辑是相同的, 但是数据类型不确定的时候就可以用泛型, 因为泛型支持不确定数据类型
 *    代价是放弃类型检查
 */

T getData<T>(T data) {
  return data;
}

class Test<T> {
  late T _data;

  void setData(T data) {
    this._data = data;
  }

  T getData() {
    return this._data;
  }
}

void main() {
  // print(getData<String>('1'));
  // print(getData<int>(2));

  // 泛型限制类型
  Test<int> t = new Test<int>();
  t.setData(1);
  print(t.getData());

  // 泛型不限制类型
  Test t2 = new Test();
  t2.setData(1);
  t2.setData('2');
  print(t2.getData());
}
