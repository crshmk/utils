import { getRouteFragments } from '../getRouteFragments'

const window = {
  location: {
    pathname: '/one/two/three/?x=1&y=2'
  }
}

const expected = ['one', 'two', 'three']

describe('getRouteFragments', () => { 
  test('returns an array of strings representing the route fragments, without the leading "/"', () => {
    expect(getRouteFragments(window)).toStrictEqual(expected)
  })
 })