import { isAbsent } from '../isAbsent'

describe('isPresent', () => { 
  test('identifies empty values', () => {
    expect(isAbsent([])).toBe(true)
    expect(isAbsent({})).toBe(true)
    expect(isAbsent('')).toBe(true)
  })
  test('identifies nil values', () => {
    expect(isAbsent(null)).toBe(true)
    expect(isAbsent(undefined)).toBe(true)
  })
  test('identifies non-empty values', () => {
    expect(isAbsent('a')).toBe(false)
    expect(isAbsent(0)).toBe(false)
    expect(isAbsent(1)).toBe(false)
    expect(isAbsent(['a'])).toBe(false)
    expect(isAbsent({ one: 1 })).toBe(false)
    expect(isAbsent(function() {})).toBe(false)
  })
 })
