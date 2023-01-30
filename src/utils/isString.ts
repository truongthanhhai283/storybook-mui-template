import isNil from "./isNil";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isString(value: any): value is string {
  return !isNil(value) && typeof value.valueOf() === "string";
}
