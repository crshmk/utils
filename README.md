### [Ramda](https://ramdajs.com/docs/) extensions 

```bash
npm i crshmk/utils
```

### adjustBy

> String => {a} => [{a}] => [{a}]

```javascript
const adjustById = adjustBy('id')

const state = [
  { id: 1, x: 1, y: 5 },
  { id: 2, x: 2, y: 6 }
]

const update = { id: 2, x: 42 }
adjustById(update, state)
// [
//  { id: 1, x: 1, y: 5 },
//  { id: 2, x: 42, y: 6 }
//]
```

```javascript 
  const fetchedGuitars = [
    { id: 1, make: 'Gibson', model: 'Les Paul Standard' year: 1959 },
    { id: 2, make: 'Gibson', model: 'Flying V' year: 1966 },
    { id: 3, make: 'Fender', model: 'Telecaster' year: 1952 }
  ] 
  const [guitars, setGuitars] = useState(fetchedGuitars)

  const updateGuitars = update => {
    const newGuitars = adjustById(update)
    setGuitars(newGuitars)
  }

  updateGuitars({ id: 2, year: 1967 })

// [
//   { id: 1, make: 'Gibson', model: 'Les Paul Standard' year: 1959 },
//   { id: 2, make: 'Gibson', model: 'Flying V' year: 1967 },
//   { id: 3, make: 'Fender', model: 'Telecaster' year: 1952 }
//  ] 
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

const getMakeOptions = getUniqValues('make')

getMakeOptions(guitars)
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

```javascript 
const colors = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'blue' }, 
  { id: 4, color: 'blue' }
]
   
const removeById = removeBy('id')
removeById({ id: 2, color: 'green' }, colors)
// [{ id: 1, color: 'red' }, { id: 3, color: 'blue' }, { id: 4, color: 'blue' }]

const removeBlueColor = removeBy('color', 'blue')
removeBlueColor(colors)
// [{ id: 1, color: 'red' }, { id: 2, color: 'green' }]
```


```javascript 
// Guitars.js
const removeById = removeBy('id')
const removeByBrand = removeBy('brand')
const removeGibsons = removeBy('brand', 'Gibson')

const Guitars = () => {
  const [guitars, setGuitars] = setState(fetchedGuitars)

  const removeGuitar = guitar =>
    setGuitars(removeById(guitar))

  const removeBrand = brand =>
    setGuitars(removeByBrand(brand))

  const removeGibsonBrands = () => 
    setGuitars(removeGibsons)
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

> ( [...args, currentState] -> newState ) => stateSetter => newState

> curry state setters with transform functions 

```javascript 
const appendState = updateState(append)
const adjustById = adjustBy('id')
 
const Component = () => {
  const [ints, setInts] = useState([1,2])
  const [chars, setChars] = useState(['a', 'b'])
  const [vals, setVals] = useState([{id: 1, val: 42}])

  const addInt = appendState(setInts)
  const addChar = appendState(setChars)
  const updateVal = updateState(adjustById, setVals)
	
//... 
addInt(3)
// ints state becomes [1, 2, 3]
addChar('c')
// chars state becomes ['a', 'b', 'c']
updateVal({id:1, val: 43})
// vals state becomes [{id: 1, val: 42}]
```
