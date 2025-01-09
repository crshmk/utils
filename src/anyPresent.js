import { any } from 'ramda'
import { isPresent } from './isPresent'

/**
  *  anyPresent([], {}, ''])
  *  // false 
  *  anyPresent([[], {one: 1}, ''])
  *  // true   
**/
export const anyPresent = any(isPresent)
