/**
  *  @param {Array} 
  *
  *  @return {Boolean} 
  *  
  *  allPresent([42], {one: 1}, 'x'])
  *  // true 
  *  allPresent([[], {one: 1}, 'x'])
  *  // false  
**/
import { all } from 'ramda'

import { isPresent } from './isPresent'

export const allPresent = all(isPresent)
