import { all } from 'ramda'
import { isPresent } from './isPresent'

/**
  * @example
  *  allPresent([42], {one: 1}, 'x'])
  *  // true 
  *  allPresent([[], {one: 1}, 'x'])
  *  // false  
**/
export const allPresent = all(isPresent)
