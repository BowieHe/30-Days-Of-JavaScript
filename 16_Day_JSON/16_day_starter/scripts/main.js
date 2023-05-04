// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

const userObj = JSON.parse(usersText, (key, value) => {
    let newVal = typeof value == 'string' && key != 'email'? value.toUpperCase() : value
    return newVal
})
console.log(userObj)


console.log(JSON.stringify(userObj, undefined, 4))

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// 1
let arrayStr = JSON.stringify(skills, undefined, 4)
console.log(arrayStr)

console.log(JSON.stringify(age))

console.log(JSON.stringify(isMarried))

console.log(JSON.stringify(student, undefined, 4))

//2 
let stuStr = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(stuStr)


//3
let users = JSON.parse(txt, (key, value) => {
    // console.log(key)
    if(key == 'skills') {
        // console.log(Object.keys(value).length)
        let skillNum = Object.keys(value).length

        return skillNum
    }
    return value
})
console.log(Object.keys(users))

let skillPerson = []
for(let [name, value] of Object.entries(users)) {
    skillPerson.push({name: name, skills: users[name].skills})
}
skillPerson.sort((a, b) => (b.skills - a.skills))
console.log(skillPerson[0].name)