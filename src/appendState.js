
/**
 * curry state setter to append item or array of items to state arrays 
 *
 * @param {Function} setState the setter returned from setState 
 * @param {any} items the appended item or array of items
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const addInts = appendState(setInts) 
 *   addInts(2)
 *   // ints state becomes [1, 2]
 *
 *   addInts([3, 4])
 *   // ints state becomes [1, 2, 3, 4]
 */
import { append, concat, flip, ifElse, is } from 'ramda'
import { updateState } from './updateState'

export const appendState = setState =>
  ifElse(
    is(Array),
    updateState(flip(concat), setState),
    updateState(append, setState)
  )
