/**
  *  @param {Array} 
  *
  *  @return {Boolean} 
  *  
  *  allAbsent([[], {}, ''])
  *  // true 
  *  allAbsent([[], {one: 1}, ''])
  *  // false
**/
import { all } from 'ramda'

import { isAbsent } from './isAbsent'

export const allAbsent = all(isAbsent)
