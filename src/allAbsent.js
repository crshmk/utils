import { all } from 'ramda'

import { isAbsent } from './isAbsent'

export const allAbsent = all(isAbsent)