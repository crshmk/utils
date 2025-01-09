import { pipe, replace, toUpper } from 'ramda'

const rxUnderscoreAndCharToUpper = /([-_][a-z])/g

const transformUnderscoreAndUcChar = pipe(
  replace('_', ''),
  toUpper
)

/**
 * @param snake_cased_string 
 * @return camelCasedString
 */
export const snakeToCamel = replace(
  rxUnderscoreAndCharToUpper, 
  transformUnderscoreAndUcChar
)