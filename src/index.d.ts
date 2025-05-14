import React from 'react'
import { Path } from 'ramda'

export type Empty<T> = 
  T extends Array<infer U> ? [] : 
  T extends object ? Record<PropertyKey, never> : 
  T extends string ? '' : 
  never

export type MaybeEmpty<T> = T | Empty<T>

export type Absence = null | undefined | '' | [] | Record<PropertyKey, never>

export type Absent<T> = Empty<T> | Extract<T, Absence>

export type MaybeAbsent<T> = T | Absent<T>

/**
 * partially update a collection item by matching a prop from the update
 * 
 * @param propToMatch prop by which an object will be identified; usually an id
 * @param updates modifications to the matched object. includes the propToMatch
 * @param list the collection in which a single object will be matched and updated
 * 
 * @example 
 *  const adjustById = adjustBy('id')
 *  const state = [{ id: 1, val: 1 }, { id: 2, val: 2 }]
 *  const update = { id: 2, val: 42 }
 * 
 * adjustById(update, state)
 * -> [{ id: 1, val: 1 }, { id: 2, val: 42 }]
 */
export function adjustBy<K extends keyof T, T extends Record<PropertyKey, any>>(
  propToMatch: K,
  updates: Partial<Omit<T, K>> & Pick<T, K>,
  list: T[]
): T[]

export function adjustBy<K extends keyof T, T extends Record<PropertyKey, any>>(
  propToMatch: K,
  updates: Partial<Omit<T, K>> & Pick<T, K>
): (list: T[]) => T[]

export function adjustBy<K extends string>(
  propToMatch: string
): {
  <T extends Record<PropertyKey, any>>(updates: Partial<Omit<T, K>> & Pick<T, K>): (list: T[]) => T[]
  <T extends Record<PropertyKey, any>>(updates: Partial<Omit<T, K>> & Pick<T, K>, list: T[]): T[]
}

export function adjustBy<K extends keyof T, T extends Record<PropertyKey, any>>(
  propToMatch: string
): {
  (updates: Partial<Omit<T, K>> & Pick<T, K>): (list: T[]) => T[]
  (updates: Partial<Omit<T, K>> & Pick<T, K>, list: T[]): T[]
}

/**
 * @example 
 *  allAbsent([[], {}, ''])
 *  // true 
 *  allAbsent([[], {one: 1}, ''])
 *  // false
 */
//export function allAbsent<T>(array: T[]): array is T[] & (T extends Emptiness ? Emptiness : T)[];
export function allAbsent<T>(array: T[]): array is (T & Emptiness)[]

/**
 * @example 
 *  allAbsent([[], {}, ''])
 *  // true
 *  allAbsent([[], {one: 1}, ''])
 *  // false
 */
export function allPresent<T>(array: T[]): array is Exclude<Absence>[]

/**
  * @example
  *  anyAbsent([42], {one: 1}, 'x'])
  *  // false
  *  anyAbsent([[], {one: 1}, 'x'])
  *  // true  
**/
export function anyAbsent<T>(array: T[]): array is T[] & (T extends Absence ? never : T)[]

/**
  *  anyPresent([], {}, ''])
  *  // false 
  *  anyPresent([[], {one: 1}, ''])
  *  // true   
**/
export function anyPresent<T>(array: T[]): array is T[] & (T extends Absence ? T : never)[]

/**
 * @param target value in list to be matched by Ramda's equals -> https://ramdajs.com/docs/#equals 
 * @param list 
 * @return list with target appended or removed
 * 
 * @example 
 *  const state = ['one', 'two', 'three']
 *  appendOrRemove('four', state) //=> ['one', 'two', 'three', 'four']
 *  appendOrRemove('two', state) //=> ['one', 'three', 'four']
 */
export function appendOrRemove<T>(target: T, list: T[]): T[]

export function appendOrRemove<T>(target: T) : (list: T[]) => T[]

