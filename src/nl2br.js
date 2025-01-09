/**
  * insert <br /> tags into a value intended for a text node 
  * note: needs keys in the <br /> tags
  *
  * @param string with line breaks 
  * @return text with <br /> tags for the breaks 
  *
  * @example 
  *   const description = `top line  
  *   second line 
  *   thirdline` 
  *
  *   nl2br(description)
  *   // ['top line', <br />, 'second line', <br />, 'third line'] 
*/
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
