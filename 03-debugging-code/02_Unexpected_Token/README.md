When we start writing more code we will be writing `{` and `}` a lot - but it can still be easy to make mistakes. Fortunately, the interpreter's job is to let us know when we forget something. The trick with this type of error is to make sure we've opened and closed all of our curly braces.

Run `mocha spec.js` in `03-debugging-code/02_Unexpected_Token`

You should see:

```
SyntaxError: Unexpected token )
```

A missing `};` is one type of syntax error, but there are others where we might have a missing quotation or a missing closing parenthesis. Anytime we see a syntax error it's because we've either missed a keyword or had an extra keyword or character somewhere in our code.

Add the missing curly brace and semicolon on a new line after the 'return' statement to pass the test.