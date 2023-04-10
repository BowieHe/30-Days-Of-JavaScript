console.log(countries)
// alert('Open the console and check if the countries has been loaded')

console.log("test")
const language = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setOfLanguages = new Set(language)
console.log(setOfLanguages)

// setOfLanguages.clear()

console.log(setOfLanguages)

const counts = []
const count = {}

for(const l of setOfLanguages) {
    const filterLang = language.filter((lan) => lan == l)
    // console.log(filterLang)
    counts.push({lang: l, count: filterLang.length}) 
}

console.log(counts)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

const empty = new Set()
for(let i = 0; i < 10; i++) {
    empty.add(i)
}

console.log(empty)

empty.delete(1)
console.log(empty)
empty.clear()

const countryMap = new Map()
for(let count of countries) {
    countryMap.set(count.name, count.name.length)
}
console.log(countryMap)