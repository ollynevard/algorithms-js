import { describe, expect, it } from 'vitest'
import binarySearch from '../../../src/recursion/binarySearch'

describe('binarySearch', () => {
  describe('input validation', () => {
    it('throws an error if value is not a number', () => {
      expect(() => binarySearch('1', [1, 2, 3])).toThrowError(TypeError)
    })

    it('throws an error if numbers is not an array', () => {
      expect(() => binarySearch(1, 1)).toThrowError(TypeError)
    })

    it('throws an error if array is empty', () => {
      expect(() => binarySearch(1, [])).toThrowError(RangeError)
    })
  })

  describe('base case', () => {
    it('returns 0 if value is in an array with one item', () => {
      expect(binarySearch(1, [1])).toEqual(0)
    })

    it('returns undefined if value is not in an array with one item', () => {
      expect(binarySearch(2, [1])).to.equal(undefined)
    })
  })

  describe('recursive case', () => {
    it('returns the index of the item in an array with an odd number of items', () => {
      expect(binarySearch(2, [1, 2, 3])).to.equal(1)
    })

    it('returns the index of the item in an array with an even number of items', () => {
      expect(binarySearch(2, [1, 2, 3, 4])).to.equal(1)
    })

    it('returns the index of the first item in the array ', () => {
      expect(binarySearch(1, [1, 2, 3])).to.equal(0)
    })

    it('returns the index of the last item in the array ', () => {
      expect(binarySearch(3, [1, 2, 3])).to.equal(2)
    })
  })
})
