export {};

// 1. 判断字符串是否以某个字符开头
type StartWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

// type StartWithResult = StartWith<"sy", "s">; // true
type StartWithResult = StartWith<"sy", "y">; // true

// 2. 实现字符串替换
type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : never;

type ReplaceStrResult = ReplaceStr<"zhangsan", "san", "ba">; // 'zhangba'
