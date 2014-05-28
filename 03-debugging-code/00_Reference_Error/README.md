The "reference error" is one of the easiest errors to diagnose. That being said, it's worth practicing because it's important to see what the errors look like in the context of Mocha.

Don't type anything - just run `mocha spec.js` from your terminal. You should see something that looks like:

```
ReferenceError: hello is not defined
```

Mocha tried to run invoke the `hello` function but it couldn't find the function definition, because we haven't defined it yet.

Now that you know what the error is caused by, uncomment out the code in `challenge.js` and write a function that will pass the tests. Running `mocha spec.js `in the `03-debugging-code/00_Reference_Error` directory should show that you have two passing tests now.