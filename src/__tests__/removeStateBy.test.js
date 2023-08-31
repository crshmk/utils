import { removeStateBy } from '../removeStateBy'

describe('removeStateBy', () => {
  test('removes an object from an array of objects by matching any key/value', () => {
    const mockGuitarsState = [
      { id: 1, make: 'Gibson'},
      { id: 2, make: 'Gibson'},
      { id: 3, make: 'Fender'}
    ]
    const mockSetGuitarsState = fn => fn(mockGuitarsState)
    const removeGuitar = removeStateBy(mockSetGuitarsState)

    const itemToRemove = { id: 2, make: 'Gibson'}

    const expectedGuitarsState = [
      { id: 1, make: 'Gibson'},
      { id: 3, make: 'Fender'}
    ]
    expect(removeGuitar('id', itemToRemove)).toStrictEqual(expectedGuitarsState)
    expect(removeGuitar('id')(itemToRemove)).toStrictEqual(expectedGuitarsState)

    expect(removeStateBy(mockSetGuitarsState, 'id', {id: 2})).toStrictEqual(expectedGuitarsState)

    const removeGuitarById = removeStateBy(mockSetGuitarsState, 'id')
    expect(removeGuitarById(itemToRemove)).toStrictEqual(expectedGuitarsState)    
  })
  test('removes multiple matching items', () => {
    const mockGuitarsState = [
      { id: 1, make: 'Gibson'},
      { id: 2, make: 'Gibson'},
      { id: 3, make: 'Fender'}
    ]    
    const mockSetGuitarsState = fn => fn(mockGuitarsState)
    const removeGuitarBrand = removeStateBy(mockSetGuitarsState, 'make')

    const expectedGuitarsState = [{ id: 3, make: 'Fender'}]
    expect(removeGuitarBrand({make: 'Gibson'})).toStrictEqual(expectedGuitarsState)
  })
  test('takes a primitive to match a value', () => {
    const mockGuitarsState = [
      { id: 1, make: 'Gibson'},
      { id: 2, make: 'Gibson'},
      { id: 3, make: 'Fender'}
    ]    
    const mockSetGuitarsState = fn => fn(mockGuitarsState)
    const removeGuitarBrand = removeStateBy(mockSetGuitarsState, 'make')

    const expectedGuitarsState = [{ id: 3, make: 'Fender'}]
    expect(removeGuitarBrand('Gibson')).toStrictEqual(expectedGuitarsState)
  })
})
