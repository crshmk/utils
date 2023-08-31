### [Ramda](https://ramdajs.com/docs/) extensions 

```bash
npm i ramjam
```

---

### adjustBy

> String => {a} => [{a}] => [{a}]

identify a collection item and merge updates

```javascript
const adjustById = adjustBy('id')

const items = [
  { id: 1, x: 1, y: 1 },
  { id: 2, x: 2, y: 2 }
]

const update = { id: 2, x: 42 }
adjustById(update, items)
// [
//  { id: 1, x: 1, y: 1 },
//  { id: 2, x: 42, y: 2 }
//]
```

### allAbsent

> [a] => Boolean

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

> [a] => Boolean

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

> [a] => Boolean

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

> [a] => Boolean

```javascript
anyPresent([['a'], {}, '']))
// true

anyPresent([[''], {}, '']))
// false
```

```javascript
const isDashboardShowing = anyPresent([user, guitars])
```

### appendOrRemove

> (a, [a]) => [a]

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

### appendState 

> stateSetter => item => void

append item or array of items onto state array

must be curried
```javascript
const usePedals = () => {
  const [pedals, setPedals] = useState(['fuzz'])
  const addPedals = appendState(setPedals)
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

> String => String 

```javascript
camelToSnake('oneTwoThree')
// 'one_two_three'
```

```javascript
const camelKeysToSnake = mapKeys(camelToSnake)

const user = {
  familyName: '',
  givenName: ''
}

const createUserQuery = camelKeysToSnake(user)
// {
//   family_name: '',
//   given_name: ''
// }
```

### extend 

> Function => String => Object => Object

> augment an object by applying a function to it 

```javascript
const sumValues = pipe(values, sum)

const extendSum = extend(sumValues, 'sum') 

extendSum({ one: 1, two: 2 })
// { one: 1, two: 2, sum: 3 }
```

### first 
> any => any 

> for collections; returns an empty object when passed an empty array or anything other than an array

```javascript
first( [{one: 1}] )
// {one: 1}
first(null)
// {}
first([])
// {}
```

### flatPick 
> [[String]] => {a} => {a}

```javascript 
const axiosErrorPaths = [
  ['message'],
  ['config', 'url'],
  ['config', 'data'],
  ['response', 'status'],
  ['response', 'statusText'],
  ['response', 'data']
]

const makeErrorResponse = flatPick(axiosErrorPaths)

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

> window => {k: String}

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
  const [queryParams, setQueryParams] = useState({})

  useEffect(() => {
    const newQueryParams = getQueryParams(window)
    setQueryParams(newQueryParams)
  }, [search])

  return queryParams
}

export default useQueryParams
```

### getRouteFragments

> window => [String]

```javascript
// 'https://www.mesaboogie.com/en-US/Amp/?model=triple-rectifier'

getRouteFragments(window)
// ['en-US', 'Amp']
```

### getUniqValues

> String => [{a}] => [a]

```javascript
const guitars = [
  { id: 1, make: 'Gibson', pickup: 'PAF' },
  { id: 2, make: 'Gibson', pickup: '57 Classic' },
  { id: 3, make: 'Fender', pickup: 'Lace Sensor' }
]

const getBrandOptions = getUniqValues('make')

getBrandOptions(guitars)
// ['Gibson', 'Fender']
```

### isAbsent

> * => Boolean

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

> * => Boolean

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

> {k: String} => String

```javascript
const members = {
  guitar: 'Leo Nocentelli',
  keyboard: 'Art Neville'
}

makeQueryParams(members)
// ?guitar=Leo%20Nocentelli&keyboard=Art%20Neville
```

### mapKeys

> 

```javascript
const toUpper = x => x.toUpperCase()
const gear = {
  cables: {
    toAmp: 'Boss',
    patch: 'George L'
  }
}

const toUpperKeys = mapKeys(toUpper)

toUpperKeys(gear)
// {
//    CABLES: {
//      TOAMP: 'Boss',
//      PATCH: 'George L'
//    }
// }

