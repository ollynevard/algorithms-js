/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0
  let buy = 0
  let sell = 1

  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) {
      buy = sell
    } else {
      const profit = prices[sell] - prices[buy]
      maxProfit = Math.max(maxProfit, profit)
    }
    sell++
  }

  return maxProfit
}

export default maxProfit
