const binarySearch = (value, numbers) => {
  if (typeof value !== 'number') {
    throw new TypeError('value must be a number')
  }

  if (!Array.isArray(numbers)) {
    throw new TypeError('numbers must be an array')
  }

  if (numbers.length === 0) {
    throw new RangeError('numbers must have at least 1 item')
  }

  if (numbers.length === 1) {
    return numbers[0] === value ? 0 : undefined
  }

  const midIndex = Math.floor((numbers.length - 1) / 2)
  const midValue = numbers[midIndex]

  if (midValue === value) {
    return midIndex
  }

  if (midValue > value) {
    const firstHalf = numbers.slice(0, midValue)
    return binarySearch(value, firstHalf)
  }

  const secondHalf = numbers.slice(midValue)
  return binarySearch(value, secondHalf) + midValue
}

export default binarySearch
