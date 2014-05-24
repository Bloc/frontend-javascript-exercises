Try running `mocha spec.js` in the `03-debugging-code/03_Console_Log` directory.

You should see:

```
1) add sums the two numbers:
     AssertionError: 2 == 3
```

It would be useful if we could see the values of `a` and `b`. We can use a
function named `console.log` to print the values of each variable to our terminal window. Modify the code below so that it looks like this:

```javascript
module.exports.add = function(a,b) {
   console.log("a equals: " + a);
   console.log("b equals: " + b);
   console.log("a+b equals:" + a*b);
   return a*b;
}
```

In your terminal run `mocha spec.js`again. This time you should see:

```
a equals: 1
b equals: 2
a+b equals:2
```

We can see now that we're incorrectly doing the addition. Fix the "add" function to make the tests pass.