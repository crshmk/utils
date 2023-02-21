import { anyAbsent } from '../anyAbsent'

describe('anyAbsent', () => { 
  test('identifies an array of all empty values', () => {
    expect(anyAbsent([[], {}, ''])).toBe(true)
  })
  test('returns true for any isAbsent value', () => {
    expect(anyAbsent([[], { one: 1 }, 'a'])).toBe(true)
    expect(anyAbsent([['a'], {}, 'a'])).toBe(true)
    expect(anyAbsent([['a'], { one: 1 }, ''])).toBe(true)
  })
 })