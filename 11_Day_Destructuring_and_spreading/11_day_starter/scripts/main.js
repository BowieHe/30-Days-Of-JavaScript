console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const constants = [2.72, 3.14, 9.81, 37, 100]
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skillss:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skillss:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skillss:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skillss:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skillss:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skillss:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skillss:['HTM', 'CSS', 'JS'],
  age:20
}
]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(pi)
let {width, height, area, perimeter} = rectangle

console.log(width)

for(const{name, score, skillss, age} of users) {
    console.log(name)
    if(skillss.length < 2) {
        console.log(`person ${name} has less than 2 skillss ${skillss}`)
    }
}


let sts = []

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

const convertArrayToObjects = (students) => {
    let sts = []
    // console.log(students)
    for( const [n, sk, sc] of students) {
        sts.push({name: n, skills: sk, scores: sc})
    }
    return sts

}

console.log(convertArrayToObjects(students))

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent = {...student}
for(let ski in newStudent.skills) {
    sss = newStudent.skills[ski]
    if(ski == "frontEnd") {
        sss.push({skill: 'BootStrap', level: 8})
    } else if(ski == 'backEnd') {
        sss.push({skill: 'Express', level: 9})
    }
}

console.log(newStudent)