import { camelToSnake } from '../camelToSnake'

describe('camelToSnake', () => { 
  test('transforms a camel cased string to a snake cased string', () => {
    expect(camelToSnake('oneTwoThree')).toBe('one_two_three')
  })
  test('does not underscore a leading capitalized letter', () => {
    expect(camelToSnake('OneTwoThree')).toBe('one_two_three')
  })
 })