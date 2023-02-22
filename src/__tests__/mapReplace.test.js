import { mapReplace } from '../mapReplace'

const mapInts = {
  one: '1',
  two: '2',
  three: '3'
}
  
const replaceInts = mapReplace(mapInts)

describe('mapReplace', () => { 
  test('maps replacement options over a string', () => {
    expect(replaceInts('oneandtwoandthree')).toBe('1and2and3')
  })  
})