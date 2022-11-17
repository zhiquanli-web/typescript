export {};

// 索引类型是聚合多个元素的类型，class、对象等都是索引类型

// 1. 映射类型
type Mapping<Obj extends object> = {
  [Key in keyof Obj]: Obj[Key];
};

// 2. 对值做修改
type Mapping1<Obj extends object> = {
  [Key in keyof Obj]: [Obj[Key], Obj[Key], Obj[Key]];
};

type res = Mapping1<{ a: 1; b: 2 }>; //{ a: [1, 1, 1]; b: [2, 2, 2]; }

// 3. 对Key做修改，使用as, 这叫做重映射
type UppercaseKey<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key];
};

type UppercaseKeyResult = UppercaseKey<{ abc: 2 }>; // { ABC: 2; }

// 4. TypeScript 提供了内置的高级类型 Record 来创建索引类型：
// type Record<K extends string | number | symbol, T> = { [P in K]: T };
type RecordResult = Record<"a", 1>; // { a: 1; }

// 5. 给索引类型添加readonly
type ToReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

type ToReadonlyResult = ToReadonly<{ a: 1 }>;

// 5.1 移除readonly
type ToMutable<T> = {
  -readonly [Key in keyof T]: T[Key];
};

// 6. 添加可选修饰符
type ToPartial<T> = {
  [Key in keyof T]?: T[Key];
};

type ToPartialResult = ToPartial<{ a: 2 }>;

// 6.1 移除可选修饰符
type ToRequired<T> = {
  [Key in keyof T]-?: T[Key];
};

// 7. 根据值过滤
type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [Key in keyof Obj as Obj[Key] extends ValueType ? Key : never]: Obj[Key];
};

type FilterByValueTypeResult = FilterByValueType<{ a: 123; b: "str" }, "str">;
