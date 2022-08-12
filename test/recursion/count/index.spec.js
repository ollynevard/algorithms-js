import { describe, expect, it } from 'vitest'
import count from '../../../src/recursion/count'

describe('count', () => {
  describe('input validation', () => {
    it('throws an error if items is not an array', () => {
      expect(() => count(1)).toThrowError(TypeError)
    })
  })

  describe('base case', () => {
    it('returns 0 if array is empty', () => {
      expect(count([])).to.equal(0)
    })
  })

  describe('recursive case', () => {
    it('returns 1 if array contains one item', () => {
      expect(count([1])).to.equal(1)
    })

    it('returns the number of items in an array', () => {
      expect(count([1, 2, 3, 4, 5])).to.equal(5)
    })
  })
})
