console.log(countries)
alert('Open the console and check if the countries has been loaded')

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let times = 1
while(times <= 10) {
    console.log(times++)
}

times = 0
let outDash = "#"
while(times < 7) {
   outDash += "#" 
   console.log(outDash)
   times++
}

for(let i = 0; i < 10; i++) {
    console.log(`${i} * ${i} = ${i * i} `)
}

for(let i = 0; i <= 10; i++) {
    console.log(`${i} ${i} ${Math.pow(i , 3)}`)
}

// for(let i = 1; i <= 100; i += 2) {
//     console.log(i)
// }


function mkstr(num) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = ''
    for(let i = 0; i < num; i++) {
        result += characters.charAt(Math.random() * (characters.length + 1))
    }
    return result
}

var i = 0
while(i++ < 5){
    console.log(mkstr(10))
}

 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(var stack of fullStack) {
    for(var skill of stack) {
        console.log(skill)
    }
}

const input = prompt("test", "input")