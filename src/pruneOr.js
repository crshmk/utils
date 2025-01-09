import { curry, mergeDeepRight } from 'ramda'
import { prune } from './prune'

/**
 * pluck potentially nested props from an object
 * provide default values when a prop is absent 
 * 
 * @param defaults the default values to use when a prop is absent on the expected shape
 * @param paths the shape of the desired output as paths
 * 
 * @return the pruned object, with appropriate defaults
 * 
 * @example 
 *   const defaults = { 
 *     one: { 
 *       one1: 'default' 
 *     }
 *   }
 * 
 *   const toPrune = { 
 *     two: { two1: 'incoming', two2: 'incoming' }, 
 *     three: 'incoming' 
 *   }
 * 
 *   const paths = [ 
 *     ['one', 'one1'], 
 *     ['two', 'two1'], 
 *     ['four'] 
 *   ]
 *   const pruneResponse = pruneOr(defaults, paths)
 * 
 *   pruneResponse(toPrune)
 *   // { 
 *   //   one: { one1: 'default' }, 
 *   //   two: { two1: 'incoming' }, 
 *   //   four: null 
 *   // }
 */
export const pruneOr = curry(
  (defaults, paths, obj) => {
    const withDefaults = mergeDeepRight(defaults, obj)
    return prune(paths, withDefaults)
  }
)