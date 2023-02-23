/**
 * get all values of a prop in a collection, without duplicates
 * 
 * @param {String} key targeted prop
 * @param {Array.<Object>} items collection 
 * @return {Array} unique list of values for this prop in the collection
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
import { curry, map, pipe, prop, reject, uniq } from 'ramda'
import { isAbsent } from './isAbsent'

export const getUniqValues = curry((key, items) => 
  pipe(
    map(prop(key)),
    uniq,
    reject(isAbsent)
  )(items)
)
