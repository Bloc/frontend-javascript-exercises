// This is the easiest error to diagnose, but it's still worth practicing
// because it's important to see what the errors look like in the context of
// Mocha.

// Don't type anything - just run "mocha spec.js". You should see something that looks
// like:

// ReferenceError: hello is not defined

// This means that Mocha tried to run invoke the `hello` function but it couldn't
// find the function definition (because we haven't defined it yet).

// Now that you've seen the error, read the test and write a method to make it
// pass