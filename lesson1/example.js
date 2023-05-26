/* let a = 1
let b = 2
let c

c = a
a = b
b = c

console.log(a)
console.log(b) */

/* let name = prompt('What is your name')
let year = prompt('What year of birth')

console.log(name + ' ' + year)
console.log(`${name} ${year}`) */
/////////////////////////////////////////
//lesson2//
/////////////////////////////////////////
///myGame///

/* let userName = prompt('What is your name?')
let count = 0
let number = 42

while (userName === '' || userName === null) {
    alert('name')
    userName = prompt('What is your name?')
}

alert(`${userName}, ot 1 do 100`)



let userNumber = prompt('Your Number')
while (userNumber !== number) {
    if (userNumber < number) {
        alert('Malo')
        userNumber = prompt('Your Number')
        count = count + 1
    } else if (userNumber > number) {
        alert('Mnogo')
        userNumber = prompt('Your Number')
        count = count + 1
    } else {
        document.write(`${userName} Ugadal s ${count} popitok`)
        break
    }
} */
//////////////////////////////////////////////////
///homework//
//////////////////////////////////////////////////


/* a = prompt(`vvedite chislo a`)
b = prompt(`vvedite chislo b`)
c = prompt(`vvedite chislo c`)
 */

//////////////////////////////////////////////////
/* if (a > b && a > c) {
    document.write(`naibolsh a = ${a}`)
} else if (b > a && b > c) {
    document.write(`naibolsh b = ${b}`)
} else if (c > a && c > b) {
    document.write(`naibolsh c = ${c}`)
} */

/* aa = 1
bb = 2
cc = 3 */
//////////////////////////////////////////////////
/* 
if ((a > b && a > c) || (a < b && a < c)) {

} else {
    alert(`sred ${a}`)
}

if ((b > a && b > c) || (b < a && b < c)) {

} else {
    alert(`sred ${b}`)
}

if ((c > a && c > b) || (c < a && c < b)) {

} else {
    alert(`sred ${c}`)
} */

/* let i = 10

for (i; i >= 10 && i < 20; i++) {
    document.write(` ${i} `)
}
let a = i
console.log(a)
for (a; a >= 10 && a <= 20; a--) {
    document.write(` ${a} `)
//////////////////////////////////////////////////
} */

/* let i

for (i = 1; i <= 10; i++) {

    document.write(` ${i} * 7 = ${i * 7} <br>`)

} */

//////////////////////////////////////////////////
//lesson 3 homeWork//
//////////////////////////////////////////////////////
/* let string = 'lorem ipsum'
let result1 = ''
let result2 = ''


for (let i = 0; i < string.length; i++) {
    let currentItem = string[i]
    let prevItem = string[i - 1]

    if ((prevItem === undefined && currentItem !== ' ') ||
        (currentItem !== ' ' && prevItem === ' ')) {
        result1 = result1 + string[i].toUpperCase()
    } else {
        result1 = result1 + string[i]
    }

}
console.log(result1) */
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/*
let str = prompt('Vvedite stroku ku')
let replacementWord = prompt('chto nuzno zamenit')
let newWord = prompt('Na chto nuzno zamenit')
let result = ''


 let str = 'Vvedite stroku ku'
let replacementWord = 'stroku'
let newWord = 'kuku' */

/* console.log('str:', str)
console.log('replacementWord:', replacementWord)




let startReplacement = str.substring(0, str.indexOf(replacementWord))

let endReplacement = str.substring(str.indexOf(replacementWord) + replacementWord.length)


let res = startReplacement + endReplacement

console.log('startReplacement:', startReplacement)
console.log('endReplacement:', endReplacement)
console.log('res:', res)

let newRes = startReplacement + newWord + endReplacement
console.log('newWord:', newWord)
console.log('newRes:', newRes)
 */

//////////////////////////////////////////////////
//////////////////////////////////////////////////
/* let a = '23Gjf4uf21'
res = ''
for (let i = 0; i < a.length; i++) {
    console.log(Number(a[i]))
    if (Number(a[i])) {
        res += a[i]
    }

}
console.log(res) */
//////////////////////////////////////////////////
//lesson4//
//////////////////////////////////////////////////
/* function tets(name = 'Ivan') {
    let massage = 'Hello' + name
    console.log(massage)
}
tets() */
///////////////////////////////////////////
/* function degreeNumber(a, b) {
    let c = a
    for (i = 0; i < b; i++) {

        c = c * a
        console.log(c)
    }



    return c
}

degreeNumber(3, 3) */
///////////////////////////////////////////
///////////////////////////////////////////
//lesson 5//
///////////////////////////////////////////
/* let str = 'every., -/ hunter #! wishes ;: {} to $ % ^ & + Know'
let res = ''
let res2 = ''

function removeChar(str) {
    for (let i = 0; i < str.length; i++) {
        a = str[i]

        if (a.toLowerCase() !== a.toUpperCase() || a === ' ') {
            res += a
        }

    }

    for (let a = 0; a < res.length; a++) {


        if (res[a] === ' ' && res[a - 1] === ' ') {

        } else {

            res2 += res[a]
        }
    }
    return res2
}

console.log(removeChar(str)) */

