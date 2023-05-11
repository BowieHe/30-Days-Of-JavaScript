// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

function outer() {
    let count = 0
    function plus() {
        count++
        return count
    }

    function minus() {
        count--
        return count
    }

    function equal() {
        console.log("test")
        count *= count
    }
    return {
        pl: plus(),
        mi: minus(),
        e: equal()
    }
}

const inner = outer()
console.log(inner.mi)
console.log(inner.e)
console.log(inner.pl)

function personAccount(num) {
    let firstname = 'a'
    let lastname = 'b'
    let incomes = 100
    let expenses = 3

    function totalincome() {
        return incomes - expenses
    }

    function totalExpense() {
        return expenses
    }

    function accountInfo() {
        return firstname + ' ' + lastname
    }

    function addIncome() {
        return incomes += num
    }

    return {
        totalincome: totalincome(),
        totalExpense: totalExpense(),
        accountInfo: accountInfo(),
        addIncome: addIncome()
    }
}

const person = personAccount(23)
console.log(person.addIncome)