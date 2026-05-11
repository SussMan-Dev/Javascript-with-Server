// synchronous: code runs line by line, one after another
console.log("1")
console.log("2")
console.log("3")

// asynchronous: some code runs later, while the rest continues running
console.log("1")
setTimeout(() => {
   console.log("2")
}, 2000)
console.log("3")
