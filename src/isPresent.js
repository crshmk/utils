import { complement } from 'ramda'
import { isAbsent } from './isAbsent'

export const isPresent = complement(isAbsent)
