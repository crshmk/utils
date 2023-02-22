/**
 * apply a transform function to each key in an object, recursively
 * 
 * @param {Function} transform transform function
 * @param {Object} .object to be transformed
 */
import { fromPairs, is, map, pipe, toPairs } from 'ramda'

const isObject = is(Object)

const transformKey = transform => 
  ([k, v]) => !isObject(v) ? [transform(k), v] :
    [transform(k), mapKeys(transform)(v)] 

export const mapKeys = transform => 
  pipe(
    toPairs,
    map(transformKey(transform)),
    fromPairs
  )
