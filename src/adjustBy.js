/**
 * replace a collection item by matching a prop from the update
 * 
 * @param {String} propName prop to match an object in a list
 * @param {Object}  altered list iteration function that passes (item, index, list) to its callback
 * @param {Array} list of objects
 * 
 * @return {Array} array of objects
 * 
 * const adjustById = adjustBy('id')
 * const state = [{ id: 1, val: 1 }, { id: 2, val: 2 }]
 * const update = { id: 2, val: 42 }
 * 
 * adjustById(update, state)
 * -> [{ id: 1, val: 1 }, { id: 2, val: 42 }]
 */

import { curry, map, mergeDeepLeft, when } from 'ramda'
import { propEq } from './propEq'
export const adjustBy = curry((propName, item, list) => 
  map( 
    when(propEq(propName, item[propName]), mergeDeepLeft(item)), 
    list
  )
)
