// Another type of reference error can occur with variables instead of
// functions.  For example, the `ReferenceError` can be thrown when the
// interpreter can't find a declared variable that's being called in a program.
// Very often, this error will be the result of a typo. Try running the
// following code with "mocha spec.js"

// You should see the following:

// ReferenceError: firs is not defined

// The error is telling us that it couldn't find a variable named "firs". This
// is because the variable we declared in the argument list is named "first".
// Correct the typo and the function should pass the specs.

module.exports.hello = function(first, last) {   
  return "Hello " + firs + " " + last 
};