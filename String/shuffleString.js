/*
1528. Shuffle String
Easy

You are given a string s and an integer array indices of the same length. 
The string s will be shuffled such that the character at the ith position moves 
to indices[i] in the shuffled string.

Return the shuffled string.


Example 1:

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Example 2:

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.

 

Constraints:

    s.length == indices.length == n
    1 <= n <= 100
    s consists of only lowercase English letters.
    0 <= indices[i] < n
    All values of indices are unique.


*/

const restoreString = (s, indices) => {
  // for (let i = 0; i < indices.length; i++) {
  //   s[i] = s[indices[i]];
  // }
  // return s;
  const ans = new Array(indices.length);
  for (let i = 0; i < indices.length; i++) {
    console.log(ans);
    console.log(indices[i]);
    console.log(s[i]);
    ans[indices[i]] = s[i];
  }
  console.log(ans);
  return ans.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));

/*
[ <8 empty items> ]
4
c
[ <4 empty items>, 'c', <3 empty items> ]
5
o
[ <4 empty items>, 'c', 'o', <2 empty items> ]
6
d
[ <4 empty items>, 'c', 'o', 'd', <1 empty item> ]
7
e
[ <4 empty items>, 'c', 'o', 'd', 'e' ]
0
l
[ 'l', <3 empty items>, 'c', 'o', 'd', 'e' ]
2
e
[ 'l', <1 empty item>, 'e', <1 empty item>, 'c', 'o', 'd', 'e' ]
1
e
[ 'l', 'e', 'e', <1 empty item>, 'c', 'o', 'd', 'e' ]
3
t

[
  'l', 'e', 'e',
  't', 'c', 'o',
  'd', 'e'
]
*/
