import { appendOrRemove } from "../appendOrRemove"

const state = [
  'one',
  'two',
  'three'
]

describe('appendOrRemove', () => { 
  test('appends an item not currenly present', () => {
    const expected = state.concat('four')
    const newStateWithAppendedItem = appendOrRemove('four', state)
    expect(newStateWithAppendedItem).toStrictEqual(expected)
  })
  test('removes an item currenly present', () => {
    const expected = ['one', 'three']
    const newStateWithAppendedItem = appendOrRemove('two', state)
    expect(newStateWithAppendedItem).toStrictEqual(expected)
  })
 })