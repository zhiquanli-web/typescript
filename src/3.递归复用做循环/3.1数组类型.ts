export {};

// 1. 反转元组类型
type arr = [1, 2, 3, 4, 5];

type ReverseArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest
]
  ? [...ReverseArr<Rest>, First]
  : Arr;

type ReverseArrResult = ReverseArr<arr>;

// 2. 查找元素
type IsEqual<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);

type Includes<Arr extends unknown[], FindItem> = Arr extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<First, FindItem> extends true
    ? true
    : Includes<Rest, FindItem>
  : false;

type IncludesResult = Includes<[1, 2, 3, 4], 4>;

// 3. 删除元素
type Remove<
  Arr extends unknown[],
  Item,
  Result extends unknown[] = []
> = Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, Item> extends true
    ? Remove<Rest, Item, Result>
    : Remove<Rest, Item, [...Result, First]>
  : Result;

type RemoveResult = Remove<[1, 2, 3], 2>; // [1,3]

// 4. 构造元组
type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr["length"] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;

type BuildArrayResult = BuildArray<5, string>; // [string, string, string, string, string]
