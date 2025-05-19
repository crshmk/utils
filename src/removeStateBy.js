import { curry } from 'ramda'
import { removeBy } from './removeBy'
import { updateState } from './updateState'

/**
 * remove objects from a collection in state by matching a key / value 
 * 
 * @param setState the setter returned from useState 
 * @param key to match target in collection
 * @param toRemove primitive | Object -> the primitive (e.g. `1`) or object (e.g. `{one: 1}`) to match 
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
 *     const removeByColor('blue', state)
 *     // state becomes [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
 */
export const removeStateBy = curry((setState, key, toRemove) => 
  updateState(removeBy(key, toRemove), setState)()
)
