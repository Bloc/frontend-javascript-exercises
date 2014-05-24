We'll be working on five functions for this execise.

- **Complete the formLetter function:** This function should:
    - Take three strings as arguments: the first name of the recipient, the sender's signature name, and the message of the letter
    - combine the three into a single string with additional greetings and closings
    - insert additional new lines between the greeting, message, and signature
    - 
For example:

```javascript
Ex.formLetter("James", "Richard", "Things are well.");
```

...should return:

```javascript
"Hello James,\n\nThings are well.\n\nSincerely,\nRichard"
```

- **Complete the sliceItAndCombineIt function:** This function should:
    - take a string and four indices (numbers)
    - return a new string which is the concatenation of two substrings marked by the first and second index of each pair of indices. For example:
    
```javascript
sliceItAndCombineIt("This is a Test", 0, 4, 5, 7) // returns "Thisis"
sliceItAndCombineIt("This is a Test", 0, 4, 1, 2) // returns "Thish".
```

- Complete the **findFirstMatch function:** This function should:
    - Take two strings as arguments. The first string is the one to search, the second is the one to search for.
    - Return the position (i.e. index) of the first match of string being searching for

    For example:
    
    ```javascript
    findFirst("Roses are red", "re") // returns 7 (the position of the "re" in "are")
    ```

- Complete the **findLastMatch function:** This function should:
    - Take two strings as arguments. The first string is the one to search, the second is the one to search for
    - Return the position (a.k.a. the index) of the last match of string we're searching for
    For example:
    
    ```javascript
    findFirst("Roses are red", "re") returns 10 (the position of the "re" in "red")
    ``` 

- Complete the **substringBetweenMatches function:** This function should:
    - Take two strings as arguments. The first string is the one to search, the second is the one to search for
    - Return the substring between the first match and the second match
    - Not include the first match or the last match in the returned substring
    For example:
    
    ```javascript
    findFirst("Roses are red, apples are really red.", "red") // returns ", apples are really "
    ```