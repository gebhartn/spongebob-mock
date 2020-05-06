const speeng = str => {
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

module.exports = speeng
