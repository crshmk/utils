/**
  * @param {any}
  *
  * @return {Boolean}
**/
import { anyPass, isEmpty, isNil } from 'ramda'

export const isAbsent = anyPass([isEmpty, isNil])
