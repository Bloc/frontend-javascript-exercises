- Complete the `getKeys` function. This function should:
    - return an array of each of the keys in the object

    For example:
    
    ```javascript
    getKeys({name: "Rob", age: 101}) // returns ["name", "age"]
    ```

- Complete the `getValues` function. This function should:
    - return an array of each of the values in the object

    For example:
    
    ```javascript
    getValues({name: "Rob", age: 101}) // returns ["Rob", 101]
    ```

- Complete the `objectToArray` function. This function should:
    - convert the object passed in to an array of strings
    - each string should be in the format of "[key] is [value]" for each key/value pair in the object
    - if an empty object is passed in, an empty array should be returned

    For example:
    ```javascript
    objectToArray({name: "Rob"}) // should return ["name is Rob"]
    ```