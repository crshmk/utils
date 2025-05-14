import {
  any,
  append,
  curry,
  reject,
  ifElse,
  whereEq,
} from 'ramda'

/**
 * @param target item to append or match for removal 
 * @return collection with item appended or all matching items removed
 * 
 * @example 
 *   const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }, { id: 3, color: 'blue' }]
 *   appendOrRemoveBy({ color: 'blue' }, list)
 *   // list becomes [{ id: 2, color: 'green' }]
 *   appendOrRemoveBy({ id: 4, color: 'red' }, list)
 *   // list becomes [{ id: 2, color: 'green' }, { id: 4, color: 'red' }]
 */
export const appendOrRemoveBy = curry((target, list) => 
  ifElse(
    any(whereEq(target)),
    reject(whereEq(target)),
    append(target)
  )(list))

