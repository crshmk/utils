/**
 * plucks potentially nested props from an object and flattens the result 
 * naively handles collisions by joining nested paths 
 * sets unfound props to null
 * 
 * @param {Array<Array>} paths paths to target props
 * @param {Object} obj the object containing target props
 * @return {Object} the concise object with flattened props
 * 
 * @example 
 * 
 *    const axiosErrorPaths = [
 *      ['message'],
 *      ['response', 'status'],
 *      ['isAxiosError'],
 *      ['config', 'data']
 *    ]
 * 
 *    const makeAxiosError = flatPick(axiosErrorPaths)
 * 
 *    axios.interceptors.response.use(prop('data'), function(err) {
 *      const response = makeAxiosError(err)
 *       return Promise.reject(response)
 *      })
 */
import { 
  __, 
  curry, 
  hasIn, 
  ifElse, 
  join, 
  last, 
  mergeDeepRight,
  objOf,
  pathOr, 
  pipe 
} from 'ramda'

// [['one'], ['one', 'two']] => 
//=>'one'
//=> 'one_two'
const makeKey = (acc, path) => ifElse(
  pipe(last, hasIn(__, acc)),
  join('_'),
  last
)(path)

export const flatPick = curry((paths, obj) => 
  paths.reduce((acc, path) => {
    const key = makeKey(acc, path)
    const val = pathOr(null, path, obj)
    return mergeDeepRight(acc, objOf(key, val))
  }, {})
)