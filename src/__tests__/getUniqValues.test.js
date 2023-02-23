import { getUniqValues } from '../getUniqValues'

const items = [
  {
    id: 1,
    country: 'Vietnam'
  },
  {
    id: 2,
    country: 'Vietnam'
  },
  {
    id: 3,
    country: 'Korea'
  },
  {
    id: 4,
    country: 'Japan'
  },
  {
    id: 5,
    country: 'Korea'
  },
  {
    id: 6,
    country: 'Vietnam'
  },
]

const expected = ['Vietnam', 'Korea', 'Japan']

describe('getUniqValues', () => { 
  test('gets all values of a prop in a collection, without duplicates', () => {
    const countries = getUniqValues('country', items)
    expect(countries).toEqual(expected)
  })
 })

