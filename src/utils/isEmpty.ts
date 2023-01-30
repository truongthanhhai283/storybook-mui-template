import isEmptyArray from "./isEmptyArray";
import isEmptyObject from "./isEmptyObject";
import isNil from "./isNil";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isEmpty(value: any) {
  return (
    isEmptyArray(value) || isEmptyObject(value) || isNil(value) || value === ""
  );
}
