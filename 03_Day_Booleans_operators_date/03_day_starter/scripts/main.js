// this is your main.js script
// alert('Welcome to 30DaysOfJavaScript')

// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

console.log('10' == 10)
console.log(Math.ceil(parseFloat('9.8')) == 10)

// let base = prompt('enter the base', '')
// let height = prompt('enter the height', '')
// let result = base * height
// alert(`the result is ${base * height}`)

alert(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)

let month = now.getMonth() < 10? '0' + now.getMonth() : now.getMonth()
let day = now.getDate() < 10? '0' + now.getDate() : now.getDate()
let hour = now.getHours() < 10? '0' + now.getHours() : now.getHours()
let minute = now.getMinutes() < 10? '0' + now.getMinutes() : now.getMinutes()
alert(`${now.getFullYear()}-${month}-${day} ${hour}:${minute}`)