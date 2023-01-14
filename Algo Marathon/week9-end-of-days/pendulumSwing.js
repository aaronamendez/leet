/**
Problem Statement 

Given a distance d, a pendulum starts at d and swings from d to negative d and back. For example, given distance 3, the pendulum goes 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3 and back again. Given a time t, return the position that the pendulum is at, starting at time 0.

In this example, 0 returns 3, 1 returns 2, 3 returns 0 and so on.

d = 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3
t = 0  1  2  3   4   5   6   7   8  9 10 11 12

f(t) == d(t)
function(3) == 0


Edge cases/questions:
- If distance is 0, return 0
- max = 3, min = -3

Function Signature
function pendulum(distance, time)


Approaches:
- Human readable, almost sentence like structure
- Still maintains the structure of the code, so feel free to use indents to represent code-blocks
- High level, doesn't go too in-depth about the mechanisms used (i.e. for-loop vs while loop --> 'iterate through')

Arithmetic Approach:
- create a full range of motion forward and backward ie([3,2,1,0,-1,-2,-3,-2,-1,0,1,2])
- we given time and modulo the length of the given array 
  - if the given time is less than the length of the range array, we can access the position within the array 
  - if the given time is more than the length of the array then we can use the remainder to access the current position 

Iterative/Recursive Approach:
- Create a time variable t and another variable p that holds the pendulum value at time t
- p is initialized at the distance value, t initialized to time value
- Decrement t at each step, until t = 0
  - If p is greater-than to the min (-distance), decrement p by 1
  - If p is less-than to the the max (distance), increment p by 1
- Return p

p == d == 3
p > -3 -> decrement

 **/

function pendulum(distance, time) {
	// - Create a time variable t and another variable p that holds the pendulum value at time t
	// - p is initialized at the distance value, t initialized to time value

	// - Decrement t at each step, until t = 0
	//   - If p is greater-than to the min (-distance), decrement p by 1
	//   - If p is less-than to the the max (distance), increment p by 1
	// - Return p
	let pendulumValue = time;
	let flag = true;
	let velocity = -1;
	while (time > 0) {
		if (pendulumValue === distance) flag = true;
		if (pendulumValue === -distance) flag = false;

		if (flag) {
			pendulumValue -= 1;
		} else {
			pendulumValue += 1;
		}
		time--;

		// if (pendulumValue === distance) velocity = -1;
		// if (pendulumValue === -distance) velocity = 1;
		// pendulumValue += velocity
	}
	return pendulumValue;
}

console.log(pendulum(3, 11) === 3);

/**
   * https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
  
  3 Levels to Algorithm Mastery
  
  1. Understanding the Base Algorithm
      - Sort problems by topic
      - Sort by difficult, easy -> hard
      - Grind out the easy questions and try to understand them as much as you can.
      - Look at the discussion/solution to get clarity if stuck.
  
  2. Identifying Algorithm in Questions
      - For every question you do in the above section, go to the left tab and look at the "Similar Questions" section.
      - Do every question within 1-level-higher of the similar questions.
      - Really look at the question, and try and find hints to affirm that the algorithm you used previously applies to this question.
  
  3. Modifying Algorithm for Specific Questions
      - As you do the above questions, solve the question utilizing your previous solution and change the pieces that need to be changed.
      - Recommend NOT looking at the solution/discussion until you feel like you're at the point of (mental/emotional) failure
  
  Study Guide:
  - Copy/Paste the Question and Implementation
  - Write a paragraph summary in human-readable format explaining the solution
  
  * Keep track of the questions that you didn't do well on
      - Come back to that question a week later
  
  A week before any of your big interviews, allocate time to do questions filtered by company/frequency
      - These will have questions you'll most likely get
      - You should be more comfortable around questions like this, that you haven't seen before
      - And you'll get more exposure around those questions
      - NOTE: I got a shit ton of those most-frequent questions in my interviews
   **/
