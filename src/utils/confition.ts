
// checkType extends extendsType ? trueType : falseType
type Test1<T> = T extends number ? 1 : 2
type result1 = Test1<1 | 'a'> // 1 | 2

type Test2<T> = T extends true ? 1 : 2
type result2 = Test2<boolean> // 1 | 2

type Test3<T> = T extends true ? 1 : 2
type result3 = Test3<any> // 1 | 2

type Test4<T> = T extends true ? 1 : 2
type result4 = Test4<never> // never

type Test5<T> = [T] extends [number] ? 1 : 2
type result5 = Test5<1 | 'a'> // 2

type result6 = 1 | 'a' extends number ? 1 : 2 // 2

type result7 = boolean extends true ? 1 : 2 // 2

type result8 = never extends true ? 1 : 2 // 1

type result9 = any extends true ? 1 : 2 // 1 | 2

export {}
