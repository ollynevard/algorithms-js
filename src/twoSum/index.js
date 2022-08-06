/**
 * Given an array of integers `nums` and an integer `target`, return indices of
 * the two numbers such that they add up to `target`.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const valueIndexMap = {}

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    const complement = target - value

    if (complement in valueIndexMap) {
      return [valueIndexMap[complement], i]
    }

    valueIndexMap[value] = i
  }

  throw new Error('Unable to find two numbers that add up to the target')
}

export default twoSum
