import { mergeState } from '../mergeState'

describe('mergeState', () => {
  test('merges updates into a state object', () => {
    const mockUserState = { name: 'Jo', age: 42 }
    const mockSetUserState = fn => fn(mockUserState)
    const updateUser = mergeState(mockSetUserState)

    const updates = { age: 43, points: 1 }
    const expectedUserState = { name: 'Jo', age: 43, points: 1 }
    expect(updateUser(updates)).toStrictEqual(expectedUserState)
  })
})
