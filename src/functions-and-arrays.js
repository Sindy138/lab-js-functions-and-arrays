// Iteration 1 | Find the Maximum
/*
function maxOfTwoNumbers(a,b) {
    //Recibe dos nùmeros como argumento
    // Creo la viariable del resultado
    // Comparar si a es mayor que b
    //imprimo resultado
    let result;
    if (a>b) result = a;
    if (a<b) result = b;
    if (a===b) result = a;

    return  result
}
*/
//TERNARIO
function maxOfTwoNumbers(a, b) {
  return a >= b ? a : b;
}



// Iteration 2 | Find the Longest Word
// const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
/*
function findLongestWord(words) {
    // Agregar argumento (Array)
    // Comprobar si en array esta vacio
    // Creo la variable longestWord
    // Iterar en array mediante forEach
    // calcular el .length de cada palabra
    // Comparar las palabras
    //traer resultado

    if (!words || words.length === 0) {
        return null; 
    }

    let longestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length){
            longestWord = word;
        }
        
    });

    return longestWord;
}
*/

//TERNARIO + REDUCE

function findLongestWord(words) {
  if (!words.length) return null;
  
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, words[0]);
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
/*
function sumNumbers(numbers) {
    // Crear barrera si hay valores iguales a 0
    // crear variable total
    // crear bucle que itere el array y que sume los valores
    // devolver total

    if (numbers.length === 0){
        return 0;
    }

    let total = 0;

    for (let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }

    return total;
}
*/
function sumNumbers(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
/*
function averageNumbers(numbers2) {

    if (numbers2.length === 0){
        return 0;
    }

    const total = sumNumbers(numbers2);

    const average = total / numbers2.length;

    return average;

}
*/

// TERNARIO

function averageNumbers(numbers) {
  return numbers.length === 0 ? 0 : sumNumbers(numbers) / numbers.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
/*
function doesWordExist(words, wordToSearch) {
    if (words.length === 0) {
    return null;
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordToSearch) {
        return true; 
        }
    }

    return false;
    return wordToSearch;
}
*/
// INCLUDE
function doesWordExist(words, wordToSearch) {
  if (words.length === 0) return null;
  
  return words.includes(wordToSearch);
}
