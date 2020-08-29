import { ELEMENT_TEXT } from '../constants';

function setProp(dom, key, value) {
  if (/^on/.test(key)) {
    dom[key.toLowerCase()] = value;
  } else if (key === 'style') {
    if (value) {
      for (let styleName in value) {
        if (value.hasOwnProperty(styleName)) {
          dom.style[styleName] = value[styleName];
        }
      }
    }
  } else {
    dom.setAttribute(key, value);
  }
  return dom;
}

export function setProps(dom, oldProps, newProps) {
  for (let key in oldProps) {
    if (key !== 'children') {
      if (newProps.hasOwnProperty(key)) {
        // 新老都有, 更新
        setProp(dom, key, newProps[key]);
      } else {
        // 老的有新的没有, 删除
        dom.removeAttribute(key);
      }
    }
  }
  for (let key in newProps) {
    if (key !== 'children') {
      if (!oldProps.hasOwnProperty(key)) {
        // 老的没有新的有, 添加
        setProp(dom, key, newProps[key]);
      }
    }
  }
}

export function createDOM(currentFiber) {
  if (currentFiber.elementType === ELEMENT_TEXT) {
    return document.createTextNode(currentFiber.pendingProps.text);
  }

  const stateNode = document.createElement(currentFiber.elementType);
  setProps(stateNode, {}, currentFiber.pendingProps);
  return stateNode;
}
