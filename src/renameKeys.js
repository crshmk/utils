/**
 * apply a transform function to each key in an object, recursively
 * 
 * @param {Object} replacements map of keys to be renamed
 * @param {Object} .object to be transformed
 * 
 * @return {Object} object with renamed keys
 */
import { propOr } from 'ramda'
import { mapKeys } from './mapKeys'

export const renameKeys = replacements => 
  mapKeys(k => propOr(k, k, replacements))
