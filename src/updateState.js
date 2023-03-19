/**
 * creates a state setter from a transform function and the setter from setState 
 *
 * @param fn Function variable arity function to transform the state; (...args, currentState) => newState
 * @param setState Function the setter returned from setState 
 * @param ...args variable arity args applied to the transform function, preceding the current state in its signature
 *
 * @example 
 * const appendState = updateState(append)
 * const adjustById = adjustBy('id')
 * 
 * const Component = () => {
 *   const [ints, setInts] = useState([1,2])
 *   const [chars, setChars] = useState(['a', 'b'])
 *   const [vals, setVals] = useState([{id: 1, val: 42}])
 *
 *   const addInt = appendState(setInts)
 *   const addChar = appendState(setChars)
 *   const updateVal = updateState(adjustById, setVals)
  ... 
 *  addInt(3)
 *  // ints state becomes [1, 2, 3]
 *  addChar('c')
 *  // chars state becomes ['a', 'b', 'c']
 *  updateVal({id:1, val: 43})
 *  // vals state becomes [{id: 1, val: 42}]
 */
import { apply, curry } from 'ramda'

export const updateState = curry((fn, setState) => (...args) =>
  setState(currentState => apply(fn, [...args, currentState]))
)

