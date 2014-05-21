

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


// TODO: Complete the 'findFirstMatch' function.
// findFirst shoud:
//   - Take two strings as arguments. The first string is the one to search, the second is the one to search for.
//   - Return the position (a.k.a. the index) of the first match of string we're searching for.
// Ex. findFirst("Roses are red", "re") returns 7 (the position of the "re" in "are").
module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};


// TODO: Complete the 'findLastMatch' function.
// findFirst shoud:
//   - Take two strings as arguments. The first string is the one to search, the second is the one to search for.
//   - Return the position (a.k.a. the index) of the last match of string we're searching for.
// Ex. findFirst("Roses are red", "re") returns 10 (the position of the "re" in "red").
module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

// TODO: Complete the 'substringBetweenMatches' function.
// findFirst shoud:
//   - Take two strings as arguments. The first string is the one to search, the second is the one to search for.
//   - Return the substring between the first match and the second match.
//   - Notinclude the first match or the last match in the returned substring.
// Ex. findFirst("Roses are red, apples are really red.", "red") returns ", apples are really ".
module.exports.substringBetweenMatches = function(text, searchString) {
  firstMatchPosition = text.indexOf(searchString) + searchString.length;
  lastMatchPosition = text.lastIndexOf(searchString);
  return text.substring(firstMatchPosition, lastMatchPosition);
};

