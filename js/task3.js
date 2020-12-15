// Дано трехзначное число. 

//  a)Определить является ли четной сумма его цифр. 
const number = +prompt('Enter a three-digit number');
const firstNumber = Math.floor(number / 100) % 10;
const secondNumber = Math.floor(number / 10) % 10;
const threeNumber = Math.floor(number / 1) % 10;
const sumNum = firstNumber + secondNumber + threeNumber;
const evenOrOdd = sumNum / 2;
const resultParity  = (evenOrOdd ^ 0) === evenOrOdd ? ' is event' : ' is odd';
alert(resultParity);

//  b)Определить, кратна ли сумма его цифр пяти. 
const multipleCheck = Math.floor(sumNum / 1) % 10;
if (multipleCheck === 0 || multipleCheck === 5) {
	alert('Sum is multiple of five');
} else {
	alert('Sum is not multiple of five');
}

//  c)Определить является ли произведение его цифр больше 100. 
const multiplicationNum = firstNumber * secondNumber * threeNumber;
const resultChecking = multiplicationNum > 100 ? ' More' : ' Less';
alert(resultChecking);
