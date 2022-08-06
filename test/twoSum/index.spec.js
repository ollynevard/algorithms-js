import { describe, expect, it } from 'vitest'
import twoSum from '../../src/twoSum'

describe('twoSum', () => {
  it('works with an array of 2 numbers', () => {
    expect(twoSum([1, 2], 3)).to.include.members([0, 1])
  })

  it('works with an array of more than 2 numbers', () => {
    expect(twoSum([6, 15, 3, 9], 18)).to.include.members([1, 2])
  })

  it('works with 0', () => {
    expect(twoSum([0, 2, 1], 1)).to.include.members([0, 2])
  })

  it('works with positive and negative numbers', () => {
    expect(twoSum([-1, 1], 0)).to.include.members([0, 1])
  })

  it('works with large positive numbers', () => {
    expect(twoSum([9999999999, 1], 10000000000)).to.include.members([0, 1])
  })

  it('works with large negative numbers', () => {
    expect(twoSum([-9999999999, -1], -10000000000)).to.include.members([0, 1])
  })

  it('may not use the same element twice', () => {
    expect(() => twoSum([3, 1], 6)).to.throw(Error)
  })
})
