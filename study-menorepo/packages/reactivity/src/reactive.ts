import { isObject } from '@vue/shared';
import {
  reactiveHandlers,
  shaollwReactiveHandles,
  readonlyHandlers,
  shallowReadonlyHandlers,
} from './baseHandler';

export const reactive = (target: object) => {
  return createReactiveObject(target, false, reactiveHandlers);
};

export const shallowReactive = (target: object) => {
  return createReactiveObject(target, false, shaollwReactiveHandles);
};

export const readonly = (target: object) => {
  return createReactiveObject(target, true, readonlyHandlers);
};

export const shallowReadonly = (target: object) => {
  return createReactiveObject(target, true, shallowReadonlyHandlers);
};

/**
 *
 * @param target 创建代理对象
 * @param isReadonly 是否只读
 * @param baseHandler 针对不同方式创建不同代理对象
 */
const reactiveMap = new WeakMap(); // 存放对象的缓存 (用 WeakMap 而不用 Map 的原因: 只要对象销毁了, 在 WeakMap 中也会自动被销毁)
const readonlyMap = new WeakMap();
const createReactiveObject = (target: object, isReadonly: boolean, baseHandler: object) => {
  if (!isObject(target)) {
    return target;
  }
  const proxyMap = isReadonly ? readonlyMap : reactiveMap;
  const existProxy = proxyMap.get(target);
  if (existProxy) {
    return existProxy;
  }
  // 如果是对象, 就生成一个代理对象
  const proxy = new Proxy(target, baseHandler);
  // 将原对象和代理对象做一次映射
  proxyMap.set(target, proxy);
  return proxy;
};
