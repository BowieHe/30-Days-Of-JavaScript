// console.log(countries)

// alert('Open the console and check if the countries has been loaded')

const callback = (n) => {
    return n ** 2
}
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

function printIntervalEverySecond() {
    console.log(new Date().getDay())
}
// setInterval(printIntervalEverySecond, 1000)

function printInfuture() {
    console.log('this is future')
}

// setTimeout(printInfuture, 1000)
const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

let sortedCountry = country.sort(function(a, b) {
    if(a.name > b.name) {
        return 1
    } else if(a.capital > b.capital) {
        return 1
    } else if(a.population > b.population) {
        return 1
    } else {
        return -1
    }
})
console.log(sortedCountry)

const county1 = [
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

function mostSpokenLanguages(countries, num) {
    var res = []
    
}

var allLanguages = []
countries.forEach(country => 
    country.languages.forEach(lan => 
        allLanguages.push(lan)))
var prev = allLanguages[0]
var count = 0
let res = []
for(lang of allLanguages) {
    if(lang == prev) {
        count++
    } else {
        res.push({language: lang, count: count})
        prev = lang
        count = 1
    }
}
res.push({language:prev, count: count})
console.log(res.sort(function(a, b) {a.count - b.count}))