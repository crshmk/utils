### [Ramda](https://ramdajs.com/docs/) extensions 

with state utils for React

---

### adjustBy

merge partial updates to a collection item by matching key / value

```javascript
const adjustById = adjustBy<'id'>('id')

const state: Item[] = [
  { id: 1, x: 1, y: 1 },
  { id: 2, x: 2, y: 2 }
]

const update = { id: 2, x: 42 }
adjustById<Item>(update, state)
// [
//  { id: 1, x: 1, y: 1 },
//  { id: 2, x: 42, y: 2 }
//]

const updateItem = adjustBy<'id', Item>('id', update)
const newState = adjustBy<'id', Item>('id', update, state)

```

### allAbsent

```javascript
allAbsent([[], {}, ''])
// true

allAbsent([[], {one: 1}, ''])
// false
```

```javascript
const isSignupButtonShowing = allAbsent([user, signupToken])
```

### allPresent

```javascript
allPresent([['a'], { one: 1 }, 'a', 1])
// true

allPresent([[], { one: 1 }, 'a', 1])
// false
```

```javascript
const isConfigShowing = allPresent([user, activeSettingsTab])
```

### anyAbsent

```javascript
anyAbsent([[], { one: 1 }, 'x'])
// true

anyAbsent([[42], { one: 1 }, 'x'])
// false
```

```javascript
const isSpinnerShowing = allAbsent([user, guitars, fetchError])
```

### anyPresent

```javascript
anyPresent([['a'], {}, ''])
// true

anyPresent([[''], {}, ''])
// false
```

```javascript
const isDashboardShowing = anyPresent([user, guitars])
```

### appendOrRemove
toggle list item 

```javascript
const state = ['one', 'two', 'three']

appendOrRemove('two', state)
appendOrRemove('four', state)
// ['one', 'three', 'four']
```

```javascript
const onClickCheckbox = value => {
  const newSelections = appendOrRemove(value, selections)
  setSelections(newSelections)
}
```

### appendOrRemoveBy 
toggle collection items by matching key / value

```javascript
const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }, { id: 3, color: 'blue' }]
appendOrRemoveBy('color', { color: 'blue' }, list)
// list becomes [{ id: 2, color: 'green' }]
appendOrRemoveBy('id', { id: 4, color: 'red' }, list)
// list becomes [{ id: 2, color: 'green' }, { id: 4, color: 'red' }]
```

```javascript 
const toggleItem = appendOrRemoveBy('id')
```

### appendOrRemoveStateBy
toggle collection items in state

```javascript 
const useItems = () => {
  const [items, setItems] = useState([{ id: 1, label: 'nice', color: 'blue' }])

  const toggleItem = appendOrRemoveStateBy(setItems, 'id')
  const toggleColor = appendOrRemoveStateBy(setItems, 'color')

  return { items, toggleColor, toggleItem }
}

toggleItem({ id: 1, label: 'nice', color: 'blue' })
// toggle item with id 1 
toggleColor({color: 'blue'})
// toggle all blue items
```

### appendState 

append item or array of items to state

```javascript
const usePedals = () => {
  const [pedals, setPedals] = useState(['fuzz'])
  const addPedals = appendState<PedalType>(setPedals)
  return { addPedals, pedals }
}
```

```javascript 
const { addPedals } = usePedals() 
addPedals('delay')
// pedals state becomes ['fuzz', 'delay']
addPedals(['wah', 'phase'])
// pedals state becomes ['fuzz', 'delay', 'wah', 'phase']
```

### camelToSnake 

```javascript
camelToSnake('oneTwoThree')
// 'one_two_three'
```

```javascript
const toSqlKeys = mapKeys<Prev, Next>(camelToSnake)

const user = {
  familyName: '',
  givenName: ''
}

const createUserQuery = toSqlKeys(user)
// {
//   family_name: '',
//   given_name: ''
// }
```

### extend 

