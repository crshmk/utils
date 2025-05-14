import {
  any,
  append,
  curry,
  reject,
  ifElse
} from 'ramda'

import { propEq } from './propEq'

/**
 * @param target item to append or match for removal 
 * @return collection with item appended or all matching items removed
 * 
 * @example 
 *   const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }, { id: 3, color: 'blue' }]
 *   appendOrRemoveBy('color', { color: 'blue' }, list)
 *   // list becomes [{ id: 2, color: 'green' }]
 *   const appendOrRemoveById = appendOrRemoveBy('id')
 *   appendOrRemoveById({ id: 4, color: 'red' }, list)
 *   // list becomes [{ id: 2, color: 'green' }, { id: 4, color: 'red' }]
 */
export const appendOrRemoveBy = curry((key, target, list) => 
  ifElse(
    any(propEq(key, target[key])),
    reject(propEq(key, target[key])),
    append(target)
  )(list))

