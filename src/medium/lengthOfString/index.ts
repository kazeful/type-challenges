/* _____________ Your Code Here _____________ */

type StringToArray<S extends string> = S extends `${infer T}${infer R}`
  ? [T, ...StringToArray<R>]
  : []
type LengthOfString<S extends string> = StringToArray<S>['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]
