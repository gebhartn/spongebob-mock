#!/usr/bin/env node

const clipboardy = require('clipboardy')
const argv = process.argv.slice(2)

const copy = (str) => {
  clipboardy.write(str)
}

const speeng = (str) => {
  if (typeof str !== 'string') {
    throw new Error('NoT A StRiNG!!')
  }

  if (!str.length) {
    throw new Error('ThAt Is NoT LoNg EnOuGH!!')
  }

  const length = str.length
  const random = Array.from({ length }, () => Math.floor(Math.random() * 10))

  const res = random.map((x, i) => caseMaker(str[i].toLowerCase(), x))

  return res.join('')
}

const caseMaker = (c, v) => (v >= 5 ? c.toUpperCase() : c)


// handles -c flag at beginning or end of string
if ((argv[0] === '-c')) {
  argv.shift()
  const res = speeng(argv.join(' '))
  copy(res)
  console.log(res)
} else if ((argv[argv.length - 1] === '-c')) {
  argv.pop()
  const res = speeng(argv.join(' '))
  copy(res)
  console.log(res)
} else {
  if (argv.length) console.log(speeng(argv.join(' ')))
}

module.exports = speeng
