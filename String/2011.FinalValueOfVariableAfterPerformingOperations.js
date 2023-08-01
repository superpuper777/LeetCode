/* Easy

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, 
return the final value of X after performing all the operations. 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
 

Constraints:

1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".
*/
//option 1
const finalValueAfterOperations1 = (operations) => {
  let initialValue = 0;
  if (operations.length > 1 || operations.length >= 100) {
    operations.forEach((element) => {
      element.includes("++") ? ++initialValue : --initialValue;
    });
    return initialValue;
  } else console.log('Ups, array is empty or overcrowded')
};

console.log(finalValueAfterOperations1([]));
console.log(finalValueAfterOperations1(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations1(["X++", "++X", "--X", "X--"]));
console.log(finalValueAfterOperations1(["++X", "++X", "X++"]));

//option 2 with reduce
const finalValueAfterOperations2 = (operations) => {
	return operations.reduce((final, operation) => {
		return final + (operation.includes('++') ? 1 : -1);
	}, 0);
};

console.log(finalValueAfterOperations2(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations2(["X++", "++X", "--X", "X--"]));
console.log(finalValueAfterOperations2(["++X", "++X", "X++"]));