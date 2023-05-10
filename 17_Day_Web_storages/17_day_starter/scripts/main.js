const ski = ['html', 'scc']
localStorage.setItem("ski", ski)
console.log(localStorage)

let person = {
    name: "test",
    age: 25
}
localStorage.setItem("person", JSON.stringify(person))

console.log(localStorage)