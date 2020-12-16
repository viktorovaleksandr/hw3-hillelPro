// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

const fullNumber = +prompt('Enter a six-digit number',123321);
const firstNumber = Math.floor(fullNumber / 100000);
const secondNumber = Math.floor(fullNumber / 10000) % 10;
const threeNumber = Math.floor(fullNumber / 1000) % 10;
const fourthNumber = Math.floor(fullNumber / 100) % 10;
const fifthNumber = Math.floor(fullNumber / 10) % 10;
const sixNumber = Math.floor(fullNumber % 10);  

if (isNaN(fullNumber)) {
	alert('Incorrect input');
} else {
	if (firstNumber === sixNumber && secondNumber === fifthNumber && threeNumber === fourthNumber) {
		alert('The number is mirrored!');
	} else {
		alert('Number is not mirrored!');
	}
}