import { snakeToCamel } from '../snakeToCamel'

describe('snakeToCamel', () => { 
  test('transforms a snake cased string to a camel cased string', () => {
    expect(snakeToCamel('one_two_three')).toBe('oneTwoThree')
  })
 })