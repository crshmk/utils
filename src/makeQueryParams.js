/**
 * make query string, prepended by '?', from object
 * 
 * @param {Object} .params to be transformed
 * @return {String} query params preceded by '?' or empty string
 */
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

export const makeQueryParams = pipe(
  mapObjIndexed(encodeURIComponent),
  toPairs,
  map(join('=')),
  join('&'),
  prependQuestionMark
)