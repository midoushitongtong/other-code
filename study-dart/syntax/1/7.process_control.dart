void main() {
  // int a = 1;
  // int b = ++a; // 先运算在赋值
  // int c = a++; // 先赋值在运算
  // print(a);
  // print(b);
  // print(c);

  // int sum = 0;
  // for (int i = 1; i <= 100; i++) {
  //   sum += i;
  // }
  // print(sum);
  // 1. int i = 0;
  // 2. i <= 100
  // 3. sum += i
  // 4. i++
  // 5. 从 2 继续执行代码

  // List list = ['1', '2', '3'];
  // for (int i = 0; i < list.length; i++) {
  //   print(list[i]);
  // }

  // List list2 = [
  //   {'name': '1'},
  //   {'name': '2'},
  //   {'name': '3'},
  // ];
  // list2.forEach((item) {
  //   print(item);
  // });

  // List list3 = [
  //   {
  //     'cate': 'cate 1',
  //     'products': [
  //       {'name': 'product 1'},
  //       {'name': 'product 2'}
  //     ]
  //   },
  //   {
  //     'cate': 'cate a',
  //     'products': [
  //       {'name': 'product b'},
  //       {'name': 'product c'}
  //     ]
  //   }
  // ];
  // list3.forEach((item) {
  //   print(item['cate']);
  //   item['products'].forEach((item) {
  //     print(item['name']);
  //   });
  //   print('===');
  // });

  // int i = 1;
  // while (i <= 10) {
  //   print(i);
  //   i++;
  // }
  // while 表达式成立才行

  // int i = 1;
  // do {
  //   print(i);
  // } while (i > 10);
  // do while 先执行一次循环体(不管表达式是否成立), 之后在判断表达式成立就继续跑

  // for (int i = 0; i < 3; i++) {
  //   if (i == 1) {
  //     continue;
  //   }
  //   print(i);
  // }
  // continue 跳出本次循环, 不会终止后续循环

  // for (int i = 0; i < 3; i++) {
  //   if (i == 1) {
  //     break;
  //   }
  //   print(i);
  // }
  // break 跳出本次循环, 会终止后续循环

  switch (1) {
    case 1:
      print('1');
      break; // 跳出 switch 结构, 后续不再执行
    default:
      print('a');
  }
}
