/**
 * add a prop to an object by appyling a function to that object 
 * 
 * @param {Function} fn the function to apply to the object to derive the value of the new prop
 * @param {String} key the name of the new prop
 * @return {Object} o the object to be extended
 * 
 * @example 
 *   const sumValues = pipe(values, sum)
 *   const extendSum = extend(sumValues, 'sum') 
 *   extendSum('sum', { one: 1, two: 2 })
 *   -> { one: 1, two: 2, sum: 3 }
 */
import { curry, lensProp, pipe, set } from 'ramda'

export const extend = curry((fn, key, o) => 
  set(lensProp(key), fn(o), o)
) 
