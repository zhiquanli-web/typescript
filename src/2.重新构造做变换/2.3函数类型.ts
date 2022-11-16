export {};

// 1. 在已有的函数类型上添加一个参数：

type AppendArgument<Fn extends Function, Arg> = Fn extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never;

type AppendArgumentResult = AppendArgument<(name: string) => boolean, number>; // (args_0: string, args_1: number) => boolean
