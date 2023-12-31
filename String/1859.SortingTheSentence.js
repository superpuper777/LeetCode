/*Easy
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 

Constraints:

2 <= s.length <= 200
s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
The number of words in s is between 1 and 9.
The words in s are separated by a single space.
s contains no leading or trailing spaces.
*/

const sortSentence = (s) => {
    const arr = s.split(' ');
    // return arr.map(el => el.slice(-1))
    const newArr =[];
    console.log(arr);
    for(let i =0; i< arr.length; i ++) {
        // console.log(arr[parseInt(arr[i].slice(-1))] = arr[i].slice(0,-1))
        console.log(parseInt(arr[i].slice(-1)));
       newArr[parseInt(arr[i].slice(-1))] = arr[i].slice(0,-1);
    }
    newArr.splice(0, 1)
    return newArr.join(' ');  //can use trim() instead of the line above;
};

console.log(sortSentence("Myself2 Me1 I4 and3"));

//any way
// const sortSentence = (s) => {
// s = s.split(" ").sort((a,b) => {
//     return a[a.length-1] - b[b.length-1]
// })

// return s.join(" ").replaceAll(/[0-9]/g, "")
// };