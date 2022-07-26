// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }

  }

function  getInfo(name) {
    return users[name]
}

function getSkillNum(name) {
    let info = Object.assign({}, getInfo(name))
    
    return info.skills.length
}

let names = Object.keys(users)

// let thoms = "Thomas"
// console.log(getSkillNum(thoms))

const mernStack = []
const stackNames = []
const mern = ["MongoDB", "Express", "React", "Node"]

for(let i = 0; i < names.length; i++) {
    let userInfo = getInfo(names[i])
    // console.log(userInfo)

    // console.log(Object.values(userName))
    // console.log(student)
    // let skillNum = getSkillNum(names[i])
    // console.log(skillNum)

    let isStack = true
    let skills = Object.values(userInfo.skills)
    for(const skill of mern) {
      if(!skills.includes(skill)) {
        isStack = false
        break
      }
    }
    if(isStack) {
      mernStack.push(userInfo)
      stackNames.push(names[i])
    }
}

console.log(mernStack)
console.log(stackNames)

console.log(mernStack[0])
console.log(Object.entries(mernStack[0]))
console.log(Object.values(stackNames))

alert(`People ${stackNames.join(",")} is MERN stack developer`)