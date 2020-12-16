// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

const fullNumber = +prompt('Enter a two-digit number',25);

if (isNaN(fullNumber)) {
	alert('Incorrect input');
} else {
	const firstNumber = Math.floor(fullNumber / 10);
	const secondNumber = fullNumber % 10;
	if (firstNumber > secondNumber) {
		alert('First number more second number');
	} else if (firstNumber === secondNumber) {
		alert('First number equally second number');
	} else {
		alert('First number less second number');
	}
}





