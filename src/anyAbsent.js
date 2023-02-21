import { any } from 'ramda'

import { isAbsent } from './isAbsent'

export const anyAbsent = any(isAbsent)