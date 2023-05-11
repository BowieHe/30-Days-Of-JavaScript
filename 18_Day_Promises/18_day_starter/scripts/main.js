// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)


// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error))



const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        // getting the data
        console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens