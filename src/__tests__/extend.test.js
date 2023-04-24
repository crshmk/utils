import { lensProp,  pipe, set, sum, values } from 'ramda'
import { extend } from '../extend'

describe('extend', () => {
  test('augments an object by applying a function to that object', () => {
    
    const sumValues = pipe(values, sum)
    const extendSum = extend(sumValues, 'sum') 
    
    const o = { one: 1, two: 2 }
    const expected = { one: 1, two: 2, sum: 3 }

    expect(extendSum(o)).toStrictEqual(expected)
  })
})


