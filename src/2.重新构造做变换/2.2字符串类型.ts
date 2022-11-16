export {};

// 1. 把字符串字面量类型转换成首字母大写
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : Str;

type CapitalizeStrResult = CapitalizeStr<"zhangsan">; // "Zhangsan"
