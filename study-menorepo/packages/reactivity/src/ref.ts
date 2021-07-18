import { hasChanged, isObject } from '@vue/shared';
import { track, trigger } from './effect';
import { reactive } from './reactive';

export const ref = (value: any) => {
  // 把一个普通值变成引用类型
  return createRef(value);
};

export function shallowRef(value: any) {
  return createRef(value, true);
}

const convert = (v: any) => (isObject(v) ? reactive(v) : v);

class RefImpl {
  public _value;

  constructor(public rawValue: any, public shallow: boolean) {
    this._value = shallow ? rawValue : convert(rawValue);
  }

  get value() {
    // 收集当前属性, 如果这个属性变化了, 稍后可能要更新视图
    track(this, 'get', 'value');
    return this._value;
  }

  set value(newValue: any) {
    if (!hasChanged(newValue, this.rawValue)) {
      this.rawValue = newValue;
      this._value = this.shallow ? newValue : convert(newValue);
      trigger(this, 'set', 'value', newValue);
    }
  }
}

const createRef = (value: any, shallow = false) => {
  return new RefImpl(value, shallow);
};
