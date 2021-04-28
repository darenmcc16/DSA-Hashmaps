'use strict';

const HashMap = require('./hashMaps')
const string = 'google all that you think of'
const string2 = 'google'
const duplicate = new HashMap()

for(let i=0; i < string2.length; i++){
    duplicate.set(string2[i], string2[i])
}

console.log(duplicate)
let newStr = ''
duplicate._hashTable.forEach(letter =>{
    newStr += letter.value
})

console.log(newStr)