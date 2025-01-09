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

/**
  * list of route fragments, without the leading "/"
  *
  * @param window the window object 
  * @return list of route fragments
  *
  * @example 
  *   'https://www.mesaboogie.com/en-US/Amp/?model=triple-rectifier'
  *   getRouteFragments(window)
  *   // ['en-US', 'Amp']
*/ 
export const getRouteFragments = pipe(
  path(['location', 'pathname']),
  split('/'),
  tail,
  reject(isNotFragment)
)
