import { curry, map, mergeDeepLeft, when } from 'ramda'
import { propEq } from './propEq'

/**
 * partially update a collection item by matching a prop from the update
 * 
 * @param propToMatch prop by which an object will be identified; usually an id
 * @param updates modifications to the matched object. includes the propToMatch
 * @param list the collection in which a single object will be matched and updated
 * 
 * @example 
 *  const adjustById = adjustBy('id')
 *  const state = [{ id: 1, val: 1 }, { id: 2, val: 2 }]
 *  const update = { id: 2, val: 42 }
 * 
 * adjustById(update, state)
 * -> [{ id: 1, val: 1 }, { id: 2, val: 42 }]
 */
export const adjustBy = curry((propToMatch, updates, list) => 
  map( 
    when(propEq(propToMatch, updates[propToMatch]), mergeDeepLeft(updates)), 
    list
  )
)
