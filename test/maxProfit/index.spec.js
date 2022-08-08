import { describe, expect, it } from 'vitest'
import maxProfit from '../../src/maxProfit'

describe('maxProfit', () => {
  it('returns the maximum profit that can be acheived', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(5)
  })

  it('returns 0 if no profit can be achieved', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).to.equal(0)
  })

  it('returns 0 if no profit can be achieved', () => {
    expect(maxProfit([7, 2, 4, 3, 1, 8])).to.equal(7)
  })
})
