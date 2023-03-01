import { renameKeys } from '../renameKeys'

const response = {
  one: { two: 2 },
  two: 2,
  three: 3,
  four: 4
}

const replacements = { 
  one: 'won', 
  two: 'too', 
  three: 'tree' 
}

const expected = { 
  won: { too: 2 }, 
  too: 2,
  tree: 3,
  four: 4
}

const transformResponseKeys = renameKeys(replacements)

describe('renameKeys', () => { 
  test('renames keys in an object according to a map, preserving non-targeted props', () => {
    expect(transformResponseKeys(response)).toMatchObject(expected)
  })
 })