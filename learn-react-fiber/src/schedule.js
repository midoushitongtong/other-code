/**
 * 从根节点开始渲染和调度
 * 两个阶段
 *  - diff 阶段, 对比新旧 virtual dom，进行增量, 更新或创建
 *  - commit 阶段, 进行 dom 更新创建阶段
 */

import { TAG_ROOT, ELEMENT_TEXT, TAG_TEXT, TAG_HOST, PLACEMENT } from './constants';
import { setProps } from './util';

// 下一个工作单元
let nextUnitOfWork = null;

// RootFiber 的根
let workInProgressRoot = null;

/**
 * 初始化工作单元
 */
export function scheduleRoot(rootFiber) {
  workInProgressRoot = rootFiber;
  nextUnitOfWork = rootFiber;
}

/**
 * 执行工作单元
 */
function performUnitOfWork(currentFiber) {
  // 把子元素变成子 fiber
  beginWork(currentFiber);

  // 如果有子节点就返回以第一个子节点
  if (currentFiber.child) {
    return currentFiber.child;
  }

  while (currentFiber) {
    // 没有子节点就代表当前节点已经完成了调和工作，
    // 就可以结束 fiber 的调和，进入收集副作用的步骤(completeUnitOfWork)
    completeUnitOfWork(currentFiber);
    if (currentFiber.sibling) {
      return currentFiber.sibling;
    }

    currentFiber = currentFiber.return;
  }
}

/**
 * 在完成的时候要收集有副作用的 fiber, 然后组成 effect list
 * 每个 fiber 有两个属性
 *  - fistEffect 指向第一个有副作用的子 fiber
 *  - lastEffect 指向最后一个有副作用的子 fiber
 * 中间的用 nextEffect 做成一个单链表
 *
 */
function completeUnitOfWork(currentFiber) {
  const returnFiber = currentFiber.return;
  debugger;
  if (returnFiber) {
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = currentFiber.firstEffect;
    }
    if (!!currentFiber.lastEffect) {
      if (!!returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber.firstEffect;
      }
      returnFiber.lastEffect = currentFiber.lastEffect;
    }

    const effectTag = currentFiber.effectTag;
    if (effectTag) {
      if (!!returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber;
      } else {
        returnFiber.firstEffect = currentFiber;
      }
      returnFiber.lastEffect = currentFiber;
    }
  }
}

/**
 * 开始工作
 * 两个步骤
 *  - 创建真实 dom
 *  - 创建子 fiber
 */
function beginWork(currentFiber) {
  if (currentFiber.tag === TAG_ROOT) {
    updateHostRoot(currentFiber);
  } else if (currentFiber.tag === TAG_TEXT) {
    updateHostText(currentFiber);
  } else if (currentFiber.tag === TAG_HOST) {
    updateHostComponent(currentFiber);
  }
}

function createDOM(currentFiber) {
  if (currentFiber.elementType === ELEMENT_TEXT) {
    return document.createTextNode(currentFiber.props.text);
  }

  const stateNode = document.createElement(currentFiber.elementType);
  setProps(stateNode, {}, currentFiber.props);
  return stateNode;
}

function updateHostComponent(currentFiber) {
  if (!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber);
  }

  const children = currentFiber.props.children;
  reconcileChildren(currentFiber, children);
}

function updateHostText(currentFiber) {
  if (!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber);
  }
}

function updateHostRoot(currentFiber) {
  // 先处理自己, 如果是一个原生节点, 创建真实 DOM
  let newChildren = currentFiber.props.children;
  // 协调子 fiber
  reconcileChildren(currentFiber, newChildren);
}

function reconcileChildren(currentFiber, newChildren) {
  let newChildIndex = 0; // 新虚拟 DOM 数组索引
  let prevSibling; // 上一个兄弟节点

  // 循环虚拟DOM数组
  while (newChildIndex < newChildren.length) {
    let newChild = newChildren[newChildIndex];

    // 要根据不同的虚拟 DOM 类型，给到不同的 WorkTag
    let tag;
    if (newChild.type === ELEMENT_TEXT) {
      tag = TAG_TEXT;
    } else if (typeof newChild.type === 'string') {
      tag = TAG_HOST;
    }

    let newFiber = {
      tag,
      elementType: newChild.type,
      stateNode: null,
      return: currentFiber,
      props: newChild.props,
      effectTag: PLACEMENT, // 首次渲染，一定是增加，所以是 Placement
    };

    if (newFiber) {
      // 第一个会被当做父 fiber 的 child，其他的作为 child 的 sibling
      if (newChildIndex === 0) {
        currentFiber.child = newFiber;
      } else {
        prevSibling.sibling = newFiber;
      }
    }

    prevSibling = newFiber;
    newChildIndex++;
  }
}

/**
 * 循环工作 nextUnitWork
 */
function workLoop(deadline) {
  // 是否让出时间片
  let shouldYield = false;

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // 如果当前没有空闲时间, 就要让出时间片
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && workInProgressRoot) {
    console.log('render 阶段结束');
    commitRoot();
  }

  // 不管有没有任务, 都告诉浏览器, 有空闲的时间继续执行任务
  requestIdleCallback(workLoop, {
    // 超过 500 毫秒强制执行
    timeout: 500,
  });
}

function commitRoot() {
  let currentFiber = workInProgressRoot.firstEffect;
  while (currentFiber) {
    commitWork(currentFiber);
    currentFiber = currentFiber.nextEffect;
  }

  workInProgressRoot = null;
}

function commitWork(currentFiber) {
  if (!currentFiber) {
    return;
  }

  let returnFiber = currentFiber.return;
  const domReturn = returnFiber.stateNode;

  if (currentFiber.effectTag === PLACEMENT && currentFiber.stateNode != null) {
    domReturn.append(currentFiber.stateNode);
  }

  currentFiber.effectTag = null;
}

// 告诉浏览器, 有空闲的时间才执行任务
requestIdleCallback(workLoop, {
  // 超过 500 毫秒强制执行
  timeout: 500,
});
