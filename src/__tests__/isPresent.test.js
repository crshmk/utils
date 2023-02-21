import { isPresent } from '../isPresent'

describe('isPresent', () => { 
  test('identifies empty values', () => {
    expect(isPresent([])).toBe(false)
    expect(isPresent({})).toBe(false)
    expect(isPresent('')).toBe(false)
  })
  test('identifies nil values', () => {
    expect(isPresent(null)).toBe(false)
    expect(isPresent(undefined)).toBe(false)
  })
  test('identifies non-empty values', () => {
    expect(isPresent('a')).toBe(true)
    expect(isPresent(0)).toBe(true)
    expect(isPresent(1)).toBe(true)
    expect(isPresent(['a'])).toBe(true)
    expect(isPresent({ one: 1 })).toBe(true)
    expect(isPresent(function() {})).toBe(true)
  })
 })