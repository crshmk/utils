import { first } from '../first'

describe('first', () => {
  test('returns head when passed an array', () => {
    expect(first([{x: 1}, {x: 2}, {x:3}])).toStrictEqual({x:1})
    expect(first([42, 43, 44])).toBe(42)
  })
  test('returns an empty object when passed an empty array or anything other than an array', () => {
    expect(first( [] ))           .toStrictEqual({})
    expect(first( 'aaa' ))        .toStrictEqual({})
    expect(first( {} ))           .toStrictEqual({})
    expect(first( undefined ))    .toStrictEqual({})
    expect(first( null ))         .toStrictEqual({})
    expect(first( function() {} )).toStrictEqual({})
  })
})
