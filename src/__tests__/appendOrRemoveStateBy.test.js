import { appendOrRemoveStateBy } from '../appendOrRemoveStateBy'

describe('appendOrRemoveStateBy', () => {
  test('appends item not in list', () => {
    const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }]
    const setState = fn => fn(list)

    const toggleState = appendOrRemoveStateBy(setState)
    const newItem = { id: 3, color: 'red' }
    const withAddedItem = toggleState('color', newItem, list)
    expect(withAddedItem).toEqual([...list, newItem])
  })

  test('removes item', () => {
    const list = [{ id: 1, color: 'blue' }, { id: 2, color: 'green' }]
    const setState = fn => fn(list)

    const itemToToggle = { id: 3, color: 'blue' }

    const toggleColor = appendOrRemoveStateBy(setState, 'color')

    const withoutBlueItems = toggleColor(itemToToggle, list)
    expect(withoutBlueItems).toEqual([{ id: 2, color: 'green' }])
  })

  test('removes duplicate matches', () => {
    const listWithDuplicates = [
      { id: 1, color: 'blue' },
      { id: 2, color: 'blue' },
      { id: 3, color: 'green' }
    ]
    const setState = fn => fn(listWithDuplicates)


    const toRemove = listWithDuplicates[0]
    const result = appendOrRemoveStateBy(setState, 'color', toRemove)
    expect(result).toEqual([{ id: 3, color: 'green' }])
  })
})

