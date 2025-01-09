import { always, both, head, ifElse, is } from 'ramda'
import { isPresent } from './isPresent'

/**
 * first item in a collection or an empty object  
 *
 * @param list 
 * @return the first list item or an empty object
 * 
 * @example 
 *   const users = [{ name: 'Jo' }]
 *   first(users)
 *   // { name: 'Jo' } 
 *
 *   first([])
 *   // {} 
 *
 *   first(undefined)
 *   // {} 
 * 
 *   const user = await getUser()
 *   // user || {}
 */
export const first = ifElse(
  both(is(Array), isPresent),
  head,
  always({})
)
