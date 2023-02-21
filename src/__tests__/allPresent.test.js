import { allPresent } from '../allPresent'

describe('allPresent', () => { 
  test('identifies an array of all non-empty values', () => {
    expect(allPresent([['a'], { one: 1 }, 'a', 1])).toBe(true)
  })
  test('returns false for any isAbsent value', () => {
    expect(allPresent([[], { one: 1 }, 'a', 1])).toBe(false)
    expect(allPresent([['a'], {}, 'a', 1])).toBe(false)
    expect(allPresent([['a'], { one: 1 }, '', 1])).toBe(false)
  })
 })