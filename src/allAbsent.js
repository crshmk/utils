import { all } from 'ramda'
import { isAbsent } from './isAbsent'

/**
 * @example 
 *  allAbsent([[], {}, ''])
 *  // true 
 *  allAbsent([[], {one: 1}, ''])
 *  // false
**/
export const allAbsent = all(isAbsent)