/* let res

function compareString(str1, str2) {


    return str1.toLowerCase() === str2.toLowerCase()
}

console.log(compareString('string', 'stRiNg'))
console.log(compareString('ABCD', 'AbcdW')) */

/* 

function limitStr(str, n, symb) {


    let res = ''

    if (str && n && symb) {
        res = str.substring(0, n) + '!'
    } else if (str && n) {
        res = str.substring(0, n - 3) + '...'
    } else if (str) {
        res = str
    }

    return res
}

console.log(limitStr('Каждий охотник желает знать.'))
console.log(limitStr('Каждий охотник желает знать.', 17))
console.log(limitStr('Каждий охотник желает знать.', 22, '!')) */

/* function isUpperCase(str, character) {

    let x = str[character].toUpperCase() === str[character]
    console.log(x);


}
 */

/* const isUpperCase = (str, i) => str[i].toUpperCase() === str[i]

console.log(isUpperCase('tasks JavaScript', 6)) */


/* const isA = (str, a) => {
    let res = ''
    for (i = 0; i < str.length; i++) {

        if (str[i] === a) {
            res = res + a
        }
    }

    return res
}

console.log(isA('tasks JavaScript', 'a')) */

/* const text = `ipsum dolor sit amet consectetur ipsumadipisicing elit. Minus ipsum aperiam explicabo asperiores ipsam, non
consequuntur  Quia quod ipsum laboriosam accusantium aliquam voluptatibus atque temporibus corrupti eum iure  Rerum,
expedita ipsum error ipsum`
const word = 'ipsum'


function findWord(text, word) {
    let res = 0;
    let tmpIndex = 0;
    for (let i = 0; i !== -1;) {
        if ((text.indexOf(word, tmpIndex) !== -1)) {
            console.log(text[text.indexOf(word, tmpIndex) + word.length] === " ");
            if ((text[text.indexOf(word, tmpIndex) - 1] === " " && text[text.indexOf(word, tmpIndex) + word.length] === " ")) res++
            console.log(text.indexOf(word, tmpIndex));
            tmpIndex = text.indexOf(word, tmpIndex) + 1

        }
        i = text.indexOf(word, tmpIndex)
    }
    return res
}
console.log(findWord(text, word)); */
///////////////////////////////////////////
//test//
///////////////////////////////////////////
/* let a = 5
while (a < 10) {
    console.log('Gotovo')
    a++
}


let b = 10

for (let i = 0; i < b; i++) {
    let res = i;
    console.log(res)
} */

/* let a

switch (a) {
    case name:
        "Vlad"
        break;
    default:
        "ne Vlad"
        break;
} */
/*
let res = 5 * 2 < 2 + '15' // true
console.log(res)


let result = Number('15a') // NaN 
console.log(result);
*/

/* let res = 5 * 'a' // NaN 
console.log(res); */



/* function test(a) {
    console.log(a)
}

test('Hello') */

/* let a = 'sadas'
console.log("FORI");
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}
console.log("FORIN");
for (const aIndex in a) {
    console.log(aIndex)
}
console.log("FOROF");
for (const aElement of a) {
    console.log(aElement)
} */
///////////////////////////////////////////
//homework arr//
///////////////////////////////////////////
/* const isEqual = (firstArray, secondArray) => {

    if (firstArray.length !== secondArray.length) {
        return false
    }

    for (let i = 0; i < firstArray.length; i++) {
        const e = firstArray[i];

        if (firstArray[i] !== secondArray[i]) {
            return false
        }
    }

    return true
}


const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]

console.log(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.log(isEqual(arr1, arr4)); */
/////////////////////////////////////////////
/////////////////////////////////////////////
/* const unique = (array) => {
    let newArray = array.filter((value, index) => array.indexOf(value) === index)
    return newArray
}

const data = [1, 2, 1, 2, 3]
console.log(unique(data)) */
/////////////////////////////////////////////
/* const unique = (array) => {
    let res = []
    for (let i = 0; i < array.length; i++) {
        if (!includ(res, array[i])) {
            res.push(array[i])
        }
    }
    return res
}

const data = [1, 2, 1, 2, 3] */

