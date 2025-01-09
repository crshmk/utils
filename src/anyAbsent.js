import { any } from 'ramda'
import { isAbsent } from './isAbsent'

/**
  * @example
  *  anyAbsent([42], {one: 1}, 'x'])
  *  // false
  *  anyAbsent([[], {one: 1}, 'x'])
  *  // true  
**/
export const anyAbsent = any(isAbsent)
