import { always, both, head, ifElse, is } from 'ramda'
import { isPresent } from './isPresent'

export const first = ifElse(
  both(is(Array), isPresent),
  head,
  always({})
)
