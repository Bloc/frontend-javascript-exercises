- Complete the **equalStrings** function. This function should:
    - take two arguments, both strings
    - return true if the strings are the same
    - return false if the strings are different
    
    For example:
    
    ```javascript
    equalStrings('fun', 'fun') // should return true
    equalStrings('bloc', 'boring') // should return false
    ```


- Complete the **notEqual** function. This function should:
    - take two arguments of any type
    - return true unless the two arguments are the same type and are equal to each other

    For example:
    
    ```javascript
    notEqual(1, '1') // should return true
    notEqual(1, 1) // should return false
    ```

- Complete the **inBetween** function. This function should:
    - take three arguments (all integers), lower, middle, upper
    - return a boolean that tells us whether middle is in between upper and lower

    For example:
    
    ```javascript
    inBetween(1,3,5) // should return true
    inBetween(3,1,5) // should return false
    ```

- Complete the **outsideRanges** function. This function should:
    - take one argument, 'number', which is a number
    - return true when the number is:
        - not between 10 and 20, it also can't be 10 or 20 
        - not between 42 and 75, it also can't be 75. 42 is allowed 
        - not between 1 and 6. 1 and 6 are allowed

    For example:
    
    ```javascript
    outsideRanges(42) // should return true
    outsideRanges(75) // should return false
    ```

- Complete the **nameAndPrice** function. This function should:
    - take two arguments: 'name' which is the name of a newspaper, and 'price' which is a number
    - return true if name is 'NYTimes' or 'LATimes', and price is greater than or equal to 1

    For example:
    
    ```javascript
    nameAndPrice('NYTimes', 1) // returns true
    nameAndPrice('LATimes', 0) // returns false
    nameAndPrice('NYTimes', 0) // returns false
    ```
