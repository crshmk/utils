import { complement, isEmpty } from 'ramda'

export const notEmpty = complement(isEmpty)
