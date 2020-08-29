/**
 * 从根节点开始渲染和调度
 * 两个阶段
 *  - diff 阶段, 对比新旧 virtual dom，进行增量, 更新或创建
 *  - commit 阶段, 进行 dom 更新创建阶段
 */

import {
  TAG_ROOT,
  ELEMENT_TEXT,
  TAG_TEXT,
  TAG_HOST,
  PLACEMENT,
  DELETION,
  UPDATE,
  TAG_CLASS,
  TAG_FUNCTION_COMPONENT,
} from '../constants';
import { setProps } from '../util';
import { UpdateQueue, Update } from '../update-queue';

// 下一个工作单元
let nextUnitOfWork = null;

// RootFiber
let workInProgressRoot = null;

// RootFiber(渲染完成后)
let currentRoot = null;

// 记录删除的节点
let deletions = [];

// 正在工作中的 fiber
let workInProgressFiber = null;

// hooks 索引
let hookIndex = 0;

/**
 * 初始化工作单元
 */
export function scheduleRoot(rootFiber) {
  if (currentRoot && currentRoot.alternate) {
    // 第二次之后的更新
    // 指向第一次渲染的 fiber tree
    workInProgressRoot = currentRoot.alternate;
    // 指向当前的 fiber tree
    workInProgressRoot.alternate = currentRoot;
    if (rootFiber) {
      workInProgressRoot.props = rootFiber.props;
    }
  } else if (currentRoot) {
    if (rootFiber) {
      // 第一次更新 (至少已经渲染过一次了)
      // 指向上传一次更新的 rootFiber
      rootFiber.alternate = currentRoot;
      workInProgressRoot = rootFiber;
    } else {
      workInProgressRoot = {
        ...currentRoot,
        alternate: currentRoot,
      };
    }
  } else {
    // 第一次渲染
    workInProgressRoot = rootFiber;
  }
  workInProgressRoot.firstEffect = workInProgressRoot.lastEffect = workInProgressRoot.nextEffect = null;
  nextUnitOfWork = workInProgressRoot;
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
  } else if (currentFiber.tag === TAG_CLASS) {
    updateClassComponent(currentFiber);
  } else if (currentFiber.tag === TAG_FUNCTION_COMPONENT) {
    updateFunctionComponent(currentFiber);
  }
}

function createDOM(currentFiber) {
  if (currentFiber.elementType === ELEMENT_TEXT) {
    return document.createTextNode(currentFiber.props.text);
  }

  const stateNode = document.createElement(currentFiber.elementType);

  updateDOM(stateNode, {}, currentFiber.props);

  return stateNode;
}

function updateDOM(stateNode, oldProps, newProps) {
  if (stateNode && stateNode.setAttribute) {
    setProps(stateNode, oldProps, newProps);
  }
}

function updateHostRoot(currentFiber) {
  // 先处理自己, 如果是一个原生节点, 创建真实 DOM
  let newChildren = currentFiber.props.children;
  // 协调子 fiber
  reconcileChildren(currentFiber, newChildren);
}

function updateHostText(currentFiber) {
  if (!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber);
  }
}

function updateHostComponent(currentFiber) {
  if (!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber);
  }

  const children = currentFiber.props.children;
  reconcileChildren(currentFiber, children);
}

function updateClassComponent(currentFiber) {
  if (!currentFiber.stateNode) {
    // type 就是类对象 = new ToDo()
    currentFiber.stateNode = new currentFiber.type(currentFiber.props);
    // 双向指针
    currentFiber.stateNode.internalFiber = currentFiber;
    currentFiber.updateQueue = new UpdateQueue();
  }

  // 初始化组件 state
  currentFiber.stateNode.state = currentFiber.updateQueue.forceUpdate(currentFiber.stateNode.state);
  console.log(currentFiber.stateNode.state);

  let newElement = currentFiber.stateNode.render();
  const newChildren = [newElement];
  reconcileChildren(currentFiber, newChildren);
}

function updateFunctionComponent(currentFiber) {
  workInProgressFiber = currentFiber;
  hookIndex = 0;
  workInProgressFiber.hooks = [];

  const newChildren = [currentFiber.type(currentFiber.props)];
  reconcileChildren(currentFiber, newChildren);
}

