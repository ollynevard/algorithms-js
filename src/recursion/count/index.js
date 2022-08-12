const count = items => {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array')
  }

  if (items.length === 0) {
    return 0
  }

  return 1 + count(items.slice(1))
}

export default count
