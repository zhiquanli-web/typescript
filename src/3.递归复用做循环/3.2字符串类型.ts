export {};

// 1. 字符串替换
type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : Str;

type ReplaceAllResult = ReplaceAll<"abcdadseacsfdsdatrsaaaaa", "a", "s">; // "sbcdsdsescsfdsdstrssssss"

// 2. 把字符串字面量类型的每个字符都提取出来组成联合类型
type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never;

// 3. 字符串反转
type ReverseStr<
  Str extends string,
  Result extends string = ""
> = Str extends `${infer First}${infer Rest}`
  ? `${ReverseStr<Rest, `${First}${Result}`>}`
  : Result;

type ReverseStrResult = ReverseStr<"abcdefg">; // "gfedcba"
