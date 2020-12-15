// Дано трехзначное число. 
// a)Верно ли, что все его цифры одинаковые? 
const fullNumber = +prompt('Enter a three-digit number',123);
const firstNumber = Math.floor(fullNumber / 100) % 10;
const secondNumber = Math.floor(fullNumber / 10) % 10;
const threeNumber = Math.floor(fullNumber / 1) % 10;

if (firstNumber === secondNumber && firstNumber === threeNumber) {
	alert('Аll 3 numbers are the same');
} else {
	alert('Аll 3 numbers is not the same');
}

// b)Есть ли среди его цифр одинаковые?
if (firstNumber === threeNumber) {
   alert(`${firstNumber} and ${threeNumber} the same`);
} else if (firstNumber === secondNumber) {
   alert(`${firstNumber} and ${secondNumber} the same`);  
} else if (secondNumber === threeNumber) {
   alert(`${secondNumber} and ${threeNumber} the same`);
} else {
	alert('No identical numbers found!');
}

