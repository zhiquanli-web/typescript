export {};

// 1. any 类型与任何类型的交叉都是 any，也就是 1 & any 结果是 any。
type test = 1 & any; // any

// 这里的 1， 2可以换成任意两个不同类型
type IsAny<T> = 1 extends 2 & T ? true : false;

// type IsAnyResult = IsAny<2>; // false
type IsAnyResult = IsAny<any>; // true

// 2. 判断是否相等
// 如果是两个条件类型 T1 extends U1 ? X1 : Y1 和 T2 extends U2 ? X2 : Y2 相关的话，那 T1 和 T2 相关、X1 和 X2 相关、Y1 和 Y2 相关，而 U1 和 U2 相等。
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type IsEqualResult = IsEqual<2, any>; // false

// 3. 判断是否是never类型
// never 在条件类型中也比较特殊，如果条件类型左边是类型参数，并且传入的是 never，那么直接返回 never
type TestNever<T> = T extends number ? 1 : 2;
type TestNeverResult = TestNever<never>; // never

type IsNever<T> = [T] extends [never] ? true : false;

// 4. 除此以外，any 在条件类型中也比较特殊，如果类型参数为 any，会直接返回 trueType 和 falseType 的合并：
type TestAny<T> = T extends number ? 1 : 2;
type TestAnyResult = TestAny<any>; // 1 | 2

// 5. 判断元组类型
// 元组类型的 length 是数字字面量，而数组的 length 是 number
type testTuple = [1, 2, 3]["length"]; // 3
// type testArr = string[]["length"]; // number
type testArr = number[]["length"]; // number

type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? false
  : true;
type IsTuple<T> = T extends [...params: infer Eles]
  ? NotEqual<Eles["length"], number>
  : false;

// 6.
/*
  类型之间是有父子关系的，更具体的那个是子类型，比如 A 和 B 的交叉类型 A & B 就是联合类型 A | B 的子类型，因为更具体。
  如果允许父类型赋值给子类型，就叫做逆变。
  如果允许子类型赋值给父类型，就叫做协变。

  在 TypeScript 中有函数参数是有逆变的性质的，也就是如果参数可能是多个类型，参数类型会变成它们的交叉类型。
*/
type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;
type UnionToIntersectionResult = UnionToIntersection<{ a: 1 } | { b: 2 }>;
/*
  {
    a: 1;
  } & {
      b: 2;
  }
*/
