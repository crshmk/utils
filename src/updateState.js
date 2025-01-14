import { apply, curry } from 'ramda'

/**
 * creates a state setter from 
 * - a transform function 
 * - the setter from useState 
 *
 * @param fn Function variable arity function to transform the state; (...args, currentState) => newState
 * @param setState Function the setter returned from useState 
 * @param ...args variable arity args applied to the transform function, preceding the current state in its signature
 *
 * @example 
 * const appendState = updateState(append)
 * const adjustById = adjustBy('id')
 * 
 * const Component = () => {
 *   const [ints, setInts] = useState([1,2])
 *   const [chars, setChars] = useState(['a', 'b'])
 *   const [vals, setVals] = useState([{id: 1, val: 1}, {id: 2, val: 2}])
 *
 *   const addInt = appendState(setInts)
 *   const addChar = appendState(setChars)
 *   const updateVal = updateState(adjustById, setVals)
  ... 
 *  addInt(3)
 *  // ints state becomes [1, 2, 3]
 *  addChar('c')
 *  // chars state becomes ['a', 'b', 'c']
 *  updateVal({id:1, val: 999})
 *  // vals state becomes [{id: 1, val: 999}, {id: 2, val: 2}]
 */
export const updateState = curry(curry((fn, setState) => (...args) =>
  setState(currentState => apply(fn, [...args, currentState]))
))

