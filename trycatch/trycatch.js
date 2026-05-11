let api = "http://localhost:8000/products"

// try...catch is used to handle errors in JavaScript.
// Code inside try will run first.
// If an error happens inside try, JavaScript will stop there and move to catch.
// Code inside finally always runs, whether there is an error or not.
async function getData(url) {
    try {
        // fetch() gets data from the server and returns a Promise.
        const response = await fetch(url)

        // response.json() converts the response data to JSON.
        const jsondata = await response.json()
        console.log(jsondata)
    } catch (error) {
        // catch handles errors, for example: wrong URL or server is not running.
        console.log(error)
    } finally {
        // finally is often used for cleanup, loading status, or code that must always run.
        console.log("Request finished")
    }
}
getData(api)
