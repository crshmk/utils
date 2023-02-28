/**
 * @param {String} .snake_cased_string 
 * 
 * @return {String} camelCasedString
 */
import { pipe, replace, toUpper } from 'ramda'

const rxUnderscoreAndCharToUpper = /([-_][a-z])/g

const transformUnderscoreAndUcChar = pipe(
  replace('_', ''),
  toUpper
)
  
export const snakeToCamel = replace(
  rxUnderscoreAndCharToUpper, 
  transformUnderscoreAndUcChar
)