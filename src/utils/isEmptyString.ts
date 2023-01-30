import isString from "./isString";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isEmptyString(value: any): value is string {
  return isString(value) && value.length === 0;
}
