// Change code below this line
let number = 12345; // Замените это число на ваше

// Преобразуем число в строку и возьмем первый символ
let firstDigit = String(number);
let lastDigit= firstDigit[firstDigit.length-2];

console.log("Первая цифра числа:", lastDigit);