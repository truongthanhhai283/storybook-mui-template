import isObject from "./isObject";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isEmptyObject(value: any) {
  return isObject(value) && Object.keys(value).length === 0;
}
