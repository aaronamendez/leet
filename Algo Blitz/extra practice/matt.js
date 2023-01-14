/*
Let's define a group of anagrams as a list of words, where each group shares the same anagram.
Anagram means you can rearrange the letters to form any other word in the group(eg: tea could be transformed into eat).
Given a list of words, split it into the smallest possible number of groups of anagrams and return this number as the answer.
   Example
For words = ["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"], the output should be 4(groups).
   The 4 groups of anagrams in this example are("tea", "eat", "ate"), ("apple"), ("vaja", "java"), and("cut", "utc").
When solving this problem, consider how you tell whether any set of words are anagrams, and how you might group them together.
For example, "tea" and "eat" share the same anagram - think about how you would figure this out programmatically.
   Ultimately, we want to return the number of groups(distinct anagrams, not distinct words) in the input array.
       Input / Output
Input: words(array of words)
Output: result(# of groups of anagrams, integer)

[execution time limit]4 seconds(js)
[input] array.string words

A list of words, each containing only lowercase English letters.
Guaranteed constraints:
1 ≤ words.length ≤ 105,
   1 ≤ words[i].length ≤ 10.

   [output] integer
The smallest possible number of groups of anagrams into which words can be split.
[JavaScript] Syntax Tips
*/

/*
 input:
  array = strings (words)
  ["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"]
     $      ^
 output:
  array(x) = x being the number of array(groups) with strings
 data structures:
  start with an array
 traversal:
  iterate over the array
   for each elem, split into an array
 diagram:
*/
