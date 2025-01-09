import { anyPass, isEmpty, isNil } from 'ramda'

/**
 * @example 
 *  isAbsent({})
 *  isAbsent([])
 *  isAbsent('')
 *  isAbsent(null)
 *  isAbsent(undefined)
 *  // true
 * 
 *  isAbsent({ one: 1 })
 *  isAbsent(['a'])
 *  isAbsent('a')
 *  isAbsent(false) // <-- emptiness; not truthiness (not intended for bools)
 *  // false
**/
export const isAbsent = anyPass([isEmpty, isNil])
