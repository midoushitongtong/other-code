import { isArray, isIntegerKey } from '@vue/shared';

export const effect = (fn: Function, options: any = {}) => {
  const effect = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect();
  }
  return effect;
};

const effectStack: Function[] = []; // effect 栈
export let activeEffect: Function | null = null; // 当前执行的 effect
let id = 0;

const createReactiveEffect = (fn: Function, options: any) => {
  // effect 中的 effect
  const effect: any = () => {
    try {
      effectStack.push(fn);
      activeEffect = effect;
      return fn();
    } finally {
      effectStack.pop();
      activeEffect = effectStack[effectStack.length - 1];
    }
  };

  effect.id = id++;
  effect.__isEffect = true;
  effect.options = options;
  effect.deps = []; // effect 依赖

  return effect;
};

// 依赖收集
const targetMap = new WeakMap();
export const track = (target: object, type: any, key: any) => {
  if (!activeEffect) {
    return; // 用户只是取值, 而且这个值不是在 effect 中使用, 什么都不做
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
  }
};

// 从映射表找到 effect 重新执行
export const trigger = (target: object, type: any, key: any, newValue: any, oldValue?: any) => {
  const depsMap = targetMap.get(target);

  if (!depsMap) return;

  const effectsSet = new Set();

  const add = (effectsAdd: any) => {
    if (effectsAdd) {
      effectsAdd.forEach((effect: any) => {
        effectsSet.add(effect);
      });
    }
  };

  if (key === 'length' && isArray(target)) {
    depsMap.forEach((dep: any, key: any) => {
      if (key > newValue || key === 'length') {
        add(dep);
      }
    });
  } else {
    add(depsMap.get(key));
    switch (type) {
      case 'add':
        if (isArray(target) && isIntegerKey(key)) {
          add(depsMap.get('length'));
        }
    }
  }

  effectsSet.forEach((effect: any) => effect());
};
