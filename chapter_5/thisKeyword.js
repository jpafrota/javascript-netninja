// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.

let user = {
    name: 'jorge',
    age: '23',
    email: 'jorgepabloafrota@gmail.com',
    location: 'Manaus',
    blogs: [
        {title: 'My journal', likes: 30},
        {title: 'Shower thoughts', likes: 10}
    ],

    // this is a default method declaration
    login: function () {
        console.log('the user logged in.');
    },

    // this is also a method, declared with Method Definition JS feature.
    logout() {
        console.log('the user logged out.')
    },

    logBlogs() {
        console.log('this user has written the following blogs:');
        
        // the 'this' keyword refers to the user object in this case.
        this.blogs.forEach(blog => {
            console.log(blog['title'], blog['likes']);
        });
    }

};

user.logBlogs();

// The 'this' keyword belongs to the scope of the function call (global)
console.log(this);