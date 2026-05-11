// async/await is syntax used to handle asynchronous code more easily.
// async marks a function as asynchronous and makes it return a Promise.
// await is used inside an async function to wait for a Promise to finish.
// It works like .then(), but the code looks more like synchronous code.

let url = "http://localhost:8000/products"
async function getData(url){
    let data = await fetch(url)
    let jsondata = await data.json()
    console.log(jsondata);
}
getData(url)