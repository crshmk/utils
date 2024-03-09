import { pruneOr } from '../pruneOr'

describe('pruneOr', () => {
  test('sets nested default values on a pruned object when a default prop is not on the object to prune', () => {
    const defaults = {
      one: 'default',
      two: {
        two1: 'default'
      },
      three: {
        three1: 'default',
        three2: 'default'
      }
    }

    const toPrune = {
      two: {
        two2: 'incoming' 
      },
      three: {
        three1: 'incoming'
      }
    }

    const paths = [
      ['one'],
      ['two', 'two1'],
      ['two', 'two2'],
      ['three', 'three1'],
      ['three', 'three2']
    ]
    const expected = {
      one: 'default',
      two: {
        two1: 'default',
        two2: 'incoming'
      },
      three: {
        three1: 'incoming',
        three2: 'default'
      }
    }
    const pruneResponse = pruneOr(defaults, paths)
    expect(pruneResponse(toPrune)).toStrictEqual(expected)
  })
  test('disregards default and incoming props not on the desired output shape', () => {
    const defaults = {
      one: 'default',
      two: {
        two1: 'default'
      },
      three: {
        three1: 'default',
        three2: 'default'
      }
    }

    const toPrune = {
      two: {
        two2: 'incoming' 
      },
      three: {
        three1: 'incoming'
      },
      four: 'incoming',
      five: {}
    }

    const paths = [
      ['two', 'two1'],
      ['three', 'three1']
    ]
    const expected = {
      two: {
        two1: 'default',
      },
      three: {
        three1: 'incoming'
      }
    }
    const pruneResponse = pruneOr(defaults, paths)
    expect(pruneResponse(toPrune)).toStrictEqual(expected)
  })
  test('sets values not provided on default or incoming objects to null', () => {
    const defaults = {
      one: 'default'
    }

    const toPrune = {
      two: 'incoming'
    }

    const paths = [
      ['one'],
      ['two'],
      ['two', 'two1'],
      ['three', 'three1']
    ]

    const expected = {
      one: 'default',
      two: {
        two1: null
      },
      three: {
        three1: null
      }
    }

    const pruneResponse = pruneOr(defaults, paths)
    expect(pruneResponse(toPrune)).toStrictEqual(expected)
  })
  test('handles deeply nested objects', () => {
    const defaults = {
      one: {
        two: {
          three: {
            four: 'default'
          }
        }
      },
      unused: {
        unused: 'default'
      }
    }
    
    const toPrune = {
      five: {
        six: {
          seven: 'incoming'
        }
      },
      unused: {
        unused: 'incoming'
      }
    }

    const paths = [
      ['one', 'two', 'three', 'four'],
      ['five', 'six', 'seven']
    ]

    const expected = {
      one: {
        two: {
          three: {
            four: 'default'
          }
        }
      },
      five: {
        six: {
          seven: 'incoming'
        }
      } 
    }
    const pruneResponse = pruneOr(defaults, paths)
    expect(pruneResponse(toPrune)).toStrictEqual(expected)
  })
})