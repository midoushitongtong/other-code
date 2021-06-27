/**
 * 泛型接口
 */

abstract class Cache<T> {
  T? getByKey(String key);

  void setByKey(String key, T value);
}

// 文件缓存类
class FileCache<T> implements Cache<T> {
  Map<String, T> map = new Map<String, T>();

  @override
  T? getByKey(String key) {
    return this.map[key];
  }

  @override
  void setByKey(String key, T value) {
    this.map[key] = value;
  }
}

// 内存缓存类
class MemoryCache<T> implements Cache<T> {
  Map<String, T> map = new Map<String, T>();

  @override
  T? getByKey(String key) {
    return this.map[key];
  }

  @override
  void setByKey(String key, T value) {
    this.map[key] = value;
  }
}

void main() {
  FileCache<int> fileCache = new FileCache();
  fileCache.setByKey('1', 5);
  print(fileCache.getByKey('1'));

  MemoryCache<String> memory = new MemoryCache();
  memory.setByKey('1', 'abc');
  print(memory.getByKey('1'));
}
