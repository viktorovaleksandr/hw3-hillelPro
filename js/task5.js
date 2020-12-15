// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

const fullNumber = +prompt('Enter a six-digit number',123321);
const number1 = Math.floor(fullNumber / 100000) % 10;
const number2 = Math.floor(fullNumber / 10000) % 10;
const number3 = Math.floor(fullNumber / 1000) % 10;
const number4 = Math.floor(fullNumber / 100) % 10;
const number5 = Math.floor(fullNumber / 10) % 10;
const number6 = Math.floor(fullNumber / 1) % 10;  

if (number1 === number6 && number2 === number5 && number3 === number4) {
	alert('The number is mirrored!');
} else {
	alert('Number is not mirrored!');
}