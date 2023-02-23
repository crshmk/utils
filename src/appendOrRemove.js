/**
 *  * @param {any} target value to be matched by Ramda's equals -> https://ramdajs.com/docs/#equals 
 * @param {Array} list 
 * @return {Array} list with target appended or removed
 * 
 * @example 
 * 
 *     const state = ['one', 'two', 'three]
 *     appendOrRemove('four', state) //=> state.concat('four')
 *     appendOrRemove('two', state) //=> ['one', 'three']
 */
import {
  append,
  ifElse,
  includes,
  without,
} from 'ramda'

export const appendOrRemove = (value, list) => ifElse(
  includes(value),
  without([value]),
  append(value)
)(list)
