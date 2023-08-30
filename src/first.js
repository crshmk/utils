/**
 * return the first item in a collection, or an empty object  
 *
 * @param {Array} 
 * @return {any} the first item or an empty object
 * 
 * @example 
 *   const users = [{ name: 'Jo' }]
 *   first(users)
 *   // -> { name: 'Jo' }] 
 *
 *   first([])
 *   // -> {} 
 *
 *   first(undefined)
 *   // -> {} 
 */
import { always, both, head, ifElse, is } from 'ramda'
import { isPresent } from './isPresent'

export const first = ifElse(
  both(is(Array), isPresent),
  head,
  always({})
)
