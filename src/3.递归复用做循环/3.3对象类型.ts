export {};

// 1. 索引映射,添加readonly

// 这种写法没有触发计算(因为 ts 的类型只有被用到的时候才会做计算)
// type DeepReadonly<Obj extends Record<string, any>> = {
//   readonly [Key in keyof Obj]: Obj[Key] extends object
//     ? Obj[Key] extends Function
//       ? Obj[Key]
//       : DeepReadonly<Obj[Key]>
//     : Obj[Key];
// };

type DeepReadonly<Obj extends Record<string, any>> = Obj extends any
  ? {
      readonly [Key in keyof Obj]: Obj[Key] extends object
        ? Obj[Key] extends Function
          ? Obj[Key]
          : DeepReadonly<Obj[Key]>
        : Obj[Key];
    }
  : never;
