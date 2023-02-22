/**
 * maps replacement options over a string
 * 
 * @param {Object} replacements the map of items to match and replace
 * @param {String} str the string to be transformed
 * 
 * @return {String} transformed string
 * 
 * const mapInts = {
 *   one: '1',
 *   two: '2',
 *   three: '3'
 * }
 * const replaceInts = mapReplace(mapInts)
 * replaceInts('oneandtwoandthree') -> '1and2and3'
 */
import { curry } from 'ramda'

export const mapReplace = curry((replacements, str) => {
  const fragmentsToReplace = Object.keys(replacements).join('|')
  const regex = new RegExp(fragmentsToReplace, 'g')
  return str.replace(regex, match => replacements[match])
})