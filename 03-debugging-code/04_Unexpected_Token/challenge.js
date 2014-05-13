// When you start writing more code you will be writing `{` and `}` a lot - but
// it can still be easy to forget. Fortunately, the interpreter's job is to let
// you know when you forget something. The trick with this type of error is to
// make sure you've matched up all of your curly braces.

// Try running the following with "mocha spec.js"

// You should see:

// SyntaxError: Unexpected token )

// A missing `}` is one type of syntax error, but there are others where you
// might have a missing quotation or a missing closing paranthesis. Anytime you
// see a syntax error it's because you're either missing or have an extra
// keyword or character somewhere.

// Add the missing curly brace to pass the test.

module.exports.hello = function() {
  return "Hello World"