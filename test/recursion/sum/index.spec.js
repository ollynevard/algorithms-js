import { describe, expect, it } from 'vitest'
import sum from '../../../src/recursion/sum'

describe('sum', () => {
  describe('input validation', () => {
    it('throws an error if items is not an array', () => {
      expect(() => sum(1)).toThrowError(TypeError)
    })
  })

  describe('base case', () => {
    it('returns 0 if array is empty', () => {
      expect(sum([])).to.equal(0)
    })
  })

  describe('recursive case', () => {
    it('returns the value of the first item if the array with one item', () => {
      expect(sum([1])).to.equal(1)
    })

    it('returns the sum of all items in an array', () => {
      expect(sum([1, 2, 3, 4, 5])).to.equal(15)
    })
  })
})
