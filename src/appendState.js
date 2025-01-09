import { append, concat, flip, ifElse, is } from 'ramda'
import { updateState } from './updateState'

/**
 * curry state setter for a list to append item or array of items to state arrays 
 *
 * @param setState the setter returned from useState 
 * @param items the appended item or array of items
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const concatInts = appendState(setInts) 
 *   concatInts(2)
 *   // ints state becomes [1, 2]
 *
 *   concatInts([3, 4])
 *   // ints state becomes [1, 2, 3, 4]
 */
export const appendState = setState =>
  ifElse(
    is(Array),
    updateState(flip(concat), setState),
    updateState(append, setState)
  )
