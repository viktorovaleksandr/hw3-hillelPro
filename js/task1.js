// Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру и информацию о том чётная она, или нет.

const number = +prompt('Enter any number');
const lastNamber = number % 10 ;
const evenOrOdd = lastNamber / 2;
const result = (evenOrOdd ^ 0) === evenOrOdd ? ' Is event' : ' Is odd';

alert(lastNamber + result);


