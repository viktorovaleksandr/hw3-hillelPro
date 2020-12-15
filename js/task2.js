// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

const fullNumber = +prompt('Enter any number?');
const firstNumber = Math.floor(fullNumber / 10) % 10;
const secondNumber = Math.floor(fullNumber / 1) % 10;

if (firstNumber > secondNumber) {
	alert('First namber more second namber');
} else if (firstNumber === secondNumber) {
	alert('First number equally second number');
} else {
	alert('First number less second number');
}

