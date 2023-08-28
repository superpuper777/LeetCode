// Approach
// Create an empty string res to store the result.
// Loop through each character of the input string s.
// For each character, check its ASCII code using the charCodeAt method.
// If the character is an uppercase letter (ASCII code between 65 and 90 inclusive), convert it to lowercase by adding 32 to its ASCII code and use String.fromCharCode to get the corresponding lowercase character.
// Append the lowercase character to the res string.
// Repeat steps 3 to 5 for all characters in the input string s.
// Return the final res string, which contains the input string s converted to all lowercase.

const toLowerCase = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    let val = s[i];
    if (code >= 65 && code <= 90) {
      // ASCII values for 'A' to 'Z'
      val = String.fromCharCode(code + 32); // Convert to lowercase
    }
    res += val;
  }
  return res;
};
