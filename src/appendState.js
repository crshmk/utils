
/**
 * curry state setter to append to state arrays 
 *
 * @param {Function} setState the setter returned from setState 
 * @param {any} the appended item 
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const addInt = appendState(setInts) 
 *   addInt(2)
 *   // ints is now [1, 2]
 */
import { append } from 'ramda'
import { updateState } from './updateState'

export const appendState = updateState(append) 
