import { curry, propOr, reject } from 'ramda'
import { propEq } from './propEq'

/**
 * remove objects from a collection by matching a key / value 
 * 
 * @param key to match target in collection, e.g. `'id'`
 * @param toRemove target for removal, e.g. `{ id: 1 }` or target value for removal (e.g. `1`); both of these match an object with { id: 1 }
 * @param items collection
 * @return collection with matched item removed
 * 
 * @example 
 *     const state = [
 *       { id: 1, color: 'red' },
 *       { id: 2, color: 'green' },
 *       { id: 3, color: 'blue' },
 *       { id: 4, color: 'blue' }
 *     ]
 *    
 *     const removeById = removeBy('id')
 * 
 *     const itemToRemove = { id: 2 }
 *     const newState = removeById(itemToRemove, state)
 *     // [{ id: 1, color: 'red' }, { id: 3, color: 'blue' }, { id: 4, color: 'blue' }]
 * 
 *     const removeByColor = removeBy('color')
 *     const newState = removeByColor('blue', state)
 *     // [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
 */
export const removeBy = curry((k, toRemove, items) => {
  const match = propOr(toRemove, k, toRemove)
  return reject(propEq(k, match), items)
})
