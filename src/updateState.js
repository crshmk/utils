import { apply, curry } from 'ramda'

/**
 * creates a side effect to update state by currying a transform function and a state setter
 * the transform function is of any arity, and will be handed the state as the last arg 
 *
 * @param fn variable arity function to transform the state; (...args, currentState) => newState
 * @param setState setter returned from useState 
 * @param ...args variable arity args applied to the transform function
 *
 * @example 
 *  * const useGuitar = () => {
 *   const [guitar, setGuitar] = useState({})
 *   const updateGuitar = updateState(mergeDeepLeft, setGuitar)
 *   return { guitar, updateGuitar }
 * }
 * 
 * const { updateGuitar } = useGuitar()
 * updateGuitar({ id: 1, status: 'new' })
 * updateGuitar({ status: 'used', make: 'Gibson' })
 * // guitar state becomes 
 * // { id: 1, status: 'used', make: 'Gibson' }
 */
export const updateState = curry(curry((fn, setState) => (...args) =>
  setState(currentState => apply(fn, [...args, currentState]))
))