/*
const includ = (array, el) => {

    for (let i = 0; i < array.length; i++) {
        let curEl = array[i]

        if (curEl === el) {
            return true
        }
    }
    return false
}

const data = [1, 2, 1, 2, 3]
console.log(unique(data))
 console.log(includ(data)) */
/////////////////////////////////////////////
/////////////////////////////////////////////
/* const compact = (array) => {

    let res = array.filter(value => value)

    return res
}

const data = [0, 1, false, 2, undefined, '', 3, null]
console.log(compact(data)) */
/////////////////////////////////////////////
/////////////////////////////////////////////
//leson7//
/////////////////////////////////////////////
/////////////////////////////////////////////
/* const palindrome = (str) => str.split(' ').join('').split('').reverse().join('').toLowerCase() == str.toLowerCase().split(' ').join('')

console.log(str.split(' ').join('').split('').reverse().join('').toLowerCase());

    console.log(str.toLowerCase().split(' ').join(''));


console.log(palindrome('racecar'))
console.log(palindrome('table'))
console.log(palindrome('Анна'))
console.log(palindrome('А роза упала на лапу Азора')) */
/////////////////////////////////////////////
/////////////////////////////////////////////
//leson8//
/////////////////////////////////////////////
/////////////////////////////////////////////
/* const isPlainObject = (element) => {

    if (element !== null && !Array.isArray(element) && typeof (element) === "object") {
        return true
    }
    
        console.log(element === null);
        console.log(element === Array.isArray(element));
        console.log(element === typeof (element))
    return false
}

const data = []
const data1 = {
    a: 1
}
const data2 = null


console.log('data: ', isPlainObject(data))
console.log('data1: ', isPlainObject(data1))
console.log('data2: ', isPlainObject(data2)) */

/////////////////////////////////////////////

/* const without = (object, ...args) => {

    args.forEach(value => {
        delete object[value]
    })

    return object
}
const data = {
    a: 1,
    b: 2,
    c: 3
}

console.log(without(data, 'b', 'c')) */


/* const isEmpty = (object) => {

    for (const key in object) {

        if (object[key] !== undefined) {
            return false
        }
    }

    return true
}

const data = {
    a: 1,
    b: undefined,
}
const data2 = {
    a: undefined
}
console.log(isEmpty(data));
console.log(isEmpty(data2)); */
/////////////////////////////////////////////
/////////////////////////////////////////////
//lesson 10//
/////////////////////////////////////////////
/////////////////////////////////////////////
/* const isEqual = (firstObject, secondObject) => {
    for (const key in secondObject) {
        console.log(secondObject[key]);
        console.log(key);
        if (secondObject[key] !== firstObject[key]) return false

    }
    return true
}

const data = {
    a: 1,
    b: 1
}
const data2 = {
    a: 1,
    b: 1
}
const data3 = {
    a: 1,
    b: 2
}
console.log(isEqual(data, data2));
console.log(isEqual(data, data3)); */
/////////////////////////////////////////////
/* const makePairs = (object) => {
    let a = []
    console.log(object);
    for (const key in object) {
        console.log([key, object[key]]);
        a.push([key, object[key]])
    }
    return a
}

const data = {
    a: 1,
    b: 2
}
console.log(makePairs(data)); */
/////////////////////////////////////////////
/////////////////////////////////////////////
//lesson11//
/////////////////////////////////////////////
/////////////////////////////////////////

/* const quest = {
    firstName: 'John',
    lastName: 'Konor',
    getFullName: function (a, b) {
        return this.firstName + ' ' + this.lastName

    }
}

const amin = {
    firstName: 'Bob',
    lastName: 'Morley',
}

console.log(quest.getFullName(amin))
console.log(quest.getFullName.call(amin))
console.log(quest.getFullName.bind(amin)())
console.log(quest.getFullName.apply(amin, ['firstName', 'lastName'])) */
/////////////////////////////////////////////

