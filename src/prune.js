import { curry, defaultTo, lensPath, set, view } from 'ramda'

// set leaf nodes to null to preserve shape for JSON.stringify
const nullOr = defaultTo(null)

export const prune = curry(
  (paths, obj) => paths.reduce((acc, path) => {
    const lens = lensPath(path)
    const val = nullOr(view(lens, obj))
    return set(lens, val, acc)
  }, {})
)
