'use strict'

console.log('hello world');


const main = document.getElementById('main');

const HandWrap = {
    Brand: "RingSide",
    Length: "180in",
    color: "Black",
    Style: "mexican-style",
}

// console.log(HandWrap);

const JSONHandWrap = JSON.stringify(HandWrap);

localStorage.setItem('HandWrap', JSONHandWrap)
console.log(localStorage)

let pissedOff = localStorage.getItem('HandWrap')

console.log(pissedOff)

const ma = ['Karate', 'Ju-Jitsu', 'Aikido', 'Kung-Fu', 'Muay Thai']

console.log(ma)

const man = JSON.stringify(ma);

localStorage.setItem('ma', man);

let mam = localStorage.getItem('ma');
console.log(mam)
// const JSONParse = JSON.parse(HandWrap);

// main.appendChild(HandWrap)