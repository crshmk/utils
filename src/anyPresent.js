/**
  *  @param {Array} 
  *
  *  @return {Boolean} 
  *  
  *  anyPresent([], {}, ''])
  *  // false 
  *  anyPresent([[], {one: 1}, ''])
  *  // true   
**/
import { any } from 'ramda'

import { isPresent } from './isPresent'

export const anyPresent = any(isPresent)
