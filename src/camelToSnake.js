import { concat, toLower, pipe, replace } from 'ramda'

const rxCaps =  /(?:^|\.?)([A-Z])/g

const replaceCaps = pipe(
  concat('_'),
  toLower
)

const handleLeadingUnderscore = replace(/^_/, "")

/**
 * @param camelCasedString 
 * @return snake_cased_string
 */
export const camelToSnake = pipe(
  replace(rxCaps, replaceCaps),
  handleLeadingUnderscore
)
