class User {
    constructor(name, age) {
        // set up properties.
        this.username = name;
        this.age = age;
    }
}

const userOne = new User('jorgef', 23);
console.log(userOne);

// the 'new' keyword workflow:
/**
 * the 'new' keyword workflow
 * 1 - it created a new empty object {}
 * 2 - it binds the value of 'this' to the new empty object
 * 3 - it calls the constructor function to 'build' the object
 */