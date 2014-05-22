// TODO: Complete the `favoriteNumber` function:
// favoriteNumber should:
//   - Take 2 arguments, the first is the favorite number and the second is a
//     guess at what the favorite number is.
//   - This function returns:
//     * return "Too high" if `guess` is greater than `fav` 
//     * return "Too low" if `guess` is less than `fav` 
//     * return "You got it!" if `guess` is equal to `fav`

module.exports.favoriteNumber = function(favoriteNumber, guess) {
  if (guess > favoriteNumber) {
    return "Too high";
  }
  else if (guess == favoriteNumber) {
    return "You got it!";
  }
  else {
    return "Too low";
  }
};

// TODO: Complete the `checkLock` function:
// checkLock should:
//   - Have 4 arguments that are all numbers.
//   - Return "correct" if the 4 numbers are a valid combination.
//   - Return "incorrect" if the 4 numbers aren't a valid combination.
//   - A combination is valid if:
//     * The first number is a 3, 5, or 7
//     * The second number is 2
//     * The third number is between 5 and 100. 5 and 100 are valid numbers.
//     * The fourth number is less than 9 or greater than 20. 9 and 20 aren't valid numbers.
//
// Ex. checkLock(5, 2, 45, 1) returns "correct".
// Ex. checkLock(1, 2, 45, 1) returns "incorrect" because the first number isn't a 3, 5, or 7.
// Ex. checkLock(5, 2, 45, 10) returns "incorrect" because the fourth number is betwen 9 and 20.

module.exports.checkLock = function(a,b,c,d) {
  if (a != 3 && a != 5 && a != 7) {
    return "incorrect";
  }
  else if (b != 2) {
    return "incorrect";
  }
  else if (c < 5 || c > 100) {
    return "incorrect";
  }
  else if (d >= 9 && d <= 20) {
    return "incorrect";
  }
  else {
    return "correct";
  }
};

// TODO: Complete the 'canIGet' function.
// canIGet should:
//   - Take two arguments:
//     * 'item' represents what the user wants to buy.
//     * 'money' represents how many dollars a user has.
//   - Return 'true' if a user can afford a given item according to the price chart below, false otherwise:
//      * 'MacBook Air' - $999
//      * 'MacBook Pro' - $1299
//      * 'Mac Pro' - $2499
//      * 'Apple Sticker' - $1
//   - Return 'false' if the 'item' is not in the above list apple products.
//
// Ex. canIGet('MacBook Air', 100) returns false
module.exports.canIGet = function(item, money) {
  if (item == 'MacBook Air' && money >= 999) {
    return true;
  }
  else if (item == 'MacBook Pro' && money >= 1299) {
    return true;
  }
  else if (item == 'Mac Pro' && money >= 2499) {
    return true;
  }
  else if (item == 'Apple Sticker' && money >= 1) {
    return true;
  }

  return false;
}
