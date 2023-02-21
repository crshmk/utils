import { anyPresent } from '../anyPresent'

describe('anyPresent', () => { 
  test('identifies an isPresent value in an array', () => {
    expect(anyPresent([['a'], {}, ''])).toBe(true)
    expect(anyPresent([[''], { one: 1 }, ''])).toBe(true)
    expect(anyPresent([[''], {}, 'a'])).toBe(true)
  })
  test('returns false for an array of all isAbsent values', () => {
    expect(anyPresent([[], {}, ''])).toBe(false)
  })
 })