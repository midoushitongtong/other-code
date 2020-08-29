import { ELEMENT_TEXT } from '../constants';
import { UpdateQueue, Update } from '../update-queue';
import { scheduleRoot, useReducer, useState } from '../scheduler';

/**
 * 创建 react 元素
 *
 * @param {*} type html 标签
 * @param {*} config props 配置对象
 * @param  {...any} children 子节点
 */
function createElement(type, config, ...children) {
  delete config.__self;
  delete config.__source;

  return {
    type,
    props: {
      ...config,
      children: children.map((child) => {
        // 兼容处理
        // 如果是 react 元素则直接返回自身
        // 如果不是 react 元素, 则创建一个 react 元素其类型是 ELEMENT_TEXT, 并将其返回
        return typeof child === 'object'
          ? child
          : {
              type: ELEMENT_TEXT,
              props: {
                text: child,
                children: [],
              },
            };
      }),
    },
  };
}

class Component {
  constructor(props) {
    this.props = props;
    this.updateQueue = new UpdateQueue();
  }

  setState(payload) {
    let update = new Update(payload);

    this.internalFiber.updateQueue.enqueueUpdate(update);

    scheduleRoot();
  }
}

// 表明这是一个 class 组件
Component.prototype.isReactComponent = {};

const React = {
  createElement,
  Component,
  useReducer,
  useState,
};

export default React;
