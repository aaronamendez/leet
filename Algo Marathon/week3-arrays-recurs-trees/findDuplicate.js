function findDuplicate(nums) {
  let tortoise = nums[0] // 2
  let hare = nums[0] // 4
  while (true) {
    tortoise = nums[tortoise] // 2 => 3
    hare = nums[nums[hare]] // 4 => 2 => 3
    if (tortoise === hare) break; // 3 === 3
  }
  
  let ptr1 = nums[0] // 3 
  let ptr2 = tortoise // 3 
  while (ptr1 !== ptr2) {I 
    ptr1 = nums[ptr1] 
    ptr2 = nums[ptr2] 
  }
  return ptr1 // 3
}

console.log(findDuplicate([3, 1, 3, 4, 2]))