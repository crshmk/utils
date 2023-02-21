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
 })