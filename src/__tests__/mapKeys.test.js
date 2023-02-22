import { mapKeys } from '../mapKeys'
import { toUpper } from 'ramda'

const toUpperKeys = mapKeys(toUpper)

const obj = {
  one: 1,
  two: 2,
  three: {
    four: 4,
    five: {
      six: {
        seven: 7,
        eight: {
          nine: 9
        }
      }
    }
  }
}

const expected = {
  ONE: 1,
  TWO: 2,
  THREE: {
    FOUR: 4,
    FIVE: {
      SIX: {
        SEVEN: 7,
        EIGHT: {
          NINE: 9
        }
      }
    }
  }
}

describe('mapKeys', () => { 
  test('applies an tranform function to each key in an object, recursively', () => {
    expect(toUpperKeys(obj)).toStrictEqual(expected)
  })
  test('returns an empty object when passed incorrect type or empty object', () => {
    expect(toUpperKeys(123)).toStrictEqual({})
    expect(toUpperKeys([])).toStrictEqual({})
    expect(toUpperKeys({})).toStrictEqual({})
  })
 })