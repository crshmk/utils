import { allAbsent } from '../allAbsent'

describe('allAbsent', () => { 
  test('identifies empty values', () => {
    expect(allAbsent([[], {}, ''])).toBe(true)
  })
  test('returns false for any isPresent value', () => {
    expect(allAbsent([[], {}, '', 1])).toBe(false)
    expect(allAbsent([[], {}, '', 'a'])).toBe(false)
    expect(allAbsent([[], {}, '', ['a']])).toBe(false)
  })
 })