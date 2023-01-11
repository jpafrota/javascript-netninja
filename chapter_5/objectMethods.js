// Object methods

let user = {
    name: 'jorge',
    age: '23',
    email: 'jorgepabloafrota@gmail.com',
    location: 'Manaus',
    blogs: ['My journal', 'Shower thoughts'],

    // this is a default method declaration
    login: function () {
        console.log('the user logged in.');
    },

    // this is also a method, declared with Method Definition JS feature.
    logout() {
        console.log('the user logged out.')
    },

    logBlogs() {
        console.log(this.blogs);
    }

};

user.login();
user.logBlogs();