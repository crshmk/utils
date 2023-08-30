import { appendState } from '../appendState'

describe('appendState', () => {
  test('appends an item to state', () => {
    const mockIntState = [1, 2, 3]
    const mockSetIntState = fn => fn(mockIntState)
    const appendInt = appendState(mockSetIntState)

    const expectedIntState = [1, 2, 3, 4]
    expect(appendInt(4)).toStrictEqual(expectedIntState)
  })
})
