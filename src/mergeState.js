import { mergeDeepLeft } from 'ramda'
import { updateState } from './updateState'

/**
 * curry state setter to merge state object updates 
 *
 * @param setState setter returned from useState 
 * @param updates to merge into the state 
 * 
 * @example 
 *   const [user, setUser] = useState({ name: 'Jo', age: 42 })
 *   const mergeUser = mergeState(setUser) 
 *   mergeUser({ age: 43, points: 1 })
 *   // user becomes { name: 'Jo', age: 43, points: 1 }
 */
export const mergeState = updateState(mergeDeepLeft)