function reconcileChildren(currentFiber, newChildren) {
  // 新虚拟 DOM 数组索引
  let newChildIndex = 0;
  // 如果当前 fiber 有 alertnate 和 alertnate.child
  let oldFiber = currentFiber.alternate && currentFiber.alternate.child;
  // 清空 effect
  if (oldFiber) {
    oldFiber.firstEffect = oldFiber.lastEffect = oldFiber.nextEffect = null;
  }
  // 上一个兄弟节点
  let prevSibling;

  // 循环虚拟DOM数组
  while (newChildIndex < newChildren.length || oldFiber) {
    let newChild = newChildren[newChildIndex];
    // 新 fiber
    let newFiber;

    const sameType = oldFiber && newChild && oldFiber.type === newChild.type;

    let tag;
    if (newChild && typeof newChild.type === 'function' && newChild.type.prototype.isReactComponent) {
      // 类组件
      tag = TAG_CLASS;
    } else if (newChild && typeof newChild.type === 'function') {
      tag = TAG_FUNCTION_COMPONENT;
    } else if (newChild && newChild.type === ELEMENT_TEXT) {
      // 这是一个文本节点
      tag = TAG_TEXT;
    } else if (newChild && typeof newChild.type === 'string') {
      // 这是一个原生节点
      tag = TAG_HOST;
    }

    if (sameType) {
      if (oldFiber.alternate) {
        newFiber = oldFiber.alternate;
        newFiber.props = newChild.props;
        newFiber.alternate = oldFiber;
        newFiber.effectTag = UPDATE;
        newFiber.updateQueue = oldFiber.updateQueue || new UpdateQueue();
        newFiber.nextEffect = null;
      } else {
        // 老 fiber 和新的 VDOM 类型一样, 可以复用老的 DOM 节点, 更新即可
        newFiber = {
          tag: oldFiber.tag,
          type: oldFiber.type,
          props: newChild.props,
          stateNode: oldFiber.stateNode,
          return: currentFiber,
          updateQueue: oldFiber.updateQueue || new UpdateQueue(),
          // 新 fiber 指向老 fiber
          alternate: oldFiber,
          effectTag: UPDATE,
          nextEffect: null,
        };
      }
    } else {
      if (newChild) {
        newFiber = {
          // TAG_HOST
          tag,
          // div
          elementType: newChild.type,
          // 元素节点
          stateNode: null,
          // 父 fiber
          return: currentFiber,
          props: newChild.props,
          effectTag: PLACEMENT, // 首次渲染，一定是增加，所以是 Placement,
          type: newChild.type,
        };
      }

      // 删除老的
      if (oldFiber) {
        oldFiber.effectTag = DELETION;
        deletions.push(oldFiber);
      }
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (newFiber) {
      // 第一个会被当做父 fiber 的 child，其他的作为 child 的 sibling
      if (newChildIndex === 0) {
        currentFiber.child = newFiber;
      } else {
        prevSibling.sibling = newFiber;
      }
      prevSibling = newFiber;
    }

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
  // 将 fiber 渲染到真实的 dom 之前, 先删除不需要的元素
  deletions.forEach(commitWork);

  let currentFiber = workInProgressRoot.firstEffect;
  while (currentFiber) {
    commitWork(currentFiber);
    currentFiber = currentFiber.nextEffect;
  }

  deletions.length = 0;

  // 保存渲染完成的 RootFiber
  currentRoot = workInProgressRoot;

  workInProgressRoot = null;
}

function commitWork(currentFiber) {
  if (!currentFiber) {
    return;
  }

  let returnFiber = currentFiber.return;

  // 如果父节点是 class 节点, 需要向上获取, 因为 class 节点的 stateNode 不是原生 dom
  while (returnFiber.tag !== TAG_HOST && returnFiber.tag !== TAG_ROOT && returnFiber.tag !== TAG_TEXT) {
    returnFiber = returnFiber.return;
  }

  const domReturn = returnFiber.stateNode;

  if (currentFiber.effectTag === PLACEMENT) {
    let nextFiber = currentFiber;
    if (nextFiber.tag === TAG_CLASS) {
      return;
    }
    // 如果添加的节点是 class 节点, 需要向下获取, 因为 class 节点的 stateNode 不是原生 dom
    while (nextFiber.tag !== TAG_HOST && nextFiber.tag !== TAG_TEXT) {
      nextFiber = currentFiber.child;
    }
    if (currentFiber.tag !== TAG_CLASS && currentFiber.tag !== TAG_FUNCTION_COMPONENT) {
      // 新增节点
      domReturn.append(currentFiber.stateNode);
    }
  } else if (currentFiber.effectTag === DELETION) {
    // 删除节点
    // domReturn.removeChild(currentFiber.stateNode);
    return commitDelection(currentFiber, domReturn);
  } else if (currentFiber.effectTag === UPDATE) {
    // 修改节点
    if (currentFiber.type === ELEMENT_TEXT) {
      if (currentFiber.alternate.props.text !== currentFiber.props.text) {
        currentFiber.stateNode.textContent = currentFiber.props.text;
      }
    } else {
      updateDOM(currentFiber.stateNode, currentFiber.alternate.props, currentFiber.props);
    }
  }

  currentFiber.effectTag = null;
}

function commitDelection(currentFiber, domReturn) {
  if (currentFiber.tag === TAG_HOST || currentFiber.tag === TAG_TEXT) {
    domReturn.removeChild(currentFiber.stateNode);
  } else {
    // 删除的不是 dom 节点, 需要删除其子节点
    commitDelection(currentFiber.child, domReturn);
  }
}

// 告诉浏览器, 有空闲的时间才执行任务
requestIdleCallback(workLoop, {
  // 超过 500 毫秒强制执行
  timeout: 500,
});

/**
 * workInProgressFiber = currentFiber;
 * hookIndex = 0;
 * workInProgressFiber.hooks = [];
 */
export function useReducer(reducer, initialValue) {
  let newHook =
    workInProgressFiber.alternate &&
    workInProgressFiber.alternate.hooks &&
    workInProgressFiber.alternate.hooks[hookIndex];

  if (newHook) {
    // 第二次渲染
    newHook.state = newHook.updateQueue.forceUpdate(newHook.state);
  } else {
    newHook = {
      state: initialValue,
      updateQueue: new UpdateQueue(),
    };
  }

  const dispatch = (action) => {
    if (typeof action !== 'object') {
      action = {
        value: action,
      };
    }

    const playload = reducer ? reducer(newHook.state, action) : action;

    newHook.updateQueue.enqueueUpdate(new Update(playload));
    scheduleRoot();
  };

  // 保存 hooks 到数组
  workInProgressFiber.hooks[hookIndex++] = newHook;

  return [newHook.state, dispatch];
}

export function useState(initialValue) {
  const value =
    typeof initialValue !== 'object'
      ? {
          value: initialValue,
        }
      : initialValue;

  const reducer = useReducer(null, value);

  return [reducer[0].value, reducer[1]];
}
