// takes the window
// returns params as an object
import { 
  complement, 
  filter, 
  fromPairs, 
  isNil, 
  map, 
  path, 
  pipe, 
  split, 
  tail 
} from 'ramda'

const removeEmptyQuery = filter(complement(isNil))

export const getQueryParams = pipe(
  path(['location', 'search']),
  tail,
  split('&'),
  map(split('=')),
  fromPairs,
  removeEmptyQuery,
  map(decodeURI)
);

export default getQueryParams