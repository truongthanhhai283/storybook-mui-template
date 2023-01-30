/* eslint-disable @typescript-eslint/no-explicit-any */
export type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type AnyFunction<T = any> = (...args: T[]) => any;
/* eslint-enable @typescript-eslint/no-explicit-any */
