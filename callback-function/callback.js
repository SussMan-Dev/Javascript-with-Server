// A callback function is a function passed as an argument to another function.
// The other function can call it later when needed.

// This function will be used as a callback.
function hello(name) {
    return `hello ${name}`
}

// This function receives another function as a callback.
function calling(name, callback) {
    console.log(callback(name))
}

calling("huy", hello)