/**
 * @param target item to append or match for removal 
 * @return collection with item appended or all matching items removed
 * 
 * @example 
 *   const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }, { id: 3, color: 'blue' }]
 *   appendOrRemoveBy({ color: 'blue' }, list)
 *   // list becomes [{ id: 2, color: 'green' }]
 *   appendOrRemoveBy({ id: 4, color: 'red' }, list)
 *   // list becomes [{ id: 2, color: 'green' }, { id: 4, color: 'red' }]
 */
export function appendOrRemoveBy<T>(target: Partial<T>, list: T[]): T[]

export function appendOrRemoveBy<T>(target: Partial<T>): (list: T[]) => T[]

/**
 * curry state setter for a list to append item or array of items to state arrays 
 *
 * @param setState the setter returned from useState 
 * @param items the appended item or array of items
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const concatInts = appendState(setInts) 
 *   concatInts(2)
 *   // ints state becomes [1, 2]
 *
 *   concatInts([3, 4])
 *   // ints state becomes [1, 2, 3, 4]
 */
export function appendState<T>(
  setState: React.Dispatch<React.SetStateAction<T[]>>
): (items: T | T[]) => void

/**
 * @param camelCasedString 
 * @return snake_cased_string
 */
export function camelToSnake(camelCasedString: string): string

/**
 * add a prop to an object by appyling a function to that object 
 * 
 * @param fn function to apply to the object to derive the value of the new prop
 * @param key name of the new prop
 * @param obj object to be extended
 * @return extended object 
 * 
 * @example 
 *   const sumValues = pipe(values, sum)
 *   const extendSum = extend(sumValues, 'sum') 
 *   extendSum({ one: 1, two: 2 })
 *   // { one: 1, two: 2, sum: 3 }
 */
export function extend<T extends Record<PropertyKey, any>, K extends string>(
  fn: (obj: T) => any,
  key: K,
  obj: T
): T & Record<K, any>

export function extend<T extends Record<PropertyKey, any>, K extends string>(
  fn: (obj: T) => any,
  key: K
): (obj: T) => T & Record<K, any>

export function extend<T extends Record<PropertyKey, any>>(
  fn: (obj: T) => any
): <K extends string>(key: K) => (obj: T) => T & Record<K, any>

/**
 * first item in a collection or an empty object  
 *
 * @param list 
 * @return the first list item or an empty object
 * 
 * @example 
 *   const users = [{ name: 'Jo' }]
 *   first(users)
 *   // { name: 'Jo' } 
 *
 *   first([])
 *   // {} 
 *
 *   first(undefined)
 *   // {} 
 * 
 *   const user = await getUser()
 *   // user || {}
 */
export function first<T>(array: T[] | undefined): T | Record<PropertyKey, never>

/**
 * - plucks potentially nested props from an object and flattens the result 
 * 
 * - handles collisions by joining nested paths with '_'
 * 
 * - sets unfound props to null
 * 
 * @param paths paths to target props
 * @param obj the object containing target props
 * @return the concise object with flattened props
 * 
 * @example 
 * 
 *    const axiosErrorPaths = [
 *      ['message'],
 *      ['response', 'status'],
 *      ['isAxiosError'],
 *      ['config', 'data']
 *    ]
 * 
 *    const makeAxiosError = flatPick(axiosErrorPaths)
 * 
 *    axios.interceptors.response.use(prop('data'), function(err) {
 *      const response = makeAxiosError(err)
 *       return Promise.reject(response)
 *      })
 */
export function flatPick<T, U>(
  paths: Path[],
  obj: T
): U

export function flatPick<T, U>(paths: Path[]): (obj: T) => U

/**
  * @param window 
  * @return object of query params
  *
  * @example
  *   `https://nikhuber-guitars.com/dealers?type=orca%2059&country=thailand`
  *   getQueryParams(window)
  *   // { type: 'orca 59', country: 'thailand'}
**/
export function getQueryParams<T>(window: Window): T

