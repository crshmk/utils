import { curry, map, pipe, prop, reject, uniq } from 'ramda'
import { isAbsent } from './isAbsent'

/**
 * get unique values of a prop in a collection
 * 
 * @param key targeted prop
 * @param items collection of objects
 * @return list of unique values for this prop in the collection
 * 
 * @example 
 *     const items = [
 *       { id: 1, country: 'Japan' },
 *       { id: 1, country: 'Japan' },
 *       { id: 1, country: 'Vietnam' },
 *     ]
 *     getUniqValues('country', items)
 *     //=> ['Japan', 'Vietnam']
 */
export const getUniqValues = curry((key, items) => 
  pipe(
    map(prop(key)),
    uniq,
    reject(isAbsent)
  )(items)
)
