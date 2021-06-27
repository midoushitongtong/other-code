int getSum(int number) {
  int sum = 0;
  for (int i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

// 回调函数
void callback(void Function() callback) {
  callback();
}

// 可选参数
void optionParams([String? username]) {
  if (username != null) {
    print(username);
  } else {
    print('default value');
  }
}

// 默认参数
// username 默认 123
// age 默认 null
void optionParams2([String username = '123', int age = 123]) {
  print(username);
  print(age);
}

// 命名参数
// required 必须传递的参数
objectParams({required String username, int? age}) {
  print(username);
  print(age);
}

int Function(int n) factorial = (int n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

void main() {
  // print(getSum(100));

  // callback(() {
  //   print('hello world');
  // });

  // optionParams();
  // optionParams('a');
  // optionParams2();
  // optionParams2('a', 123);

  // objectParams(username: '123');

  // List list = [1, 2];
  // // 箭头函数, 只能有一行代码
  // list.forEach((item) => print(item));

  // List list = [1, 2, 3];
  // List list2 = list.map((item) => item > 2 ? item * 2 : item).toList();
  // print(list2);

  // bool isEvenNumber(int n) {
  //   return n % 2 == 0;
  // }

  // for (int i = 1; i <= 10; i++) {
  //   if (isEvenNumber(i)) {
  //     print(i);
  //   }
  // }

  // int Function() anonymousFunc = () {
  //   return 1;
  // };

  // print(anonymousFunc());

  // ((int a) {
  //   print(a);
  // })(1);

  // print(factorial(5));

  // int sum(int n) {
  //   if (n == 1) {
  //     return 1;
  //   }
  //   return n + sum(n - 1);
  // }

  // print(sum(100));
}
