/**
Prompt
 We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

 Function Signature
 function earliestFellows(input)

 Expected Runtime
 O(n)

 Examples
 {"oliver": 3, "pinky": 1, "pixel": 2, "tobey": 1} => ["pinky", "tobey"]

 Expected Questions
 If you were presented this question in an interview, these are some questions(s) you might want to ask:
 Q: Does the order of the elements in the output array matter?
 A: No, it can be in any order.

 * store names and corresponding timestamp in a map
 * create array to output names
 * create timestamp variable to keep track of timestamps
*/