/* function getAccess() {

    if (this.access) {
        return ` Access granted, ${this.firstName}  ${this.lastName}`
    }

    return `Sorry, ${this.firstName}  ${this.lastName}`
}

const guest = {
    firstName: 'John',
    lastName: 'Konor',
    access: false
}

const admin = {
    firstName: 'Bob',
    lastName: 'Marley',
    access: true
}
guest.getAccess = getAccess
admin.getAccess = getAccess

console.log('John -', guest.getAccess())
console.log('Bob -', admin.getAccess()) */
/////////////////////////////////////////////
/////////////////////////////////////////////
//CodeWars//
/////////////////////////////////////////////
/////////////////////////////////////////////
//1//
/* function toCamelCase(str) {
    let res = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] && str[i - 1] === undefined) {
            res += str[i]

        } else if (str[i].toUpperCase() === str[i].toLowerCase()) {
            res += str[i + 1].toUpperCase()
        } else if (str[i - 1].toUpperCase() === str[i - 1].toLowerCase()) {

        } else {
            res += str[i]
        }
    }

    return res
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior")); */
/////////////////////////////////////////////
//1.1//
/////////////////////////////////////////////

/* function toCamelCase(str) {
    let res = ''

    for (const key in str) {

        if (str[key] && str[key - 1] === undefined) {
            res += str[key]

        } else if (str[key] && str[key - 1].toUpperCase() === str[key - 1].toLowerCase()) {
            res += str[key].toUpperCase()
        } else if (str[key].toUpperCase() === str[key].toLowerCase()) {

        } else {
            res += str[key]
        }
    }

    return res
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior")); */

/////////////////////////////////////////////
//2//
/* let isSquare = n => Math.round(Math.sqrt(n)) === Math.sqrt(n)

console.log(isSquare(25));
console.log(isSquare(23));
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3)); */
/////////////////////////////////////////////
//3//
/* const getLength = arr => arr.length

const getFirst = (arr) => arr.shift();

const getList = (arr) => arr[arr.length - 1]
const pushElement = (arr) => arr.push(4);
const popElement = (arr) => {
    arr.pop();
    return arr.length
}


console.log(getLength([1, 2, 3]))
console.log(getFirst([1, 2, 3]))
console.log(getList([1, 2, 3]))
console.log(pushElement([1, 2, 3]))
console.log(popElement([1, 2, 3])) */
/////////////////////////////////////////////
//4//

/* const highAndLow = (str) => {

    res = str.split(' ')

    res.sort((a, b) => {
        return a - b
    })

    let resMin = res[0]
    let resMax = res.pop()

    

    return `${resMax} ${resMin}`
} */
/*     for (let i = 0; i < res.length; i++) {
            const e = Number(res[i]);
            console.log(typeof (e));


        } */
/* console.log(highAndLow("1 2  -213 3 4 -5 6 7 8 10 -111 223 333 2")); */

/* const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs`
/////////////////////////////////////////////
console.log(animal({
    name: 'dog',
    legs: 4,
    color: 'white',
})); */
/////////////////////////////////////////////

/* let a = 1
let b = 1
let c = 1
let n = 10

for (let i = 1; i <= n; i++) {

    let res = a + b + c
    a = b
    b = c
    c = res
    console.log(c);
}
 */


/* const tribonacci = (signature, n) => {

    let tmp = []
    let a = +signature[signature.length - 3]
    let b = +signature[signature.length - 2]
    let c = +signature[signature.length - 1]

    if (n <= 3) {
        signature = signature.slice(0, n)
    }

    for (let i = 0; i < n - 3; i++) {

        tmp = a + b + c
        a = b
        b = c
        c = tmp

        signature.push(tmp)


    }

    return signature

}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([333, 222, 111], 0));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([3, 2, 1], 10)); */
//////////////////////////////////////////////////////////////////////////////////////////
/*     if (arr.length >= 2) {
        res = arr[0] * arr[1]
    }

    arr = ('' + res).split('').map(Number)


    if (arr.length >= 2) {
        res = arr[0] * arr[1]
    }

    arr = ('' + res).split('').map(Number)

    if (arr.length >= 2) {
        res = arr[0] * arr[1]
    } */

/* const persistenze = (num) => {


    let arr = num.toString().split('').map(Number)
    console.log('length -', arr.length);
    console.log('arr -', arr);

    let numIterations = 0
    let resGeneration
    for (let i = 0; i !== num; i++) {

        if (arr.length > 1) {

            resGeneration = arr.reduce((acc, rec) => acc * rec)
            console.log('resGeneration', resGeneration);
        } else {
            return numIterations
        }
        arr = resGeneration.toString().split('').map(Number)

        numIterations++
        console.log('numIterations', numIterations);

    }

    return numIterations

}

console.log(persistenze(999)); */
////////////////////////////////////////////////////////////////

