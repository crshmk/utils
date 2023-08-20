import React from 'react'

import { nl2br } from '../nl2br'

const innerText = `
  first line 
  second line

  third line 
`

const expected = [
  <br />, 
  "first line", 
  <br />, 
  "second line", 
  <br />, 
  <br />, 
  "third line", 
  <br />
]

describe('nl2br', () => { 
  test('replaces newlines with <br /> tag', () => {
    expect(nl2br(innerText)).toStrictEqual(expected)
  })
 })
