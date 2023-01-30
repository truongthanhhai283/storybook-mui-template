// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isEmptyArray(value: any): value is any[] {
  return Array.isArray(value) && value.length === 0;
}
