// console.log(countries)

// alert('Open the console and check if the countries has been loaded')

 const callback = (n) => {
    return n ** 2
 }
 function cube(callback, n) {
    return callback(n) * n
 }

 console.log(cube(callback, 3))

 const numbers = [1,2,3,4,5]
 const sumArray = arr => {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumArray(numbers))

function printIntervalEverySecond() {
    console.log(new Date().getDay())
}
setInterval(printIntervalEverySecond, 1000)

function printInfuture() {
    console.log('this is future')
}
setTimeout(printInfuture, 1000)