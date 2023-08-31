/**
 * curry state setter to prepend item or array of items to state arrays 
 *
 * @param {Function} setState the setter returned from setState 
 * @param {any} items the prepended item 
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const prependInts = prependState(setInts) 
 *   prependInts(2)
 *   // ints is now [2, 1]
 * 
 *   prependInts([3, 4])
 *   // ints is now [3, 4, 2, 1]
 */
import { concat, ifElse, is, prepend } from 'ramda'
import { updateState } from './updateState'

export const prependState = setState =>
  ifElse(
    is(Array),
    updateState(concat, setState),
    updateState(prepend, setState)
  )