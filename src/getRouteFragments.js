/**
  * returns an array of strings representing the route fragments, without the leading "/"
  *
  * @param window the window object 
  * @return Array<String>
  *
  * @example 
  *   'https://www.mesaboogie.com/en-US/Amp/?model=triple-rectifier'
  *   getRouteFragments(window)
  *   // ['en-US', 'Amp']
*/ 
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
