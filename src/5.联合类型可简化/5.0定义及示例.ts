// 当类型参数为联合类型，并且在条件类型左边直接引用该类型参数的时候，TypeScript 会把每一个元素单独传入来做类型运算，最后再合并成联合类型，这种语法叫做分布式条件类型。

/*  
  type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

  当 A 是联合类型时：
  A extends A 这种写法是为了触发分布式条件类型，让每个类型单独传入处理的，没别的意义。
  A extends A 和 [A] extends [A] 是不同的处理，前者是单个类型和整个类型做判断，后者两边都是整个联合类型，因为只有 extends 左边直接是类型参数才会触发分布式条件类型。
*/

// 示例
type Union = "a" | "b" | "c";

type UppercaseA<Item extends string> = Item extends "a"
  ? Uppercase<Item>
  : Item;

type UppercaseAResult = UppercaseA<Union>; // "b" | "c" | "A"

type Str = `${Union}-`; // "a-" | "b-" | "c-"

// 1. 因为条件类型中如果左边的类型是联合类型，会把每个元素单独传入做计算，而右边不会。
// 所以 A 是 'a' 的时候，B 是 'a' | 'b' | 'c'， A 是 'b' 的时候，B 是 'a' | 'b' | 'c'。。。
type TestUnion<A, B = A> = A extends A ? { a: A; b: B } : never;
type TestUnionResult = TestUnion<"a" | "b" | "c">;
/*
  {
      a: "a";
      b: "a" | "b" | "c";
  } | {
      a: "b";
      b: "a" | "b" | "c";
  } | {
      a: "c";
      b: "a" | "b" | "c";
  }
*/
