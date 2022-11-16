export {};

// Typescript 类型的模式匹配是通过 extends 对类型参数做匹配
// 结果保存到通过 infer 声明的局部类型变量里
// 如果匹配就能从该局部变量里拿到提取出的类型。

// 1. 提取 Promise 值的类型
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
// type GetValueResult = GetValueType<'aaa'>; // never
type GetValueResult = GetValueType<Promise<"aaa">>; // "aaa"
