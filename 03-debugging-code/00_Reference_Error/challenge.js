// This is the easiest error to diagnose, but it's still worth practicing
// because it's important to see what the errors look like in the context of
// Mocha.

// Don't type anything - just run "mocha spec.js". You should see something that looks
// like:

// ReferenceError: hello is not defined

// This means that Mocha tried to run invoke the `hello` function but it couldn't
// find the function definition (because we haven't defined it yet).

// Now that you know what the error is caused by, uncomment out the below code to define
// a function that will pass the tests. Running "mocha spec.js" in this directory will show
// that you have 2 passing test now.
//
// module.exports.hello = function(msg) {
//   return "Hello " + msg;
// };
