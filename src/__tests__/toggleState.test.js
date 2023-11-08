import { toggleState } from '../toggleState'

describe('toggleState', () => {
  test('toggles a boolean state', () => {
    const mockBoolState = true
    const mockSetBoolState = fn => fn(mockBoolState)
    const toggleBool = toggleState(mockSetBoolState)

    expect(toggleBool()).toStrictEqual(false)
  })
})
