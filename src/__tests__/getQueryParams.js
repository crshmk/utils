import { getQueryParams } from '../getQueryParams'

describe('getQueryParams', () => { 
  test('returns url query params as an object', () => {
    const window = {
      location: {
        search: '?first=the%20first%20one&second=the%20second%20one'
      }
    }

    const expected = {
      first: 'the first one', 
      second: 'the second one'
    }

    expect(getQueryParams(window)).toStrictEqual(expected)
  })

  test('returns an empty object when no query params are present', () => { 
    const window = {
      location: {
        search: ''
      }
    }
    expect(getQueryParams(window)).toStrictEqual({})
   })
 })