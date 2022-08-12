import { describe, expect, it } from 'vitest'
import max from '../../../src/recursion/max'

describe('max', () => {
  describe('input validation', () => {
    it('should throw an error if numbers is not an array', () => {
      expect(() => max(1)).toThrowError(TypeError)
    })

    it('should throw an error if numbers is empty', () => {
      expect(() => max([])).toThrowError(RangeError)
    })
  })

  describe('base case', () => {
    it('returns the value of the first item in an array with one item', () => {
      expect(max([1])).toEqual(1)
    })
  })

  describe('recursive case', () => {
    it('returns the largest number in an array', () => {
      expect(max([7, 1, 5, 12, 4])).to.equal(12)
    })
  })
})
