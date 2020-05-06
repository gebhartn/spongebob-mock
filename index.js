const speeng = str => {
  if (typeof str !== 'string') return 'Not a string'

  if (!str.length) return 'Not long enough'

  const length = str.length
  const random = Array.from({ length }, () => Math.floor(Math.random() * 10))

  const res = random.map((x, i) => caseMaker(str[i].toLowerCase(), x))

  return res.join('')
}

const caseMaker = (c, v) => (v >= 5 ? c.toUpperCase() : c)

module.exports = speeng
