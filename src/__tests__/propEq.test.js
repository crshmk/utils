import { propEq } from '../propEq'

const les = {
  id: 42,
  make: 'Gibson',
  model: 'Les Paul'
}

const tele = {
  id: 43,
  make: 'Fender',
  model: 'Telecaster'
}

const idEq = propEq('id') 

const isGibson = propEq('make', 'Gibson')

describe('propEq', () => { 
  test('maintains classic propEq signature', () => {
    expect(propEq('id', 42, les)).toBe(true)
    expect(idEq(42, les)).toBe(true)
    expect(isGibson(les)).toBe(true)

    expect(propEq('id', 43, les)).toBe(false)
    expect(idEq(42, tele)).toBe(false)
    expect(isGibson(tele)).toBe(false)
  })  
})