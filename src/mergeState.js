/**
 * curry state setter to merge state object updates 
 *
 * @param {Function} setState the setter returned from setState 
 * @param {Object} the updates to merge into the state 
 * 
 * @example 
 *   const [user, setUser] = useState({ name: 'Jo', age: 42 })
 *   const mergeUser = mergeState(setUser) 
 *   mergeUser({ age: 43, points: 1 })
 *   // user is now { name: 'Jo', age: 43, points: 1 }
 */
import { mergeDeepLeft } from 'ramda'
import { updateState } from './updateState'

export const mergeState = updateState(mergeDeepLeft)
