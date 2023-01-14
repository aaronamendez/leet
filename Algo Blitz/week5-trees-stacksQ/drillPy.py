"""
Most frequent element in array

Least frequent element in array

Number of elements with exactly 2 occurrences ([1, 2, 1, 3, 2, 4] returns 2)

Given an array with pairs of the same number and one number with 3 duplicates, find the duplicate.

Now find the duplicate using a set instead of a hashmap/dictionary.
"""

#[1,2,3,1,2]

#dict[1] = 2
#dict[2] = 2
#dict[3] = 1

from collections import defaultdict
def leastFrequentElement(array):

    count = defaultdict(int)
    out = 0

    for i in array:
        count[i] += 1
        if count[i] == 2:
            out +=1
        # if count[i] == 3: 
            # decrement

    return out

# print(leastFrequentElement([1,1,2,2,2])) # 1
# print(leastFrequentElement([1])) # 1
# print(leastFrequentElement([1, 2, 3, 1,])) # 2
# print(leastFrequentElement([])) # None
# print(leastFrequentElement([1, 2, 0, 4, 10])) # 1

# set called seen
# loop through array 
    # add variable to seen if it's not there
    # else remove
# return the first value in seen

#constraint: o(1) space

#idea 1 o(n^2) time and o(1) space
# nested iteration
# use inner iteration to count current item

# idea 2 o(nlogn) time and o(1) space
# sort the array first 
# check adjacent values

def find_duplicate_set(array):
    seen = set()

    for num in array:
        if num not in seen:
            seen.add(num)
        else:
            seen.remove(num)

    return list(seen)[0]

print(find_duplicate_set([1,1,1,2,2]))
