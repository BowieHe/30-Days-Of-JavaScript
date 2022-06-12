console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9)) 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)

if(!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}

console.log(shoppingCart)

let allergicToHoney = confirm("Are you allergic to honey?")
if(allergicToHoney) {
    let honeyIndex = shoppingCart.indexOf("Honey")
    if(honeyIndex != -1) {
        shoppingCart.splice(honeyIndex, 1)
    }
}

console.log(shoppingCart)

if(shoppingCart.includes("Tea")) {
    shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea")
}

console.log(shoppingCart)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
ages.sort()
console.log(ages)

let startIndex = ages.length / 2
let number = ages.length % 2 == 0? 2: 1
console.log(ages.slice(startIndex, startIndex + number))

let summ = 0
for(num in ages) {
    summ += parseInt(num)
}

console.log((summ / (ages.length).toFixed(2)))
// console.log(`first ${parseInt(ages[ages.length - 1])} and last ${parseInt(ages[0])}`)
let last = ages.pop()
console.log(last)
ages.push(last)
console.log(`get age gap: ${(parseInt(last)) - parseInt(ages[0])}`)
