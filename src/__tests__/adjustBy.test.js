import { adjustBy } from '../adjustBy'

const list = [
  { id: 1, val: 1 },
  { id: 2, val: 2 },
  { id: 3, val: 3 },
  { id: 4, val: 4 }
]

const expected = [
  { id: 1, val: 1 },
  { id: 2, val: 42 },
  { id: 3, val: 3 },
  { id: 4, val: 4 }
]

const update = { id: 2, val: 42 }

const adjustById = adjustBy('id')

describe('adjustBy', () => { 
  test('updates a collection by matching a prop on the update', () => {
    expect(adjustById(update, list)).toStrictEqual(expected)
  })
  test('disregards non matches', () => {
    expect(adjustById({}, list)).toStrictEqual(list)
    expect(adjustById(123, list)).toStrictEqual(list)
  })
  test('merges passed updates and preserves other props', () => {
    const state = [
      {
        id: 42, 
        color: 'green',
        isOpen: true,
        isProtected: true
      }
    ]

    const update = { 
      id: 42, 
      isOpen: false,
      isProtected: false
    }

    const expected = [
      {
        id: 42, 
        color: 'green',
        isOpen: false,
        isProtected: false
      }
    ]

    expect(adjustById(update, state)).toStrictEqual(expected)
  })
  test('updates multiple items', () => {
    const list = [
      { id: 1, color: 'red', val: 1 },
      { id: 2, color: 'red', val: 1 },
      { id: 3, color: 'blue', val: 1 },
      { id: 4, color: 'blue', val: 1 }
    ]
    
    const expected = [
      { id: 1, color: 'red', val: 2 },
      { id: 2, color: 'red', val: 2 },
      { id: 3, color: 'blue', val: 1 },
      { id: 4, color: 'blue', val: 1 }
    ]
    
    const update = { color: 'red', val: 2 }
    
    const adjustByColor = adjustBy('color')

    expect(adjustByColor(update, list)).toStrictEqual(expected)
  })
 })