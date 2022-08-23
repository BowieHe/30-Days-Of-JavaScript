console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function fullName(firstName, lastName) {
    console.log(`Your fullname is ${firstName}. ${lastName}`)
}
fullName('Bowie', 'Ho')

function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(1, 2))

function areaOfRectangle(length, width) {
    return length * width
}
console.log(areaOfRectangle(2, 3))

function perimeterOfRectangle(length, width) {
    return 2 * (length + width)
}
console.log(perimeterOfRectangle(2, 3))

function volumnOfRectangle(length, width, height) {
    return length * width * height
}
console.log(volumnOfRectangle(2, 3, 4))

function areOfCircle(r) {
    const pi = 3.14
    return pi * r * r
}
console.log(areOfCircle(2))

// Exercise 2
function solveQuadratic(a = 0, b = 0, c = 0) {
    let squ = Math.sqrt(b * b - 4 * a *c)
    return new Set([(-b + squ)/(2*a), (-b - squ)/(2*a)])
}
console.log(solveQuadratic(1, 4, 4))

let showDateTime = function(){
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    console.log(date + ' ' + time)
}

showDateTime()

function modifyArray(arr) {
    if(arr.length < 5) {
        return "Not Found"
    }
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(i != 4) {
            result[i] = arr[i]
        } else {
            result[i] = String(arr[i]).toUpperCase()
        }
    }
    return result
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

function isUnique(arr) {
    let result = []
    for(const elem of arr) {
        if(result.includes(elem)) {
            return false
        }else {
            result.push(elem)
        }
    }
    return true
}

console.log(isUnique([1,2,3,4]))
console.log(isUnique([1,1]))

function isUniqueType(arr) {
    let type = arr[0].constructor.name
    // console.log(type)
    for(const elem of arr) {
        if(elem.constructor.name != type) {
            return false
        }
    }
    return true
}

console.log(isUniqueType([1,2,4]))
console.log(isUniqueType([1, "asd"]))