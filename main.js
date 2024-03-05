
import {r1, add} from "./reason.js";



document.getElementById('d1').innerHTML = r1("нет света");

let sum = add(7,5);

function isVowel(char) {
    return /^[ауоыэяюёие]$/.test(char.toLowerCase());
}

//document.getElementById('d2').innerHTML = sum;

let input = prompt("Enter the name, please!");

let lastLetter = input.substring(input.length-1);
let inpOrigin = input;
input = input.toLowerCase(0);

let isVow = isVowel(lastLetter);
console.log(input);

if(isVow){
    input = input.substring(0, input.length-1);
    
}

let output = inpOrigin + ", " + inpOrigin + ` всех по${input}ит, пере${input}ит, вы${input}ит.`

document.getElementById('d2').innerHTML = output + "Hello from develop!";


