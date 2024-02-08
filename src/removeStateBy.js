
/**
 * match state objects in a collection to remove them
 *
 * @param {Function} setState the setter returned from useState 
 * @param {Object} . the appended item or array of items
 * 
 * @example 
 *   const initialColors = [{id: 1, label: 'green'}, {id: 2, label: 'blue'}]
 *   const [colors, setColors] = useState(initialColors)
 *   const removeColor = removeState(setColors) 
 *   removeColor({ id: 1 })
 *   // colors state becomes [{id: 2, label: 'blue'}]
 */
import { curry } from 'ramda'
import { removeBy } from './removeBy'
import { updateState } from './updateState'

export const removeStateBy = curry((setState, k, toRemove) => 
  updateState(removeBy(k, toRemove), setState)()
)
