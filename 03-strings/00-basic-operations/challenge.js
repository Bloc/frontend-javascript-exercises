


// TODO: Complete the 'formLetter' function.
// formLetter should:
//   - Take three strings as arguments: the first name of the recipient, the
//   sender's signature name, and the message of the letter.
//   - The function should combine the three into a single string with
//   additional greetings and closing.
//   - You should insert additional new lines between the greeting, message, and signature.
//
// Ex.formLetter("James", "Richard", "Things are well.") should return:
//   "Hello James,\n\nThings are well.\n\nSincerely,\nRichard"
//
module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};


// TODO: Complete the 'sliceItAndCombineIt' function.
// sliceItAndCombineIt should:
//  - Take a string and 4 indices (numbers).
//  - Return a new string which is the concatenation of two substrings marked by the first and second index of each pair of indices.
// Ex. sliceItAndCombineIt("This is a Test", 0, 4, 5, 7) returns "Thisis".
// Ex. sliceItAndCombineIt("This is a Test", 0, 4, 1, 2) returns "Thish".
module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};
