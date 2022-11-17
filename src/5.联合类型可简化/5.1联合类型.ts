// 1.
type CamelcaseUnion<Item extends string> =
  Item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelcaseUnion<Rest>}`
    : Item;

type CamelcaseUnionResult = CamelcaseUnion<"aa_bb_cc" | "dd_ee_ff">; // "aaBbCc" | "ddEeFf"

// 2. 判断是否是联合类型（A extends A 主要是为了触发分布式条件类型）
type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;

// 3. 数组转联合类型
// type union = ["aa", "bb"][number]; // "aa" | "bb"
type union = [1, 2][number]; // 1 | 2
