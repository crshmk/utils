// takes the window
// returns params as an object
import { 
  fromPairs, 
  isNil, 
  map, 
  path, 
  pipe, 
  reject,
  split, 
  tail 
} from 'ramda'

const removeEmptyQuery = reject(isNil)

export const getQueryParams = pipe(
  path(['location', 'search']),
  tail,
  split('&'),
  map(split('=')),
  fromPairs,
  removeEmptyQuery,
  map(decodeURI)
)

export default getQueryParams
