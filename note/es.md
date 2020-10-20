##### let

- let 变量是块级作用域
- let 不能重复定义
- let 不会进行变量提升

##### const

- const 一定定义不能重新赋值
- const 必须有初始值

##### 作用域

- 全局作用域
- 函数作用域
- 块状作用域
- 动态作用域
- 静态作用域

##### 数组遍历

- es5
  - for in(能遍历数组, 但通常用于遍历对象, 遍历数组可能会出现不稳定性, 因为拿到的是 key 不是 index)
  - forEach
  - every 返回 true 继续遍历
  - some 返回 false 继续遍历

- es6
  - for of

##### 伪数组

- 什么是伪书组
  - 按索引存储数据的对象
- 常见的伪数组
   - arguments
   - dom list
- es6之前转换伪数组 Array.prototype.slice.call
- es6转换伪数组 Array.from

##### 数组与对象转换

- Object.entries(obj) 将对象转换为数组
- Object.fromEntries(arr); 将数组转换为对象

##### 剩余参数

- function (a, b, ...c) {}

##### 扩展运算符

 - const a = [...arr]

##### 箭头函数

- 普通函数 this 指向调用者, 没有就指向 window
- 箭头函数自身没有this, this 继承于父级上下文, `字典对象没有上下文`

##### Set

- 存储不重复数据

##### Map

- 以key value的形式存储数据
- 比普通字典对象更快
- key 可以是任意值, 对象、函数、基本数据类型

##### /y 正则

- 粘性查找, 在剩余的字符串中, 从第一个字符开始严格匹配

##### /u 正则

- 兼容 unicode 全都加 u 准没错

##### 模板字符串

- 字符串换行
- 字符串拼接

##### 解构赋值

- 解构数组
- 解构对象
- 解构字符串
- 赋值给现有的变量

##### promise

- 用于解决回调嵌套
- 用于简化异步操作

##### reflect

- 将一些明显属于语言内部的方法, 放到 `Reflect ` 对象上

- 增强语义化, 让其 api 更加合理

  | Reflect                          | 相当于与                                      |
  | -------------------------------- | --------------------------------------------- |
  | Reflect.set                      |                                               |
  | Reflect.get                      |                                               |
  | Reflect.apply                    |                                               |
  | Reflect.cosntruct                | new target                                    |
  | Reflect.defineProperty           | 和 Object.defineProperty 完全相同, 返回值不同 |
  | Reflect.deleteProperty           | delete                                        |
  | Reflect.has                      | 和 in 运算符完全相同                          |
  | Reflect.ownKeys                  | Object.keys                                   |
  | Reflect.preventExtensions        | Object.preventExtensions                      |
  | Reflect.isExtensible             | Object.isExtensible                           |
  | Reflect.getOwnPropertyDescriptor | Object.getOwnPropertyDescripotor              |
  | Reflect.getPrototypeOf           | Object.getPrototypeOf                         |
  | Reflect.setPrototypeOf           | Object.setPrototypeOf                         |


##### proxy

- 用处
  - 屏蔽原始信息
  - 控制对象属性不被修改
  - 对赋值的数据进行校验, 校验通过才能赋值

##### generator

- 控制函数是否继续执行
- 注意
  - 必须调用 next 方法, 函数才会开始运行
  - 第一次调用 next 方法, 传递的参数会被忽略
  - 如果 next 方法不传参数 yield 永远返回 undefined
  - generator 遵循可迭代协议和迭代器协议

##### iterator

- 可以让对象支持迭代

- ```javascript
  const data = {
    authors: {
      a: ['a1', 'a2', 'a3'],
      b: [],
      c: ['c1', 'c2', 'c3'],
    },
  };
  
  // 给 data 对象加上迭代器
  data[Symbol.iterator] = function () {
    const { authors } = this;
    let values = [];
    for ([key, value] of Object.entries(authors)) {
      values = values.concat(value);
    }
  
    return {
      next() {
        return {
          done: values.length === 0,
          value: values.shift(),
        };
      },
    };
  };
  
  for (v of data) {
    console.log(v);
  }
  
  ```


