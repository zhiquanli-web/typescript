export {};

// 1. 提取函数参数类型
type GetFnParams<Fn extends Function> = Fn extends (
  ...args: infer Args
) => unknown
  ? Args
  : never;

type GetFnParamsResult = GetFnParams<(name: string, age: number) => string>;

// 2. 提取函数返回值类型
// TODO 这里不能用unknown[], 涉及到逆变后面再看
type GetFnReturn<Fn extends Function> = Fn extends (
  ...args: any[]
) => infer Value
  ? Value
  : never;
type GetFnReturnResult = GetFnReturn<() => string>;
