/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false

*/
 var isMonotonic = function(nums) {
  let dec = true;
  let asc = true;
  
  for(let i = 1; i < nums.length; i++) {
      dec &= nums[i-1] >= nums[i];
      asc &= nums[i-1] <= nums[i];
  }
  return dec || asc;
};