- 可迭代协议
  - [Symbol.iterator] 有这个就表示此对象支持迭代
- 迭代器协议
  - 迭代器必须是一个方法
    - 此方法必须返回一个对象
      - 此对象必须包含 next 方法
      - next 方法必须包含 done 属性和 value 属性
        - done 是否迭代完成
        - value 当前迭代的值

##### 模块化编程

- ```html
  <script src="a.js" type="module"></script>
  ```

- `type=module` 表示此js用到了模块化相关的语法

- 模块化的 js 拥有独立的作用域, 在外部无法获取内部定义的数据

##### async

- 加上 async 关键字的函数, 会自动返回 promise 对象, 切返回值会自动加上 Promise.resolve()

##### es 7

- arr.includes() 判断数组是否包含某项
- ** 幂运算等效于 Math.pow

##### es8

- Object.entries(obj) 将对象转换为数组
- .padStart 补位向前
- .padEnd 补位向后
- .getOwnPropertyDescriptor 获取对象属性的描述内容
- .getOwnPropertyDescriptors 获取全部对象属性的描述内容
- async await

##### es9

- for await of 遍历异步操作

- [Symbol.asyncIterator] 异步迭代器, 与 for await of 一起使用

- promise .finally 无论是 resolve reject 都会执行此方法

- Object spread 操作符

  - ```javascript
    const a = {
    	a: 1
    };
    
    const b = {
    	// 浅拷贝 a 对象中的属性到 b 对象中
    	...a,
    };
    ```

- Object rest 操作符

  - ```javascript
    const a = {
    	a: 1,
    	b: 2,
    	c: 3,
    };
    
    // 将其他属性存储到 w 变量中
    const { a, ...w } = a;
    ```

- 正则 dotAll 修饰符

  -  在正则中 `.` 是一个特殊字符, 它可以匹配任意字符,  但不能匹配以下字符
    - 四个字节的UTF-16字符
    - 换行符（\n）
    - 回车符（\r）
    - 行分隔符
    - 段分隔符

  - 为了让 `.` 能匹配任意字符, es9 中引入了 dotAll 修饰符 `/s`

  - ```javascript
    console.log(/foo.bar/.test('foo\nbar')); // false
    console.log(/foo.bar/s.test('foo\nbar')); // true
    console.log(/foo.bar/.dotAll); // false 不支持 dotAll
    console.log(/foo.bar/s.dotAll); // true 支持 dotAll
    ```

- 正则命名分组匹配

  ```javascript
  // 之前的做法, 使用下标获取分组的值
  const arr = '2020-01-05'.match(/(\d{4})-(\d{2})-(\d{2})/);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
  
  // 使用命名分组匹配的做法, 通过别名的方式获取分组的值
  // 好处是更直观
  const arr2 = '2020-01-05'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
  console.log(arr2.groups.year);
  console.log(arr2.groups.month);
  console.log(arr2.groups.day);
  ```

- 后行断言 - 先匹配后面的内容在匹配前面的内容

- ```javascript
  const str = 'hello world';
  // 这里的小括号不是分组, 而是一种先行断言的模式
  // 先行断言, 如果匹配到 hello 就会向后匹配, 等于 \sworld 才满足条件
  console.log(str.match(/hello(?=\sworld)/));
  // // 后行断言, 如果匹配到 world 就会向前匹配，等于 hello\s 才满足条件
  console.log(str.match(/(?<=hello\s)world/));
  // // 后行断言, 如果匹配到 world 就会向前匹配，不等于 hello\s 才满足条件
  console.log(str.match(/(?<!hello\s)world/)); // null
  ```

##### es10

- flat
- flatMap
- trimStart
- trinEnd

- Object.fromEntries
- bigInt