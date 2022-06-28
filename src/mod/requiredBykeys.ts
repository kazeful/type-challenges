/* _____________ Your Code Here _____________ */
type requiredByKeys<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & Omit<T, K>

/* _____________ Test Cases _____________ */
import type { Equal, Expect, Alike } from '@type-challenges/utils'

// TODO Equal Alike
type Simplify<T> = Pick<T, keyof T>

type cases = [
  Expect<Equal<Simplify<requiredByKeys<User2, 'id'>>, User1>>,
  Expect<Alike<requiredByKeys<User2, 'id'>, User1>>
]

interface User1 {
  id: number
  name: string
}

interface User2 {
  id?: number
  name: string
}
