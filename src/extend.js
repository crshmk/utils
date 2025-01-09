import { curry, lensProp, pipe, set } from 'ramda'

/**
 * add a prop to an object by appyling a function to that object 
 * 
 * @param fn function to apply to the object to derive the value of the new prop
 * @param key name of the new prop
 * @param obj object to be extended
 * @return extended object 
 * 
 * @example 
 *   const sumValues = pipe(values, sum)
 *   const extendSum = extend(sumValues, 'sum') 
 *   extendSum({ one: 1, two: 2 })
 *   -> { one: 1, two: 2, sum: 3 }
 */
export const extend = curry((fn, key, obj) => 
  set(lensProp(key), fn(obj), obj)
) 
