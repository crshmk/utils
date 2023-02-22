// returns an array of strings representing the route fragments, without the leading "/"
import { 
  either, 
  isEmpty, 
  path, 
  pipe, 
  reject, 
  split, 
  startsWith, 
  tail 
} from 'ramda'

const isNotFragment = either(startsWith('?'), isEmpty)

export const getRouteFragments = pipe(
  path(['location', 'pathname']),
  split('/'),
  tail,
  reject(isNotFragment)
)
