
/**
 * curry state setter to prepend to state arrays 
 *
 * @param {Function} setState the setter returned from setState 
 * @param {any} the prepended item 
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const prependInt = prependState(setInts) 
 *   prependInt(2)
 *   // ints is now [2, 1]
 */
import { prepend } from 'ramda'
import { updateState } from './updateState'

export const prependState = updateState(prepend)