augment an object by applying a function to it 

```javascript
const sumValues = pipe(values, sum)

const extendSum = extend<Prev, 'sum', number>(sumValues, 'sum') 

extendSum({ one: 1, two: 2 })
// { one: 1, two: 2, sum: 3 }
```

### first 

for collections; returns an empty object when passed an empty array or anything other than an array

```javascript
first( [{one: 1}] )
// {one: 1}
first(null)
// {}
first([])
// {}
```

### flatPick 

pluck potentially nested props from an object and flatten the result 

```javascript 
const axiosErrorPaths = [
  ['message'],
  ['config', 'url'],
  ['config', 'data'],
  ['response', 'status'],
  ['response', 'statusText'],
  ['response', 'data']
]

const makeErrorResponse = flatPick<AxiosError, ErrorResponse>(axiosErrorPaths)

const onError = axiosError => {
  const response = makeErrorResponse(axiosError)
  return Promise.reject(response)
}

axios.interceptors.response.use(prop('data'), onError)
// {
//   message: 'Request failed with status code 502',
//   url: '/users',
//   data: 'config data',
//   status: 502,
//   statusText: 'Bad Gateway',
//   response_data: 'response data'
// }
```

### getQueryParams

```javascript
// https://nikhuber-guitars.com/dealers?type=orca%2059&country=thailand"

getQueryParams(window)
// {
//    type: 'orca 59',
//    country: 'thailand'
//  }
```
```javascript
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getQueryParams } from 'utils'

const useQueryParams = () => {
  const { search } = useLocation()
  const [queryParams, setQueryParams] = useState<QueryParams>({})

  useEffect(() => {
    const newQueryParams = getQueryParams<QueryParams>(window)
    setQueryParams(newQueryParams)
  }, [search])

  return queryParams
}

export default useQueryParams
```

### getRouteFragments

list of route fragments

```javascript
// 'https://www.mesaboogie.com/en-US/Amp/?model=triple-rectifier'

getRouteFragments(window)
// ['en-US', 'Amp']
```

### getUniqValues

unique values of a prop in a collection

```javascript
const guitars: Guitar[] = [
  { id: 1, make: 'Gibson', pickup: 'PAF' },
  { id: 2, make: 'Gibson', pickup: '57 Classic' },
  { id: 3, make: 'Fender', pickup: 'Lace Sensor' }
]

const getBrandOptions = getUniqValues('make')

getBrandOptions<Guitar>(guitars)
// ['Gibson', 'Fender']
```

### isAbsent

```javascript
isAbsent({})
isAbsent([])
isAbsent('')
isAbsent(null)
isAbsent(undefined)
// true

isAbsent({ one: 1 })
isAbsent(['a'])
isAbsent('a')
isAbsent(false) // <-- emptiness; not truthiness (not intended for bools)
// false
```

```javascript
const isSignupButtonShowing = isAbsent(user)
```

### isPresent

```javascript
isPresent({ one: 1 })
isPresent(['a'])
isPresent('a')
isPresent(false) // <-- emptiness; not truthiness (not intended for bools)
// true

isPresent({})
isPresent([])
isPresent('')
isPresent(null)
isPresent(undefined)
// false
```

```javascript
const isDashboardLinkShowing = isPresent(user)
```

### makeQueryParams 

make query string from object, prepended by '?'

```javascript
const members = {
  guitar: 'Leo Nocentelli',
  keyboard: 'Art Neville'
}

makeQueryParams(members)
// ?guitar=Leo%20Nocentelli&keyboard=Art%20Neville
```

### mapKeys

apply a transform function to each key in an object, recursively

```javascript
const toUpper = x => x.toUpperCase()
const gear = {
  cables: {
    toAmp: 'Boss',
    patch: 'George L'
  }
}

const toUpperKeys = mapKeys<Prev, Next>(toUpper)

toUpperKeys(gear)
// {
//    CABLES: {
//      TOAMP: 'Boss',
//      PATCH: 'George L'
//    }
// }

```

