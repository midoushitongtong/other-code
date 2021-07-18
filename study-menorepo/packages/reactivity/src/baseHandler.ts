import { extend, hasChanged, hasOwn, isArray, isIntegerKey, isObject } from '@vue/shared';
import { activeEffect, track, trigger } from './effect';
import { reactive, readonly } from './reactive';

const createGetter = (isReadonly = false, shallow = false) => {
  return (target: any, key: any, receiver: object) => {
    const res = Reflect.get(target, key, receiver);
    if (!isReadonly) {
      // 收集当前属性, 如果这个属性变化了, 稍后可能要更新视图
      track(target, 'get', key);
    }
    // 如果是 value 是 object 继续代理此 object
    if (isObject(res)) {
      // 懒递归, 只有取值的时候才做
      return isReadonly ? readonly(res) : reactive(res);
    }
    if (shallow) {
      return res;
    }
    return res;
  };
};

const createSetter = (shallow = false) => {
  return (target: any, key: any, value: any, receiver: object) => {
    const oldValue = target[key];

    /**
     * 为什么不用这种方法: target[key] = value;
     * 假设某个属性不能被修改, 这种设置方式不会报错, 如果是通过 Reflect.set 会返回 false
     */
    const res = Reflect.set(target, key, value, receiver);

    activeEffect && activeEffect();

    /**
     * 针对数组, 如果调用push方法, 会触发 2 次, 一次是值, 一次是 length
     */
    const hadKey =
      isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    if (!hadKey) {
      trigger(target, 'add', key, value);
    } else if (hasChanged(oldValue, value)) {
      trigger(target, 'set', key, value, oldValue);
    }

    return res;
  };
};

const get = createGetter();
const shallowGet = createGetter(false, true);
const readonlyGet = createGetter(true);
const shallowReadonlyGet = createGetter(true, true);

const set = createSetter();
const shallowSet = createSetter(true);

export const reactiveHandlers = {
  get,
  set,
};

export const shaollwReactiveHandles = {
  get: shallowGet,
  set: shallowSet,
};

const readonlySet = {
  set(target: object, key: any) {
    console.warn(`cannot set ${JSON.stringify(target)} on key: ${key}`);
  },
};

export const readonlyHandlers = extend(
  {
    get: readonlyGet,
  },
  readonlySet
);

export const shallowReadonlyHandlers = extend(
  {
    get: shallowReadonlyGet,
  },
  readonlySet
);