/**
  * list of route fragments
  *
  * @param window the window object 
  * @return list of route fragments
  *
  * @example 
  *   'https://www.mesaboogie.com/en-US/Amp/?model=triple-rectifier'
  *   getRouteFragments(window)
  *   // ['en-US', 'Amp']
*/ 
export function getRouteFragments(window: Window): string[]

/**
 * get unique values of a prop in a collection
 * 
 * @param key targeted prop
 * @param items collection of objects
 * @return list of unique values for this prop in the collection
 * 
 * @example 
 *     const items = [
 *       { id: 1, country: 'Japan' },
 *       { id: 1, country: 'Japan' },
 *       { id: 1, country: 'Vietnam' },
 *     ]
 *     getUniqValues('country', items)
 *     //=> ['Japan', 'Vietnam']
 */
export function getUniqValues<K extends keyof T, T>(
  key: K,
  items: (Partial<Omit<T, K>> & Pick<T, K>)[]
): T[K][]

export function getUniqValues<K extends keyof T, T>(
  key: K
): (items: (Partial<Omit<T, K>> & Pick<T, K>)[]) => T[K][]

export function getUniqValues<K extends keyof T>(
  key: K
): <T>(items: (Partial<Omit<T, K>> & Pick<T, K>)[]) => T[K][]

/**
 * @example 
 *  isAbsent({})
 *  isAbsent([])
 *  isAbsent('')
 *  isAbsent(null)
 *  isAbsent(undefined)
 *  // true
 * 
 *  isAbsent({ one: 1 })
 *  isAbsent(['a'])
 *  isAbsent('a')
 *  isAbsent(false) // <-- emptiness; not truthiness (not intended for bools)
 *  // false
**/
export function isAbsent(x: any): x is null | undefined | "" | [] | Record<PropertyKey, never> 

/**
 * @example 
 * isPresent({ one: 1 })
 * isPresent(['a'])
 * isPresent('a')
 * isPresent(false) // <-- emptiness; not truthiness (not intended for bools)
 * // true
 * 
 * isPresent({})
 * isPresent([])
 * isPresent('')
 * isPresent(null)
 * isPresent(undefined)
 * // false
**/
export function isPresent<T>(x: T): x is Exclude<any, Absence>

/**
 * make query string from object, prepended by '?'
 * 
 * @param params  object to be transformed
 * @return query string preceded by '?' or empty string
 * 
 * @example 
 * const members = {
 *   guitar: 'Leo Nocentelli',
 *   keyboard: 'Art Neville'
 * }
 * 
 * makeQueryParams(members)
 * // ?guitar=Leo%20Nocentelli&keyboard=Art%20Neville
 */
export function makeQueryParams(
  params: Record<PropertyKey, string>
): string

/**
 * apply a transform function to each key in an object, recursively
 * 
 * @param transform transform function
 * @param object to be transformed
 * @return transformed object
 * 
 * @example 
 * const toUpper = x => x.toUpperCase()
 * const gear = {
 *   cables: {
 *     toAmp: 'Boss',
 *     patch: 'George L'
 *   }
 * }
 * 
 * const toUpperKeys = mapKeys(toUpper)
 * 
 * toUpperKeys(gear)
 * // {
 * //    CABLES: {
 * //      TOAMP: 'Boss',
 * //      PATCH: 'George L'
 * //    }
 * // }
 */
export function mapKeys<T, U>(
  transform: (key: keyof T) => string
): (obj: T) => U

/**
 * map replacements over a string
 * 
 * @param replacements the map of items to match (key) and replace (value)
 * @param str the string to be transformed
 * @return transformed string
 * 
 * @example
 * const mapInts = {
 *   one: '1',
 *   two: '2',
 *   three: '3'
 * }
 * const replaceInts = mapReplace(mapInts)
 * replaceInts('oneandtwoandthree') -> '1and2and3'
 */
export function mapReplace(replacements: Record<PropertyKey, string>, str: string): string

export function mapReplace(
  replacements: Record<PropertyKey, string>
): (str: string) => string

