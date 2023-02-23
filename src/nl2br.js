import React from 'react'

import { filter, intersperse, map, pipe, split, trim } from 'ramda'
import { isPresent } from './isPresent'

const handleMultipleNewlines = x => isPresent(x) ? x : <br />

const removeEmptyFragments = filter(isPresent)

export const nl2br = pipe(
  split('\n'),
  map(trim),
  handleMultipleNewlines,
  intersperse(<br />),
  removeEmptyFragments
)