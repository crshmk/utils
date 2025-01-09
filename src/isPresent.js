import { complement } from 'ramda'
import { isAbsent } from './isAbsent'

/**
 * @example 
 * isPresent({ one: 1 })
 * isPresent(['a'])
 * isPresent('a')
 * isPresent(false) // <-- emptiness; not truthiness (not intended for bools)
 * // true
 * 
 * isPresent({})
 * isPresent([])
 * isPresent('')
 * isPresent(null)
 * isPresent(undefined)
 * // false
**/
export const isPresent = complement(isAbsent)
