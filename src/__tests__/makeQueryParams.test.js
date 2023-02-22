import { makeQueryParams } from '../makeQueryParams'

const params = {
  one: 'first thing',
  two: 'second thing'
}

const expected = '?one=first%20thing&two=second%20thing' 

describe('makeQueryParams', () => { 
  test('transforms an object into a query param string and prepends a "?"', () => {
    expect(makeQueryParams(params)).toBe(expected)
  })
  test('returns an empty string when no params are passed', () => {
    expect(makeQueryParams({})).toBe('')
  })
})