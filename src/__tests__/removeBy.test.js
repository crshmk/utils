import { removeBy } from '../removeBy'

const state = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'blue' },
  { id: 4, color: 'blue' }
]

const removeById = removeBy('id')

describe('removeBy', () => {
  test('removes a collection item by key/value', () => {
    const itemToRemove = state[1]
    const expected = [
      { id: 1, color: 'red' },
      { id: 3, color: 'blue' },
      { id: 4, color: 'blue' }
    ]
    expect(removeById(itemToRemove, state)).toStrictEqual(expected)
  })
  test('removes all collection items by value', () => {
    const removeByColor = removeBy('color')
    const expected = [
      { id: 1, color: 'red' },
      { id: 2, color: 'green' }
    ]
    expect(removeByColor('blue', state)).toStrictEqual(expected)
  })
  test('disregards an unmatched item', () => {
    const unmatchedItem = { id: 5, color: 'yellow' }
    expect(removeById(unmatchedItem, state)).toStrictEqual(state)
  })
})