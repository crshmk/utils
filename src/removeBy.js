/**
 * @param k String 
 * @param item String | Object 
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
 *     const newState = removeByColor('blue')
 *     -> [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
 */
import { curry, propEq, propOr, reject } from 'ramda'

export const removeBy = curry((k, toRemove, items) => {
  const match = propOr(toRemove, k, toRemove)
  return reject(propEq(k, match), items)
})