### mapReplace

map replacements over a string

```javascript
replaceFragments = mapReplace({
  'P Funk': 'P-Funk',
  In: 'in'
})

const makeBillboard = pipe(
  split('-'),
  map(ucFirst),
  join(' '),
  replaceFragments
)

const slug = 'p-funk-live-in-new-york'
makeBillBoard(slug)
// 'P-Funk Live in New York'
```

### mergeState 

merge state object updates

```javascript 
const useUser = () => {
  const [user, setUser] = useState<MaybeEmpty<User>>({})
  const updateUser = mergeState<User>(setUser)
  return { updateUser, user }
}
```

```javascript 
const { updateUser } = useUser() 

updateUser({ id: 1, age: 42 })
updateUser({ age: 43, points: 2 })
// user is now { id: 1, age: 43, points: 2 }
```

### nl2br 

insert `<br />` tags into a value intended for a text node
> *needs key solution

```jsx
const titles = `The Bends
Ok Computer
Kid A`

nl2br(titles)
//['The Bends', <br />, 'Ok Computer', <br />, 'Kid A']  
```

### notEmpty 

```javascript
complement(isEmpty)
```

### prependState 

prepend item or array of items to state arrays 

```javascript
const useInts = () => {
  const [ints, setInts] = useState([1])
  const prependInts = prependState<number>(setInts)
  return { ints, prependInts }
}
```

```javascript 
const { ints, prependInts } = useInts() 
prependInts(2)
// ints state becomes [2, 1]
prependInts([3, 4])
// ints state becomes [3, 4, 2, 1]
```

### propEq 

