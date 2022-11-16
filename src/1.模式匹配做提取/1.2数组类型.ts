export {};

// 1. 提取数组第一个元素的类型
type GetFirstType<Arr extends unknown[]> = Arr extends [
  infer First,
  ...unknown[]
]
  ? First
  : never;
type GetFirstValue = GetFirstType<["dfasf", 2, 3, 4, 5]>; // "dfasf"

// 2. 提取最后一个元素的类型
type GetLastType<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never;
// type GetLastResult = GetLastType<[]>; // never
type GetLastResult = GetLastType<[1, 2, 3]>; // 3
