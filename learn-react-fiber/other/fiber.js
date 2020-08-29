// fiber 的作用: 解决执行栈不能中断
/**
 *          a1
 *
 *    b1          b2
 *
 * c1    c2
 *
 * 执行顺序: a1, b1, c1, c2, b2
 * 结束顺序: c1, c2, b1, b2, a1
 */
const a1 = { type: 'div', key: 'a1' };
const b1 = { type: 'div', key: 'b1', return: a1 };
const b2 = { type: 'div', key: 'b2', return: a1 };
const c1 = { type: 'div', key: 'c1', return: b1 };
const c2 = { type: 'div', key: 'c2', return: b1 };

a1.child = b1;
b1.sibling = b2;
b1.child = c1;
c1.sibling = c2;

const startTime = Date.now();

// 下一个执行单元
let nextUnitOfWork = null;

function workLoop(deadline) {
  while ((deadline.timeRemaining() > 1 || deadline.didTimeout) && nextUnitOfWork) {
    // 如果有执行单元, 就执行，然后返回下一个执行单元
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  if (!nextUnitOfWork) {
    console.log('render 阶段结束了');
    console.log(Date.now() - startTime);
  } else {
    requestIdleCallback(workLoop, {
      timeout: 100,
    });
  }
}

function performUnitOfWork(fiber) {
  beginWork(fiber);

  if (fiber.child) {
    return fiber.child;
  }

  while (fiber) {
    completeUnitOfWork(fiber);
    if (fiber.sibling) {
      return fiber.sibling;
    }
    fiber = fiber.return;
  }
}

function beginWork(fiber) {
  console.log('开始', fiber.key);
}

function completeUnitOfWork(fiber) {
  console.log('结束', fiber.key);
}

nextUnitOfWork = a1;

requestIdleCallback(workLoop, {
  timeout: 100,
});
