/**
 * @param {String} .camelCasedString 
 * 
 * @return {String} snake_cased_string
 */
import { concat, toLower, pipe, replace } from 'ramda'

const rxCaps =  /(?:^|\.?)([A-Z])/g

const replaceCaps = pipe(
  concat('_'),
  toLower
)

const handleLeadingUnderscore = replace(/^_/, "")

export const camelToSnake = pipe(
  replace(rxCaps, replaceCaps),
  handleLeadingUnderscore
)
