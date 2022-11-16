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
