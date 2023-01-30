/* eslint-disable @typescript-eslint/no-explicit-any */
export default function isFunction(
  value: any
): value is (...args: any[]) => any {
  return typeof value === "function";
}
/* eslint-enable @typescript-eslint/no-explicit-any */
