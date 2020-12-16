// Дано трехзначное число. 
// a)Верно ли, что все его цифры одинаковые? 
const fullNumber = +prompt('Enter a three-digit number',123);
const firstNumber = Math.floor(fullNumber / 100);
const secondNumber = Math.floor(fullNumber / 10) % 10;
const threeNumber = Math.floor(fullNumber % 10);

const result = (isNaN(fullNumber))?'Incorrect input':
(firstNumber === secondNumber && firstNumber === threeNumber)?'Аll 3 numbers are the same':
'Аll 3 numbers is not the same';
alert(result);

// b)Есть ли среди его цифр одинаковые?
if (isNaN(fullNumber)) {
	alert('Incorrect input');
} else {
	if (firstNumber === threeNumber) {
   	alert(`${firstNumber} and ${threeNumber} the same`);
	} else if (firstNumber === secondNumber) {
   	alert(`${firstNumber} and ${secondNumber} the same`);  
	} else if (secondNumber === threeNumber) {
   	alert(`${secondNumber} and ${threeNumber} the same`);
	} else {
		alert('No identical numbers found!');
	}
}
