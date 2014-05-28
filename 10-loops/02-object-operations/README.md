- Complete the `copy` function. This function should:
    - take one object as an argument
    - create a new object and copy all of the properties of the input into the new object
    - return the new object

    For example:
    
    ```javascript
    copy({name: "Rob"}) // returns a new object {name: "Rob"}
    ```

- Complete the `extend` function. This function should:
    - take two dictionaries as arguments (`dest` and `src`) and copy all of the properties (e.g. key, value pairs) of `src` into `dest`
    - return a modified `dest`

    For example:
    
    ```javascript
    extend({name: "Rob"}, {age: 101}) // should modify and return `dest` with content of {name: "Rob", age: 101}
    
    extend({name: "Rob"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}
    ```

- Complete the `hasElems` function. This function should:
    - take two arguments. The first is an object and the second is an array of elements
    - return `true` when all of the elements in the array are keys in the object, false otherwise