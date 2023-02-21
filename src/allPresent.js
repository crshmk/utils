import { all } from 'ramda'

import { isPresent } from './isPresent'

export const allPresent = all(isPresent)