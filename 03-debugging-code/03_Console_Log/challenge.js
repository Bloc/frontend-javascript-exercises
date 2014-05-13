// Try running the following code with "mocha spec.js"

// You should see:

//  1) add sums the two numbers:
//     AssertionError: 2 == 3

// It would be useful if we could see what the values of a and b. We can use a
// function called "console.log" to print the values of each variable to our
// terminal window, like this:

// module.exports.add = function(a,b) {
//   console.log("a equals: " + a);
//   console.log("b equals: " + b);
//   console.log("a+b equals:" + a*b);
//
//   return a*b;
// }

// In your terminal window, you should see:

// a equals: 1
// b equals: 2
// a+b equals:2

// We can see now that we're incorrectly doing the addition. Fix the "add"
// function to make the specs pass.

module.exports.add = function(a,b) {
  return a*b;
}
