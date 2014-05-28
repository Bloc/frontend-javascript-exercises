- Complete the `favoriteNumber` function. This function should:
    - Take two arguments, the first is the favorite number and the second is a guess at what the favorite number is
    - This function should return:
        - "Too high" if `guess` is greater than `fav` 
        - "Too low" if `guess` is less than `fav` 
        - "You got it!" if `guess` is equal to `fav`

- Complete the `checkLock` function. This function should:
    - have four arguments that are all numbers
    - return "correct" if the four numbers are a valid combination
    - return "incorrect" if the 4 numbers aren't a valid combination
    - a combination is valid if:
        - the first number is a 3, 5, or 7
        - the second number is 2
        - the third number is between 5 and 100. 5 and 100 are both valid numbers
        - the fourth number is less than 9 or greater than 20. 9 and 20 both invalid numbers
    
    For example:
    
    ```javascript
    checkLock(5, 2, 45, 1) // returns "correct"
    checkLock(1, 2, 45, 1) // returns "incorrect" because the first number isn't a 3, 5, or 7
    checkLock(5, 2, 45, 10) // returns "incorrect" because the fourth number is between 9 and 20
    ```

- Complete the `canIGet` function. This function should:
    - take two arguments:
        - 'item' should represent what the user wants to buy
        - 'money' should represent how many dollars a user has
        - return 'true' if a user can afford a given item according to the price chart below, false otherwise:
            - 'MacBook Air' - $999
            - 'MacBook Pro' - $1299
            - 'Mac Pro' - $2499
            - 'Apple Sticker' - $1
        - return 'false' if the 'item' is not in the above list apple products

    For example:
    
    ```javascript
    canIGet('MacBook Air', 100) // returns false
    ```

