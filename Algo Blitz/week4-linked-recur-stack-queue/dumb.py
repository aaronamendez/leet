"""
Given an array of 0s and 1s, what is the minimum number of moves needed to group all 0s on one side and 1s on the other side. A "move" is a swap between any adjacent positions.
Examples
[0, 1] => 0, no swaps are needed since they are already grouped.
[0, 1, 0] => 1, swap 1 with either 0 to group them.
[1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.
Function Signature
function minSwaps(input: Array): number
      
[1, 0, 1, 1, 0] -> [1, 1, 0, 1, 0] -> [1, 1, 1, 0, 0] :  2 swaps
    p        n
[0, 1, 1, 1, 0] -> [0, 0, 1, 1, 1]

[0, 0, 1, |  0, 1, 1, 1] -> [0, 0, 0, 1, 1, 1, 1]: 1 swap

ans = min(0s on left; 1s on right, 0s on right)

    can we solve 0s on left -> if we can, then we can def solve 1s on left

    figure out how to solve 0s on left
 p  c
                  p  c
[1, 0, 1]  -> [0, 1, 1]
    p     c
[0, 1, 1, 0]

 p        i     
[1, 1, 1, 0, 1]

init prev = 0
numSwaps = 0
iterate from 1 to length of nums - 1
    curr = nums[i]
    if curr is not eq to nums[prev]:
        #swap (nums[i], nums[prev])
        numSwaps += i - prev
        prev += 1
"""

from typing import *


def swap(nums: List[int], target: int) -> int:
    numSwaps = 0
    prev = 0
    for i in range(1, len(nums)):                      #          p     c
        if nums[i] != nums[prev] and nums[i] == target:  # nums=[0, 0, 1, 0, 1] target = 0
            numSwaps += i - prev
            prev += 1
    return numSwaps

[0, 1, 1, 1, 1, 1, 0]
       p                             