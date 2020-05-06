const speeng = require('../index')

describe('Test speeng', () => {
  it('Should randomize the casing', () => {
    const hello = 'Hello World'
    expect(speeng(hello)).not.toEqual(hello)
  })

  it('Should error on empty string', () => {
    const str = ''
    expect(speeng(str)).toEqual('Not long enough')
  })

  it('Should error on non-string types', () => {
    const arr = [1, 2, 3]
    const obj = { hello: 'world' }
    const fn = () => 'test'

    expect(speeng(arr)).toBe('Not a string')
    expect(speeng(obj)).toBe('Not a string')
    expect(speeng(fn)).toBe('Not a string')
  })
})
