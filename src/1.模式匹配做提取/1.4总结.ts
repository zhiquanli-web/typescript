export {};

// TypeScript 类型系统支持 3 种可以声明任意类型的变量： type、infer、类型参数。

// 1. type 叫做类型别名，其实就是声明一个变量存储某个类型
type ttt = Promise<number>;

// 2. infer 用于类型的提取，然后存到一个变量里，相当于局部变量：
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;

// 3. 类型参数用于接受具体的类型，在类型运算中也相当于局部变量：
type isTwo<T> = T extends 2 ? true : false;
