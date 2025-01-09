import { propOr } from 'ramda'
import { mapKeys } from './mapKeys'

/**
 * apply a transform function to each key in an object, recursively
 * 
 * @param replacements map of keys to be renamed
 * @param object to be transformed
 * 
 * @return object with renamed keys
 */
export const renameKeys = replacements => 
  mapKeys(k => propOr(k, k, replacements))
