/**
 * both `includes` and `without` match by `equals`
 */
import {
  append,
  ifElse,
  includes,
  without,
} from 'ramda'

/**
 * @param target value in list to be matched by Ramda's equals -> https://ramdajs.com/docs/#equals 
 * @param list 
 * @return list with target appended or removed
 * 
 * @example 
 *  const state = ['one', 'two', 'three']
 *  appendOrRemove('four', state) //=> ['one', 'two', 'three', 'four']
 *  appendOrRemove('two', state) //=> ['one', 'three', 'four']
 */
export const appendOrRemove = (target, list) => ifElse(
  includes(target),
  without([target]),
  append(target)
)(list)
