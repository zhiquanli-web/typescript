export {};

// 1. 提取 Promise 值的类型
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
// type GetValueResult = GetValueType<'aaa'>; // never
type GetValueResult = GetValueType<Promise<"aaa">>; // "aaa"
