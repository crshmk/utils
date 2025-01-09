import { 
  concat,
  map,
  mapObjIndexed,
  join,
  pipe,
  toPairs,
  when
 } from 'ramda'
 import { notEmpty } from './notEmpty'

 const prependQuestionMark = when(notEmpty, concat('?'))

/**
 * make query string from object, prepended by '?'
 * 
 * @param params  object to be transformed
 * @return query string preceded by '?' or empty string
 * 
 * @example 
 * const members = {
 *   guitar: 'Leo Nocentelli',
 *   keyboard: 'Art Neville'
 * }
 * 
 * makeQueryParams(members)
 * // ?guitar=Leo%20Nocentelli&keyboard=Art%20Neville
 */
export const makeQueryParams = pipe(
  mapObjIndexed(encodeURIComponent),
  toPairs,
  map(join('=')),
  join('&'),
  prependQuestionMark
)