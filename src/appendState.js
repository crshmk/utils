
/**
 * curry state setter to append to state arrays 
 *
 * @param {Function} setState the setter returned from setState 
 * @param {any} the appended item 
 * 
 * @example 
 *   const [users, setUsers] = useState([])
 *   const addUser = appendState(setUsers) 
 *   const newUser = { name: 'Jo' }
 *   addUser(newUser)
 *   // users is now [{ name: 'Jo' }]
 */
import { append } from 'ramda'
import { updateState } from './updateState'

export const appendState = updateState(append) 
