// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}
