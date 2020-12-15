// Дано трехзначное число. 

// a)Верно ли, что все его цифры одинаковые? 
const number = +prompt('Enter a three-digit number');
const firstNumber = Math.floor(number / 100) % 10;
const secondNumber = Math.floor(number / 10) % 10;
const threeNumber = Math.floor(number / 1) % 10;
if (firstNumber === secondNumber && firstNumber === threeNumber) {
	alert('Аll 3 numbers are the same');
} else {
	alert('Аll 3 numbers are not the same');
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

