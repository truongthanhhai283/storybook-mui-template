// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isUndefined(value: any): value is undefined {
  return value === undefined;
}
