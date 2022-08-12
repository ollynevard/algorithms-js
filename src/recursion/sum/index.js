const sum = numbers => {
  if (!Array.isArray(numbers)) {
    throw new TypeError('numbers must be an array')
  }

  if (numbers.length === 0) {
    return 0
  }

  return numbers[0] + sum(numbers.slice(1))
}

export default sum
