// Simple `if` statements are often sufficient for basic branches, but sometimes
// you'll need to create complex branch scenarios. Ruby provides operators that
// add conditional logic to `if` statements. Specifically, `&&` and `||` are
// logical operators that represent "and" and "or", respectively. Consider the
// following example:
//
// if (money > 5 && hungry === true) {
//   return "give me an apple";
// }
//
// You can read this as "if I have more than 5 dollars and I'm hungry, then
// give me an apple."
//
// The "=== true" part here is actually redundant, we can just do:
//
// if (money > 5 && hungry) {
//   return "give me an apple";
// }
//
// This statement will return `"give me an apple"` only if the conditions on
// both sides of the `&&` operator are `true`. Alternatively, if you wanted to
// return `"give me an apple"` if either `money > 5` or `hungry` is `true`,
// then you could write:
//
// if(money > 5 || hungry) {
//   return "give me an apple";
// }
//
// `if` statements simply look for a `true` or `false` value. To be clear,
// ``true` and `false` values do not have to be boolean values. In Javascript,
// ``null` and `false` are all considered to be "false-y" values. Everything
// `else in Javascript is naturally true. Consider the following example:
//
// isTrue = function(a) {
//   if (a) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
//
// isTrue("hello") #=> will return "true"
// isTrue(4)       #=> will return "true"
// isTrue(true)    #=> will return "true"
// isTrue(null)    #=> will return "false"
// isTrue(false)   #=> will return "false"
//
// In this exercise, we'll be writing a `lock` function that returns true if we
// enter the right combinations. The `lock` function should take four arguments:
//
// module.exports.lock = function(a,b,c,d) {
// }
//
// Each argument represents a number on a combination lock. The function will
// return "unlocked" or "locked" based on if the combination is correct. There
// are several combinations that are "correct".
//
//   - The first number has to be a 3, 5, or 7
//   - The second number has to be a 2
//   - The third number has to be a 5 or a 6
//   - The fourth number has to be 8, 9 or 0
//
// An example of satisfying the first number condition could be:
//
// if (a === 3 || a === 5 || a === 7)

module.exports.lock = function(a,b,c,d) {

}