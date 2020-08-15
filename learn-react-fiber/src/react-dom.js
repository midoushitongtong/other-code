import { TAG_ROOT } from './constants';
import { scheduleRoot } from './schedule';

/**
 * render 是要把一个元素渲染到一个容器内容
 */
function render(element, container) {
  const rootFiber = {
    // 元素的类型
    tag: TAG_ROOT,
    // 如果是原生节点的话, stateNode 指向真实 DOM 元素,
    stateNode: container,
    props: {
      // react 元素
      children: [element],
    },
  };
  scheduleRoot(rootFiber);
}

const ReactDom = {
  render,
};

export default ReactDom;
