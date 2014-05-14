Here's an example of a function that doesn't take an argument:

```javascript
var hello = function() {
  return "hello!";
}

hello();
```

and here's an example of a function that does take an argument:

```javascript
var hello = function(name) {
  return "hello " + name;
}

hello("Bob"); // "hello Bob"
```

For this exercise, we're going to write a function called multiply that takes two arguments, multiplies them, and returns the result. You may want to look back at how we define an argument that accepts two functions, and then make sure you're returning the correct result.