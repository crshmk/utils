import { updateState } from '../updateState'
import { adjustBy } from '../adjustBy'
import { append } from 'ramda'

describe('updateState', () => {
  test('creates a state setter from a transform function and the setter returned from useState', () => {
    const mockIntState = [1, 2, 3]
    const mockSetIntState = fn => fn(mockIntState)
    const appendState = updateState(append, mockSetIntState)

    const expectedIntState = [1, 2, 3, 4]
    expect(appendState(4)).toStrictEqual(expectedIntState)


    const mockValState = [{id: 1, val: 1}, {id: 2, val: 2}]
    const mockSetValState = fn => fn(mockValState)
		
    const adjustById = adjustBy('id')
    const updateStateById = updateState(adjustById, mockSetValState)
	
    const expectedValState =  [{id: 1, val: 42}, {id: 2, val: 2}]
    expect(updateStateById({id: 1, val: 42})).toStrictEqual(expectedValState)
  })
})
