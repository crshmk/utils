/**
  * @param {any}
  *
  * @return {Boolean}
**/
import { complement, isEmpty } from 'ramda'

export const notEmpty = complement(isEmpty)
