/**
 * @param k String 
 * @param toRemove primitive | Object -> the key/value to match, e.g. { id: 1 }, or the value to match, e.g. 1 
 * @param items Array<Object>
 * @return Array<Object>
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
 *     const itemToRemove = { id: 2, color: 'green' }
 *     const newState = removeById(itemToRemove, state)
 *     -> [{ id: 1, color: 'red' }, { id: 3, color: 'blue' }, { id: 4, color: 'blue' }]
 * 
 * 
 *     const removeByColor = removeBy('color')
 *     const newState = removeByColor('blue', state)
 *     -> [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
 */
import { curry, propOr, reject } from 'ramda'
import { propEq } from './propEq'

export const removeBy = curry((k, toRemove, items) => {
  const match = propOr(toRemove, k, toRemove)
  return reject(propEq(k, match), items)
})
