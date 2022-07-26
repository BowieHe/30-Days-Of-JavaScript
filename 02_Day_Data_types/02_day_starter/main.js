// this is your main.js script
// 1
let challenge = '30 Days Of JavaScript'

// 2
console.log(challenge)

//3
console.log(challenge.length)

//4
console.log(challenge.toUpperCase())
//5
console.log(challenge.toLowerCase())
//6
console.log(challenge.substring(8))
//7
console.log(challenge.slice(3))

//8
console.log(challenge.includes('Script'))
//9
console.log(challenge.split(""))
//10
console.log(challenge.split(" "))
// 11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

//12
console.log(challenge.replace('JavaScript', 'Python'))
//13
console.log(challenge.charAt(15))
//14
console.log(challenge.charCodeAt('J'))
//15
console.log(challenge.indexOf('a'))
//16
console.log(challenge.lastIndexOf('a'))
//17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because"))
//18
console.log(sentence.lastIndexOf('because'))
//19
console.log(sentence.search('because'))
//20
console.log(challenge.trim())
//21
console.log(challenge.startsWith('30'))
//22
console.log(challenge.endsWith('Days'))
//23
console.log(challenge.match(/s+/))
//24
console.log('30 Days Of '.concat('JavaScript'))
//25
console.log(challenge.repeat(2))

// exec2
//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
//2
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
//3
console.log(parseInt('10') == 10)
//4
console.log(Math.ceil(parseFloat('9.8')) == 10)
//5
console.log('python'.includes('on') && 'django'.includes('on'))
//6
let djangoSentence = 'I hope this course is not full of jargon'
console.log(djangoSentence.includes('jargon'))
//7
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(100))
//8
console.log(getRandomInt(100) - 50)
//9
console.log(getRandomInt(255))
//10
let jsStr = 'JavaScript'
console.log(jsStr.charAt(getRandomInt(jsStr.length)))
//11
let matrix = ''
for (let i = 1; i < 6; i++) {
    matrix += `${i} 1 ${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}\n`
}
console.log(matrix)
//12
let becauseSen = 'You cannot end a sentence with because because because is a conjunction'
let becau = 'because because because'
console.log(becauseSen.substring(becauseSen.indexOf(becau) + becau.length))

//exec3
//1
let loveSen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSen.match(/love/g).length)

//2
console.log(becauseSen.match(/because/g).length)

//3
const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentences.match(/[a-zA-Z ]+/g).join(""))