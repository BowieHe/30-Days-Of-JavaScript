// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')

let age = prompt("Enter your age", "")
if(age >= 18) {
    console.log("You are old enough to drive")
} else {
    let gap = 18 - age
    console.log(`You are left with ${gap} years to drive`)
}

