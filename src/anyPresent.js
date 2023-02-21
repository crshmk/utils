import { any } from 'ramda'

import { isPresent } from './isPresent'

export const anyPresent = any(isPresent)