const max = numbers => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('numbers must be an array')
  }

  if (numbers.length === 0) {
    throw new RangeError('numbers must have at least 1 item')
  }

  if (numbers.length === 1) {
    return numbers[0]
  }

  const [first, ...rest] = numbers
  const maxRest = max(rest)

  return first > maxRest ? first : maxRest
}

export default max
