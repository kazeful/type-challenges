import type { ConstructTuple } from '../medium/constructTuple'

export type Add<A extends number, B extends number> = [
  ...ConstructTuple<A>,
  ...ConstructTuple<B>
]['length']

export type Sub<A extends number, B extends number> = ConstructTuple<A> extends [
  ...ConstructTuple<B>,
  ...infer Tail
]
  ? Tail['length']
  : -1

export type Tail<T extends unknown[]> = T extends [infer _, ...infer Tail] ? Tail : T

export type Head<T extends unknown[]> = T extends [...infer Head, infer _] ? Head : T


type IsMultipleOf4<N extends number> =
  N extends 0 ? true :
  N extends 1 | 2 | 3 ? false :
  IsMultipleOf4<Sub<N, 4>>;

// 使用示例
const number: IsMultipleOf4<0> = true; // 合法
const number1: IsMultipleOf4<8> = true; // 合法
const number2: IsMultipleOf4<10> = false; // 不合法，因为10不是4的倍数
