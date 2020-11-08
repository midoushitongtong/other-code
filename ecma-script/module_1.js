const aaa = '1';

const bbb = {
  a: 1,
  b: 2,
};

function test(str) {
  console.log(str);
}

class Test {
  constructor() {
    this.id = 1;
  }
}

export { aaa, bbb, test, Test };

export default 'ccc';

export * from './module_2.js';

export function test1() {
  console.log('test1');
}

export function test2() {
  test1();
  console.log('test2');
}
