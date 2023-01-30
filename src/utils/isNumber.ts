// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isNumber(value: any): value is number {
  return typeof value === "number";
}
