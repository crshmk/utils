/**
 * toggle a boolean state
 *
 * @param {Function} setState the setter returned from useState 
 * 
 * @example 
 *   const [isActive, setIsActive] = useState(false)
 *   const toggleIsActive = toggleState(isActive)
 *   toggleIsActive()
 *   // isActive state becomes true 
 */
import { updateState } from './updateState'

const toggle = prev => !prev

export const toggleState = setState => 
  updateState(toggle, setState) 
