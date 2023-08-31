import { prependState } from '../prependState'

describe('prependState', () => {
  test('prepends an item to state', () => {
    const mockIntsState = [1, 2, 3]
    const mockSetIntsState = fn => fn(mockIntsState)
    const prependInts = prependState(mockSetIntsState)

    const expectedIntsState = [4, 1, 2, 3]
    expect(prependInts(4)).toStrictEqual(expectedIntsState)
  })
  test('prepends an array of items onto state', () => {
    const mockIntsState = [1, 2]
    const mockSetIntsState = fn => fn(mockIntsState)
    const prependInts = prependState(mockSetIntsState)

    const expectedIntsState = [3, 4, 1, 2]
    expect(prependInts([3, 4])).toStrictEqual(expectedIntsState)
  })
})
