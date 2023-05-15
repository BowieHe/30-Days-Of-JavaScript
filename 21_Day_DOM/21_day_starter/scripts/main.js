
const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)

const allTitleClass = document.getElementsByClassName('title')
console.log(allTitleClass)

const titles = document.querySelectorAll('.title')

console.log(titles)
titles[2].setAttribute('class', 'test')
titles[2].setAttribute('id', "fourth-title")