import { fromPairs, is, map, pipe, toPairs } from 'ramda'

const isObject = is(Object)

const recur = v => isObject(v) && !Array.isArray(v)

const transformKey = transform => 
  ([k, v]) => recur(v) ? 
    [transform(k), mapKeys(transform)(v)] :
    [transform(k), v]
     
/**
 * apply a transform function to each key in an object, recursively
 * 
 * @param transform transform function
 * @param object to be transformed
 * @return transformed object
 * 
 * @example 
 * const toUpper = x => x.toUpperCase()
 * const gear = {
 *   cables: {
 *     toAmp: 'Boss',
 *     patch: 'George L'
 *   }
 * }
 * 
 * const toUpperKeys = mapKeys(toUpper)
 * 
 * toUpperKeys(gear)
 * // {
 * //    CABLES: {
 * //      TOAMP: 'Boss',
 * //      PATCH: 'George L'
 * //    }
 * // }
 */
export const mapKeys = transform => 
  pipe(
    toPairs,
    map(transformKey(transform)),
    fromPairs
  )
