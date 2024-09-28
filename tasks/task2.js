// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let letters = ''; 

  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    
    if (char < '0' || char > '9') {
      letters += char;
    }
  }

  
  return letters.split('').reverse().join('');
}


module.exports = reverseWithoutNumbers;