/**
 * merge state object updates 
 *
 * @param setState setter returned from useState 
 * @param updates to merge into the state 
 * 
 * @example 
 *   const [user, setUser] = useState({ name: 'Jo', age: 42 })
 *   const mergeUser = mergeState(setUser) 
 *   mergeUser({ age: 43, points: 1 })
 *   // user becomes { name: 'Jo', age: 43, points: 1 }
 */
export function mergeState<T>(
  setState: React.Dispatch<React.SetStateAction<T>>
): (updates: Partial<T>) => void

/**
  * insert <br /> tags into a value intended for a text node 
  * note: needs keys in the <br /> tags
  *
  * @param string with line breaks 
  * @return text with <br /> tags for the breaks 
  *
  * @example 
  *   const description = `top line  
  *   second line 
  *   thirdline` 
  *
  *   nl2br(description)
  *   // ['top line', <br />, 'second line', <br />, 'third line'] 
*/
export function nl2br(text: string): (string | JSX.Element)[]

/**
 * complement of `isEmpty`
 */
export function notEmpty<T>(x: T): x is T 

/**
 * prepend item or array of items to state arrays 
 *
 * @param setState the setter returned from useState 
 * @param item the prepended item or list of items
 * 
 * @example 
 *   const [ints, setInts] = useState([1])
 *   const prependInts = prependState(setInts) 
 *   prependInts(2)
 *   // ints state becomes [2, 1]
 * 
 *   prependInts([3, 4])
 *   // ints state becomes [3, 4, 2, 1]
 */
export function prependState<T>(setState: React.Dispatch<React.SetStateAction<T[]>>): (items: T | T[]) => void

export function propEq<K extends keyof T, T>(
  key: K,
  val: T[K],
  obj: T
): boolean

export function propEq<K extends keyof T, T>(key: K, value: T[K]): (obj: T) => boolean 

export function propEq<K extends PropertyKey>(key: K): {
  <V>(value: V): <T>(obj: Record<K, T>) => boolean
  <V, T>(value: V, obj: Record<K, T>): boolean 
}

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
export function prune<T, U>(
  paths: Path[]
): (obj: T) => U

/**
 * - pluck potentially nested props from an object
 * - provide default values when a prop is absent 
 * - props not on the given object are set to null to keep them in json
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
export function pruneOr<T, U>(
  defaults: Partial<T>,
  paths: Path[],
  obj: T
): U

/**
 * remove objects from a collection by matching key / value 
 * 
 * @param key to match target in collection, e.g. `'id'`
 * @param toRemove target for removal, e.g. `{ id: 1 }` or target value for removal (e.g. `1`); both of these match an object with { id: 1 }
 * @param items collection
 * @return collection with matched item removed
 * 
 * @example 
 *     const state = [
 *       { id: 1, color: 'red' },
 *       { id: 2, color: 'green' },
 *       { id: 3, color: 'blue' },
 *       { id: 4, color: 'blue' }
 *     ]
 *    
 *     const removeById = removeBy('id')
 * 
 *     const itemToRemove = { id: 2 }
 *     const newState = removeById(itemToRemove, state)
 *     // [{ id: 1, color: 'red' }, { id: 3, color: 'blue' }, { id: 4, color: 'blue' }]
 * 
 *     const removeByColor = removeBy('color')
 *     const newState = removeByColor('blue', state)
 *     // [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
 */
export function removeBy<K extends keyof T, T extends Record<PropertyKey, any>>(
  propToMatch: K,
  itemToRemove: Partial<Omit<T, K>> & Pick<T, K>,
  items: T[]
): T[]

export function removeBy<K extends keyof T, T extends Record<PropertyKey, any>>(
  propToMatch: K,
  itemToRemove: Partial<Omit<T, K>> & Pick<T, K>
): (items: T[]) => T[]

