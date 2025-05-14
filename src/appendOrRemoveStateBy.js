import { curry } from 'ramda'
import { appendOrRemoveBy } from './appendOrRemoveBy'
import { updateState } from './updateState'

/**
 * remove objects from a collection in state by matching key / value 
 * 
 * @param setState the setter returned from useState 
 * @param key to match target in collection
 * @param target item to match 
 * 
 * @example 
 *     const [colors, setColors] = useState([
 *       { id: 1, color: 'red' },
 *       { id: 2, color: 'green' },
 *       { id: 3, color: 'blue' },
 *       { id: 4, color: 'blue' }
 *     ])
 * 
 *     const toggleColor = appendOrRemoveStateBy(setColors, 'id')
 *     
 *     toggleColor({ id: 2, color: 'green' })
 *     // state is now [{ id: 1, color: 'red' }, { id: 3, color: 'blue' }, { id: 4, color: 'blue' }]
 */
export const appendOrRemoveStateBy = curry((setState, key, target) => 
  updateState(appendOrRemoveBy(key, target), setState)()
)
