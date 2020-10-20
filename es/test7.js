// const s = 'aaa_a_a';

// const reg1 = /a+/g;
// // y 在剩余的字符串中, 从第一个字符开始严格匹配
// const reg2 = /a+/y;

// console.log(reg1.exec(s));
// console.log(reg2.exec(s));

// console.log(reg1.exec(s));
// console.log(reg2.exec(s));

let s = '𠮷'; // 这个字符有 4个 字节
// let s1 = '\uD842\uDFB7';

// // 如果不加 u 会匹配成功, 这是错误的
// console.log(/\uD842/.test(s1));
// // 加了 u 就能正常匹配
// console.log(/\uD842/u.test(s1));

// // 如果不加 u 会匹配失败, 这是错误的
// console.log(/^.$/.test(s));
// // 在处理 4个 字节以上的字符需要加 u
// console.log(/^.$/u.test(s));

// console.log(/\u{20BB7}/u.test(s));
// console.log(/\u{61}/u.test('a'));

console.log(/𠮷{2}/u.test('𠮷𠮷'));
