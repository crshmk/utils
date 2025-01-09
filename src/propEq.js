import { curry, equals, prop } from 'ramda'

/**
 * classic propEq before it was broken in 0.29
 * https://github.com/ramda/ramda/pull/2938
 */
export const propEq = curry((name, val, obj) => 
  equals(val, prop(name, obj)))