/* const digitalRoot = n => (n > 9) ? digitalRoot(n.toString().split('').reduce((acc, rec) => Number(acc) + Number(rec))) : n

console.log(digitalRoot(88)); */
////////////////////////////////////////////////////////////////
/* const switchHelp = (elem) => {
    switch (elem) {
        case 'a':
            return 1;
        case 'b':
            return 2;
        case 'c':
            return 3;
        case 'd':
            return 4;
        default:
            return ''
    }
}

const alphavit = (str) => str.split('').filter((val) => val.toUpperCase() !==
    val.toLowerCase()).reduce((acc, elem) => {
    return acc += switchHelp(elem)
}, '');


console.log(alphavit('as c  c b df h ? &u')); */
////////////////////////////////////////////////////////////////
/* const findUniq = (arr) => arr.filter((value) => value !==
    arr.filter((value, index, array) => index !==
        array.indexOf(value))[0])[0]

console.log(findUniq([1, 1, 1, 1, 0]));
console.log(findUniq(['a', 'a', 'a', 'a', 'b'])); */
////////////////////////////////////////////////////////////////

/* const solution = (str) => {
    let res = []
    if (str === '') {
        return []
    }

    for (let i = 0; i < str.length; i++) {
        if ((str.length % 2) !== 1) {
            res.push(str[i] + str[i + 1])
            console.log(str[i] + str[i + 1])
        } else if (str[i] && str[i + 1] === undefined) {

        } else {
            res.push(`${str[i] + str[i + 1]} `)
        }
        i++
    }

    if (str.length % 2) {
        res.push((str[str.length - 1]) + '_')
    }

    return res

}
 */

/* const solution = (str) => {
    let res = []
    if (str === '') {
        return []
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] && str[i + 1]) {
            res.push(str[i] + str[i + 1])
        } else {
            res.push(str[i] + '_')
        }
        i++
    }

    return res
}
console.log(solution('abc'));
console.log(solution('abcdef'));
console.log(solution('')); */
////////////////////////////////////////////////////////////////
/* const spinWords = (string) => string.split(' ').map((e) => e.length > 4 ?
    (e.split('').reverse().join('')) : e).join(' ')

 */

/* const spinWords = (string) => {
    let res = string.split(' ').map((e) => e.length > 4 ?
        (e.split('').reverse().join('')) : e).join(' ')
    return res
} 



console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('This is a test'));*/

////////////////////////////////////////////////////////////////

/* const sumTwoSmallestNumbers = (numbers) => {
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 4, 28, 2, 11]));
console.log(sumTwoSmallestNumbers([52, 111, 72, 18, 999])); */
////////////////////////////////////////////////////////////////

// const getSum = (a, b) => {

//     if (a === b) return a

//     let res = []

//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) res.push(i)

//     return res.reduce((acc, value) => acc + value)

// }

// console.log(getSum(0, -1), -1);
// console.log(getSum(3, -2), 3);
// console.log(getSum(-2, 2), 0);
// console.log(getSum(2, 2), 2);

/* const toWeirdCase = (string) => {
    let a = string.split(' ')
    let res = []
    let tmpRes = []
    let tmpElem

    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        tmpRes = []
        for (let i = 0; i < element.length; i++) {
            const elem = element[i];
            tmpElem = elem.toUpperCase() + element[i + 1]
            if (element[i + 1] === undefined) {
                tmpElem = elem.toUpperCase() + ''
            }
            tmpRes.push(tmpElem)
            i++
        };
        res.push(tmpRes.join(''))

    }

    return res.join(' ')
}

console.log(toWeirdCase('should return the correct value for a single word'));
 */
////////////////////////////////////////////////////////////////
/* const toWeirdCase = (string) => {
    let a = string.split(' ')

    return a.map(word => word.split('').map((letter, index) => {
        console.log((index % 2));
        if ((index % 2)) {
            return letter.toLowerCase()
        } else {
            return letter.toUpperCase()
        }
    }).join('')).join(' ')
}
console.log(toWeirdCase('should return the correct value for a single word'));
 */

/* const toWeirdCase = (string) => string.split(' ').map(word =>
    word.split('').map((letter, index) => (index % 2) ?
        letter.toLowerCase() :
        letter.toUpperCase()).join('')).join(' ')

console.log(toWeirdCase('should return the correct value for a single word')); */

/* const twoSum = (numbers, target) => {

    let res = []
    let resNew = []


    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                res.push(i)
                res.push(j)
            }
        }
    }

    return res

}

console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690)); */

////////////////////////////////////////////////////////////////
/* 
const wave = str => {
    let res = []

    str.split('').map((elem, index) => elem !== ' ' && res.push(str.substring(0, index) +
        elem.toUpperCase() + str.substring(index + 1, str.length)));


    return res
}

console.log(wave('hello'));
console.log(wave('hello gays')); */


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//DOM//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////