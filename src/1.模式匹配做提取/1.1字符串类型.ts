export {};

// 1. 判断字符串是否以某个字符开头
type StartWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

// type StartWithResult = StartWith<"sy", "s">; // true
type StartWithResult = StartWith<"sy", "y">; // true
