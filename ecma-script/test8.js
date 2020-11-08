const a = 1;
const b = 2;
// console.log(`hello world ${eval(a + b)}`);

const q = `1
2
3`;
console.log(q);

function Price(strings) {
  const s1 = strings[0];
  const height = 100;

  // 可以控制返回的结果
  return `${s1}${height}`;
}
console.log(Price`小张的身高是`);

console.log('{{11}}'.match(/{{(.*)}}/));
