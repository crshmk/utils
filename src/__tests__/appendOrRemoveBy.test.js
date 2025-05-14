import { appendOrRemoveBy } from '../appendOrRemoveBy'

describe('appendOrRemoveBy', () => {
  const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }]

  test('appends item not in list', () => {
    const newItem = { id: 3, color: 'red' }
    const result = appendOrRemoveBy(newItem, list)
    expect(result).toEqual([...list, newItem])
    const curried = appendOrRemoveBy(newItem)(list)
    expect(curried).toEqual([...list, newItem])
  })

  test('removes item in list', () => {
    const existingItem = { id: 1, color: 'blue' }
    const result = appendOrRemoveBy(existingItem, list)
    expect(result).toEqual([{ id: 2, color: 'green' }])
  })

  test('adds item to empty list', () => {
    const newItem = { id: 3, color: 'red' }
    const result = appendOrRemoveBy(newItem, [])
    expect(result).toEqual([newItem])
  })

  test('removes duplicate matches', () => {
    const listWithDuplicates = [
      { id: 1, color: 'blue' },
      { id: 2, color: 'blue' },
      { id: 3, color: 'green' }
    ]
    const toRemove = { color: 'blue' }
    const result = appendOrRemoveBy(toRemove, listWithDuplicates)
    expect(result).toEqual([{ id: 3, color: 'green' }])
  })
})