```

### mapReplace

> {k: String} => String => String

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

> stateSetter => {a} => void

```javascript 
const useUser = () => {
  const [user, setUser] = useState({})
  const updateUser = mergeState(setUser)
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

> String => [String | br tag]

```jsx
const titles = `The Bends
Ok Computer
Kid A`

nl2br(titles)
//['The Bends', <br />, 'Ok Computer', <br />, 'Kid A']  
```

### notEmpty 

> * => Boolean

```javascript
complement(isEmpty)
```

### prependState 

> stateSetter => item => void

prepend item or array of items onto state array

must be curried
```javascript
const useInts = () => {
  const [ints, setInts] = useState([1])
  const prependInts = prependState(setInts)
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

> classic propEq before it was [broken](https://github.com/ramda/ramda/pull/2938) in `0.29`


### prune 
> [[String]] => {a} => {a}

```javascript 
const axiosErrorPaths = [
  ['message'],
  ['config', 'url'],
  ['config', 'data'],
  ['response', 'status'],
  ['response', 'statusText'],
  ['response', 'data']
]

const makeErrorResponse = prune(axiosErrorPaths)
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

### removeBy 

> String => {a} | primitive => [{a}] => [{a}]

Remove collection items by matching key/value or value

```javascript 
const colors = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'blue' }, 
  { id: 4, color: 'blue' }
]
   
const removeById = removeBy('id')
const itemToRemove = { id: 2, color: 'green' }
// this matches { id: 2 }
removeById(itemToRemove, colors)
// [
//   { id: 1, color: 'red' }, 
//   { id: 3, color: 'blue' }, 
//   { id: 4, color: 'blue' }
// ]

const removeColor = removeBy('color')
// this matches { color: 'blue' }
removeColor('blue', colors)
// [
//   { id: 1, color: 'red' }, 
//   { id: 2, color: 'green' }
// ]
```

### removeStateBy 

> stateSetter => String => {a} | primitive => void

Remove collection items in state by matching key/value or value

The api is such that you just toss whatever object you have at the state to remove it 

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

### renameKeys 

> {a} => {a} => {a}

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

const renameGuitarKeys = renameKeys(guitarKeyReplacements)
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

> String => String 

```javascript
snakeToCamel('one_two_three')
// oneTwoThree
```

```javascript
const snakeKeysToCamel = mapKeys(snakeToCamel)

const queryResult = {
  user_id: 42,
  given_name: '',
  family_name: ''
}

snakeKeysToCamel(queryResult)
// {
//   userId: 42,
//   givenName: '',
//   familyName: ''
// }

```

### updateState 

> ( [...args, currentState] -> newState ) => stateSetter => [...args] => void

curry state setters with transform functions 

pass: 
- a transform function that takes the current state as its last argument and returns a modified state. You do not pass the state. 
- the state setter 
- arguments to be passed to the transform function before the current state

You must curry the first two args to create a declarative function that updates the state as a side effect.

```javascript 
const appendState = updateState(append)
const updateStateById = updateState(adjustBy('id'))

const useUser = () => {
  const [users, setUsers] = useState([])

  const addUser = appendState(setUsers)
  const updateUser = updateStateById(setUsers)

  return { addUser, updateUser, user }
}

const { addUser, updateUser } = useUsers()

addUser({ id: 1, age: 20 })
addUser({ id: 2, age: 30 })
updateUser({ id: 2, age: 31 })

// users state becomes 
// [
//   { id: 1, age: 20 },
//   { id: 2, age: 31 }
// ] 
```

```javascript 
const mergeState = updateState(mergeDeepLeft)

const useGuitar = () => {
  const [guitar, setGuitar] = useState({})
  
  const updateGuitar = mergeState(setGuitar)

  return { guitar, updateGuitar }
}

const { updateGuitar } = useGuitar()

updateGuitar({ id: 1, status: 'new' })
updateGuitar({ status: 'used', make: 'Gibson' })

// guitar state becomes 
// { id: 1, status: 'used', make: 'Gibson' }
```

```javascript 


```