export function removeBy<K extends string>(
  propToMatch: string
): {
  <T extends Record<PropertyKey, any>>(itemToRemove: Partial<Omit<T, K>> & Pick<T, K>): (items: T[]) => T[]
  <T extends Record<PropertyKey, any>>(itemToRemove: Partial<Omit<T, K>> & Pick<T, K>, items: T[]): T[]
}

export function removeBy<K extends keyof T, T extends Record<PropertyKey, any>>(
  propToMatch: string
): {
  (itemToRemove: Partial<Omit<T, K>> & Pick<T, K>): (items: T[]) => T[]
  (itemToRemove: Partial<Omit<T, K>> & Pick<T, K>, items: T[]): T[]
}

/**
 * remove objects from a collection in state by matching a key / value 
 * 
 * @param setState the setter returned from useState 
 * @param key to match target in collection
 * @param toRemove primitive | Object -> the primitive (e.g. `1`) or object (e.g. `{one: 1}`) to match 
 * 
 * @example 
 *     const state = [
 *       { id: 1, color: 'red' },
 *       { id: 2, color: 'green' },
 *       { id: 3, color: 'blue' },
 *       { id: 4, color: 'blue' }
 *     ]
 *    
 *     const removeById = removeBy('id')
 * 
 *     const itemToRemove = { id: 2 }
 *     const newState = removeById(itemToRemove, state)
 *     // [{ id: 1, color: 'red' }, { id: 3, color: 'blue' }, { id: 4, color: 'blue' }]
 * 
 *     const removeByColor = removeBy('color')
 *     const removeByColor('blue', state)
 *     // state becomes [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
 */
export function removeStateBy<T extends Record<PropertyKey, any>, K extends keyof T>(
  setState: React.Dispatch<React.SetStateAction<T[]>>,
  key: K,
  itemToRemove: Partial<Omit<T, K>> & Pick<T, K>
): void

export function removeStateBy<T extends Record<PropertyKey, any>, K extends keyof T>(
  setState: React.Dispatch<React.SetStateAction<T[]>>,
  key: K
): (toRemove: Partial<Omit<T, K>> & Pick<T, K>) => void

export function removeStateBy<T extends Record<PropertyKey, any>>(setState: React.Dispatch<React.SetStateAction<T[]>>): {
  <K extends keyof T>(key: K): (toRemove: Partial<Omit<T, K>> & Pick<T, K>) => void
  <K extends keyof T>(key: K, toRemove: Partial<Omit<T, K>> & Pick<T, K>): void
}

/**
 * apply a transform function to each key in an object, recursively
 * 
 * @param replacements map of keys to be renamed
 * @param object to be transformed
 * 
 * @return object with renamed keys
 */
export function renameKeys<T extends Record<PropertyKey, any>, U>(
  replacements: { [K in keyof T]?: string }
): (obj: T) => U


/**
 * @param snake_cased_string 
 * @return camelCasedString
 */
export function snakeToCamel(snake_cased_string: string): string

/**
 * creates a state setter from 
 * - a transform function 
 * - the setter from useState 
 *
 * @param fn Function variable arity function to transform the state; last arg is the current state (...args, currentState) => newState
 * @param setState Function the setter returned from useState 
 * @param ...args variable arity args applied to the transform function, preceding the current state in its signature
 *
 * @example 
 * const appendState = updateState(append)
 * const adjustById = adjustBy('id')
 * 
 * const Component = () => {
 *   const [ints, setInts] = useState([1,2])
 *   const [chars, setChars] = useState(['a', 'b'])
 *   const [vals, setVals] = useState([{id: 1, val: 1}, {id: 2, val: 2}])
 *
 *   const addInt = appendState(setInts)
 *   const addChar = appendState(setChars)
 *   const updateVal = updateState(adjustById, setVals)
  ... 
 *  addInt(3)
 *  // ints state becomes [1, 2, 3]
 *  addChar('c')
 *  // chars state becomes ['a', 'b', 'c']
 *  updateVal({id:1, val: 999})
 *  // vals state becomes [{id: 1, val: 999}, {id: 2, val: 2}]
 */
