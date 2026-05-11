// Promise is an object that represents the result of an asynchronous operation.
// It is used when a task needs time to finish, for example: calling an API,
// reading a file, or waiting for data from a server.

// A Promise has 3 states:
// 1. pending: the task is still running, no result yet.
// 2. fulfilled: the task finished successfully.
// 3. rejected: the task failed.

// fetch() returns a Promise because getting data from a server takes time.

// .then() is used to handle the result when the Promise is successful.
// .catch() is used to handle the error when the Promise is rejected.
// response.json() also returns a Promise, so we use another .then() to get the final data.

let data = fetch("http://localhost:8000/products")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log("Error:", error)
    })
