export {};

// 1.给元组添加新类型
type tuple = [1, 2, 3];

type Push<Arr extends unknown[], Ele> = [...Arr, Ele];

type PushResult = Push<tuple, 4>; // [1,2,3,4]

// 任意个数元组的合并
type Zip<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer OneRest
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip<OneRest, OtherRest>]
    : []
  : [];

type ZipResult = Zip<[1, 2, 3, 4], ["a", "b", "c", "d"]>; // [[1, "a"], [2, "b"], [3, "c"], [4, "d"]]
