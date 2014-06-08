This exercise will give you a chance to create and test a function.

We'll be working with a function that returns a valid HTML link tag, given the link's text and address.

Review the [test specification](https://github.com/Bloc/frontend-javascript-exercises/blob/master/02-reading-mocha-tests/00-a-tested-function/spec.js) to figure out what the name of the function should be and how the arguments should be ordered.

To run the test, you must first be in the right place. In your virtual terminal:

```bash(Vagrant)
$ cd 02-reading-mocha-tests/00-a-tested-function
```

Execute the test:

```bash(Vagrant)
mocha spec.js
```

You should see a failing test, and some feedback that will tell you why the test is failing.

Your challenge is to fix the function in [challenge.js](https://github.com/Bloc/frontend-javascript-exercises/blob/master/02-reading-mocha-tests/00-a-tested-function/challenge.js).

To edit the code, launch Sublime from the current directory (`00-a-tested-function`) in your **local** terminal. Make your changes, save them, then jump back into your **virtual** terminal to run the test again.

When you see a green-colored "2 passing" message, you've successfully fixed the `linkTo` method, and have completed this exercise.

Commit your changes and push your code to your repo when you're finished.
