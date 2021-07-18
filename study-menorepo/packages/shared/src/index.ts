export const isObject = (val: any) => {
  return typeof val === 'object' && val !== null;
};

export function hasChanged(oldValue: any, newValue: any) {
  return oldValue === newValue;
}

export const isArray = Array.isArray;

export const extend = Object.assign;

export const isIntegerKey = (key: any) => {
  return parseInt(key) + '' === key;
};

export const hasOwn = (target: any, key: any) => {
  Object.prototype.hasOwnProperty.call(target, key);
};
