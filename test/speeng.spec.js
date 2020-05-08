const speeng = require('../index')
const clipboardy = require('clipboardy')

describe('Test speeng', () => {
  it('Should randomize the casing', () => {
    const hello = 'Hello World'
    expect(speeng(hello)).not.toEqual(hello)
  })

  it('Should error on empty string', () => {
    const str = ''
    expect(() => {
      speeng(str)
    }).toThrow('ThAt Is NoT LoNg EnOuGH!!')
  })

  it('Should error on non-string types', () => {
    const arr = [1, 2, 3]
    const obj = { hello: 'world' }
    const fn = () => 'test'

    expect(() => speeng(arr)).toThrow('NoT A StRiNG!!')
    expect(() => speeng(obj)).toThrow('NoT A StRiNG!!')
    expect(() => speeng(fn)).toThrow('NoT A StRiNG!!')
  })
})

describe('Test clipboardy', () => {
  it('Should copy the output to clipboard', () => {
    const str = 'Hello World'
    const len = str.length
    speeng.copy(speeng(str))

    const clipboard = clipboardy.readSync()

    expect(clipboard).toHaveLength(len)
  })

  it('Should not be the same as the input', () => {
    const str = 'Hello World'
    speeng.copy(speeng(str))

    const clipboard = clipboardy.readSync()

    expect(clipboard).not.toBe(str)
  })
})
