import { prependState } from '../prependState'

describe('prependState', () => {
  test('prepends an item to state', () => {
    const mockIntState = [1, 2, 3]
    const mockSetIntState = fn => fn(mockIntState)
    const prependInt = prependState(mockSetIntState)

    const expectedIntState = [4, 1, 2, 3]
    expect(prependInt(4)).toStrictEqual(expectedIntState)
  })
})
