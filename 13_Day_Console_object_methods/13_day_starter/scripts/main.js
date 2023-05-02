// console.log(county)
// alert('Open the console and check if the county has been loaded')


console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScr%cipt',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow',
  'color:grey'
) // log output green red and yellow text

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// console.table(names)

const u = {
  name: "test"
}
console.table(u)

const names = ['Asabeneh', 'Brook', 'David', 'John']
const county = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('county')
console.log(county)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


console.assert(10 > Math.pow(2, 10), 'this is error')

console.warn("this is a warning ")

console.error("this is an error")

console.time("for")
for(let i = 1; i <= 10; i++) {
  // do nothing
}
console.timeEnd("for")

console.time("while") 
let j = 0
while(j < 10){
  // do nothing
  j++
}
console.timeEnd("while")