// Дано трехзначное число. 

//  a)Определить является ли четной сумма его цифр. 
const fullNumber = +prompt('Enter a three-digit number');
const firstNumber = Math.floor(fullNumber / 100) % 10;
const secondNumber = Math.floor(fullNumber / 10) % 10;
const threeNumber = Math.floor(fullNumber / 1) % 10;

const sumNum = firstNumber + secondNumber + threeNumber;
const evenOrOdd = sumNum / 2;

const resultParity  = (evenOrOdd ^ 0) === evenOrOdd ? ' is event' : ' is odd';
alert(resultParity);

//  b)Определить, кратна ли сумма его цифр пяти. 
const multipleCheck = Math.floor(sumNum / 1) % 10;

switch (multipleCheck) {
  case 0:
  case 5:
   alert('Sum is multiple of five');
   break;
  default:
   alert('Sum is not multiple of five');
}

//  c)Определить является ли произведение его цифр больше 100. 
const multiplicationNum = firstNumber * secondNumber * threeNumber;

const resultChecking = multiplicationNum > 100 ? ' More' : ' Less';
alert(resultChecking);
