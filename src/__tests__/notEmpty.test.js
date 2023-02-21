import { notEmpty } from '../notEmpty'

describe('isPresent', () => { 
  test('identifies non-empty values', () => {
    expect(notEmpty('a')).toBe(true)
    expect(notEmpty(0)).toBe(true)
    expect(notEmpty(1)).toBe(true)
    expect(notEmpty(['a'])).toBe(true)
    expect(notEmpty({ one: 1 })).toBe(true)
    expect(notEmpty(function() {})).toBe(true)
  })

  test('identifies empty values', () => {
    expect(notEmpty([])).toBe(false)
    expect(notEmpty({})).toBe(false)
    expect(notEmpty('')).toBe(false)
  })
  test('returns true for nil values', () => {
    expect(notEmpty(null)).toBe(true)
    expect(notEmpty(undefined)).toBe(true)
  })

 })
