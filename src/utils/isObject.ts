import isNil from "./isNil";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isObject(value: any): value is Record<string, any> {
  return (
    !isNil(value) &&
    (typeof value === "object" || typeof value === "function") &&
    !Array.isArray(value)
  );
}
