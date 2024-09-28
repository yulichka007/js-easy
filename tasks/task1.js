// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = 'aeiouAEIOU'; 
  let result = ''; 
  
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; 
    
    if (vowels.includes(char)) {
      result += '*'; 
    } else {
      result += char; 
    }
  }
  return result; 
}

console.log(replaceVowels("hello")); // Виведе: "h*ll*"
console.log(replaceVowels("javascript")); // Виведе: "j*v*scr*pt"


module.exports = replaceVowels;