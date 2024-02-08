/**
  * @param {window} the window 
  *
  * @return {Object}
  *
  * @example
  *   https://nikhuber-guitars.com/dealers?type=orca%2059&country=thailand"
  *   getQueryParams(window)
  *   // { type: 'orca 59', country: 'thailand'}
**/
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