classic propEq before it was [broken](https://github.com/ramda/ramda/pull/2938) in `0.29`

```javascript 
propEq('color', 'blue', { color: 'blue' })
//true
```

```javascript 
// implicit typing ok
const idEq = propEq('_id')
idEq(42)

propEq('_id', 42, item)

// this signature requires explicit typing
const isGreen = propEq<'color', Item>('color', 'green')
```


### prune 
pluck potentially nested props from an object

props not on the given object are set to null to keep them in json

```javascript 
const axiosErrorPaths = [
  ['message'],
  ['config', 'url'],
  ['config', 'data'],
  ['response', 'status'],
  ['response', 'statusText'],
  ['response', 'data']
]

const makeErrorResponse = prune<AxiosError, ErrorResponse>(axiosErrorPaths)
makeErrorResponse(axiosError)
// {  
//    message: 'Request failed with status code 502',
//    config: {
//      url: '/users',
//      data: 'config data'
//    },
//    response: {
//      status: 502,
//      statusText: 'Bad Gateway',
//      data: 'response data'
//    }
//  }
```

### pruneOr 
(prune with defaults)

pluck potentially nested props from an object

provide default values when a prop is absent 

props not on the given object are set to null to keep them in json

```javascript 
const defaults = { 
  one: { 
    one1: 'default' 
  } 
}

const desiredShape = [ 
  ['one', 'one1'], 
  ['two', 'two1'], 
  ['four']
]

const toPrune = { 
  two: { 
    two1: 'incoming', 
    two2: 'incoming' 
  }, 
  three: 'incoming' 
}

const pruneResponse = pruneOr<AxiosError, ErrorResponse>(defaults, desiredShape)
pruneResponse(toPrune)
{ 
  one: { 
    one1: 'default'
  },
  { 
    two: { 
      two1: 'incoming'
    } 
  }, 
  {
    four: null 
  }
}

```


### removeBy 

Remove collection items by matching key/value 

```javascript 
const colors = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'blue' }, 
  { id: 4, color: 'blue' }
]
   
const removeById = removeBy<'id'>('id')
const itemToRemove = { id: 2, color: 'green' }
// this matches { id: 2 }
removeById<Item>(itemToRemove, colors)
// [
//   { id: 1, color: 'red' }, 
//   { id: 3, color: 'blue' }, 
//   { id: 4, color: 'blue' }
// ]

const removeBlueItems = removeBy<'color', Item>('color')
// this matches { color: 'blue' }
removeColor('blue', colors)
// [
//   { id: 1, color: 'red' }, 
//   { id: 2, color: 'green' }
// ]
```

### removeStateBy 

remove objects from a collection in state by matching key / value

```javascript 
const fetchedGuitars = [
  { id: 1, make: 'Gibson' },
  { id: 2, make: 'Gibson' },
  { id: 3, make: 'Fender' },
  { id: 4, make: 'Fender' }
]

const useGuitars = () => {
  const [guitars, setGuitars] = useState(fetchedGuitars)
  
  const removeGuitarBy = removeStateBy(setGuitars)
  const removeGuitar = removeGuitarBy('id')
  const removeGuitarMake = removeGuitarBy('make')

  return { guitars, removeGuitar, removeGuitarMake }
}

const { removeGuitar, removeGuitarMake } = useGuitars()

// this matches { id: 2 }
removeGuitar({ id: 2, make: 'Gibson' })
// guitars state becomes 
// [
//  { id: 1, make: 'Gibson' },
//  { id: 3, make: 'Fender' },
//  { id: 4, make: 'Fender' }
// ]

// this matches { make: 'Fender' }
removeGuitarMake('Fender')
// guitars state then becomes 
// [{ id: 1, make: 'Gibson' }]
```

```javascript 
  removeStateBy<Guitar, 'id'>(setGuitars, 'id', { id: 1 })
  removeStateBy<Guitar>(setGuitars)<'id'>('id', { id: 1 })
  removeStateBy<Guitar>(setGuitars)<'id'>('id')({ id: 1 })
```

### renameKeys 

apply a transform function to each key in an object, recursively

```javascript
const guitar = {
  guitarId: 42,
  transduction: 'SH4',
  config: {
    transduction: true
  },
  make: 'Gibson'
}

const guitarKeyReplacements = {
  guitarId: 'id',
  transduction: 'pickups'
}

const renameGuitarKeys = renameKeys<Prev, Next>(guitarKeyReplacements)
renameGuitarKeys(guitar)
// {
//   id: 42,
//   pickups: 'SH4',
//   config: {
//     pickups: true
//   },
//   make: 'Gibson'
// }
```

### snakeToCamel

```javascript
snakeToCamel('one_two_three')
// oneTwoThree
```

```javascript
const toJsKeys = mapKeys(snakeToCamel)

const queryResult = {
  user_id: 42,
  given_name: '',
  family_name: ''
}

toJsKeys(queryResult)
// {
//   userId: 42,
//   givenName: '',
//   familyName: ''
// }

```

### updateState 

create a side effect to update state by [curring](https://github.com/crshmk/utils/blob/b3aec648636242ee6295667f59b337f4e8bda9bc/src/removeStateBy.js#L31) a transform function and a state setter

the [transform function](https://github.com/crshmk/utils/blob/b3aec648636242ee6295667f59b337f4e8bda9bc/src/updateState.js#L33) is of arity one or greater; previous state is the last arg

```javascript 
type TransformArgs = [Partial<Guitar>]

const useGuitar = () => {
  const [guitar, setGuitar] = useState<MaybeEmpty<Guitar>>({})
  const updateGuitar = updateState<Guitar, TransformArgs>(mergeDeepLeft, setGuitar)
  return { guitar, updateGuitar }
}

const { updateGuitar } = useGuitar()
// const updateGuitar: (args_0: Partial<Guitar>) => void
updateGuitar({ id: 1, status: 'new' })
updateGuitar({ status: 'used', make: 'Gibson' })
// guitar state becomes 
// { id: 1, status: 'used', make: 'Gibson' }
```

