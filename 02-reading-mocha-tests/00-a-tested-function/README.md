This exercise will give you a chance to create and test a function.

We'll be working with a function that returns a valid HTML link tag, given the link's text and address.

Review the [test specification](https://github.com/Bloc/frontend-javascript-exercises/blob/master/02-reading-mocha-tests/00-a-tested-function/spec.js) to figure out what the name of the function should be and how the arguments should be ordered.

To run the test, you must first be in the right place. From your terminal:

```
$ cd ~/frontend-javascript-exercises/02-reading-mocha-tests/00-a-tested-function
```

Now, to actually execute the test, type:

```
mocha spec.js
```

You should see a failing test, and some feedback that will tell you why the test is failing.

Your challenge is to fix the function in [challenge.js](https://github.com/Bloc/frontend-javascript-exercises/blob/master/02-reading-mocha-tests/00-a-tested-function/challenge.js). 

To edit the code, we'll launch a text editor (probably Sublime) from the current directory (`00-a-tested-function`). Make your changes, save them, then jump back into your terminal to run the test again and get more feedback. 

When you see a green-colored "1 passing" message, you've successfully fixed the `linkTo` method, and have completed this exercise.

Commit your changes and push your code to your repo when you're finished.
