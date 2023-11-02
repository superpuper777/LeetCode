/* 2325. Decode the Message
Easy

Companies

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

    Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
    Align the substitution table with the regular English alphabet.
    Each letter in message is then substituted using the table.
    Spaces ' ' are transformed to themselves.

    For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.
*/

const createAlphabet = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  return alphabet;
};

const decodeMessage = (key, message) => {
  const alphabet = createAlphabet();
  const arr = key.split(' ').join('').split('');
  const result = [];
  for (let letter of arr) {
    if (!result.includes(letter)) {
      result.push(letter);
    }
  }
  const res = [];
  for (let i = 0; i < result.length; i++) {
    res[result[i]] = alphabet[i];
  }
  return message
    .split(' ')
    .map((w) =>
      w
        .split('')
        .map((l) => res[l])
        .join('')
    )
    .join(' ');
};

console.log(
  decodeMessage(
    'the quick brown fox jumps over the lazy dog',
    'vkbs bs t suepuv'
  )
);

console.log(
  decodeMessage(
    'eljuxhpwnyrdgtqkviszcfmabo',
    'zwx hnfx lqantp mnoeius ycgk vcnjrdb'
  )
);

//other options

// var decodeMessage = function(key, message) {
//   let result = ''
//   key = Array.from(new Set(key.split(' ').join('')))
//   const hash = new Map()
//   const alpha = 'abcdefghijklmnopqrstuvwxyz'

//   for (let i = 0; i < alpha.length; i++) {
//     hash.set(key[i], alpha[i])
//   }

//   for (let chr of message) {
//     result += hash.get(chr) || ' '
//   }

//   return result
// };

// const decodeMessage = (key, message) =>
//   (decoder => [...message].reduce((acc, curr) => acc + decoder.get(curr), ''))(
//     [...key].reduce(
//       (acc, curr) =>
//         acc.set(curr, acc.get(curr) ?? String.fromCharCode(96 + acc.size)),
//       new Map([[' ', ' ']]),
//     ),
//   );
