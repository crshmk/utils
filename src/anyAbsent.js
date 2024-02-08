/**
  *  @param {Array} 
  *
  *  @return {Boolean} 
  *  
  *  anyAbsent([42], {one: 1}, 'x'])
  *  // false
  *  anyAbsent([[], {one: 1}, 'x'])
  *  // true  
**/
import { any } from 'ramda'

import { isAbsent } from './isAbsent'

export const anyAbsent = any(isAbsent)
