/**
  * pluck potentially nested props from an object; retain shape
  *
  * @param obj 
  * @return pruned object 
  *
  * @example 
  *
  *   const axiosErrorPaths = [
  *     ['message'],
  *     ['config', 'url'],
  *     ['config', 'data'],
  *     ['response', 'status'],
  *     ['response', 'statusText'],
  *     ['response', 'data']
  *   ]
  *
  *   const makeErrorResponse = prune(axiosErrorPaths)
  *   makeErrorResponse(axiosError)
  *   // {  
  *   //    message: 'Request failed with status code 502',
  *   //    config: {
  *   //      url: '/users',
  *   //      data: 'config data'
  *   //    },
  *   //    response: {
  *   //      status: 502,
  *   //      statusText: 'Bad Gateway',
  *   //      data: 'response data'
  *   //    }
  *   //  }
  *   
  */
import { curry, defaultTo, lensPath, set, view } from 'ramda'

// set leaf nodes to null to preserve shape for JSON 
const nullOr = defaultTo(null)

export const prune = curry(
  (paths, obj) => paths.reduce((acc, path) => {
    const lens = lensPath(path)
    const val = nullOr(view(lens, obj))
    return set(lens, val, acc)
  }, {})
)
