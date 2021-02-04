export default class Sentence {
  constructor(line) {
    this.line = line;
  }

  pigLatin() {
    this.line = this.line.toLowerCase()
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(this.line[0])) {
      return true;
    } else {
      return false;
    }
  }

  firstLetterPerWord() {
    let vowelArray = []
    this.line = this.line.toLowerCase()
    let sentenceArray = this.line.split(" ")
    for (let i = 0; i < sentenceArray.length; i++) {
      vowelArray.push(sentenceArray[i].charAt(0));
    }
    console.log(vowelArray);
    return vowelArray.toString(" ");
  }

  firstLetterPerWordVowel() {
    let vowelArray = []
    let justVowelArray = []
    const vowels = ["a", "e", "i", "o", "u"];
    this.line = this.line.toLowerCase()
    let sentenceArray = this.line.split(" ")
    for (let i = 0; i < sentenceArray.length; i++) {
      vowelArray.push(sentenceArray[i].charAt(0));
      if (vowels.includes(sentenceArray[i].charAt(0))) {
        justVowelArray.push(sentenceArray[i].charAt(0))
      }
    }
    console.log(justVowelArray)
    return justVowelArray.join(",")
  }
  addWay() {
    let vowelArray = []
    const vowels = ["a", "e", "i", "o", "u"];
    this.line = this.line.toLowerCase()
    let sentenceArray = this.line.split(" ")
    for (let i = 0; i < sentenceArray.length; i++) {
      vowelArray.push(sentenceArray[i].charAt(0));
      if (vowels.includes(sentenceArray[i].charAt(0))) {
        sentenceArray[i] = sentenceArray[i] + "way"
      }
    }
    console.log(sentenceArray)
    return sentenceArray.join(" ")
  }

  consonantCheck() {
    let vowelArray = []
    let justVowelArray = []
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    this.line = this.line.toLowerCase()
    let sentenceArray = this.line.split(" ")
    for (let i = 0; i < sentenceArray.length; i++) {
      vowelArray.push(sentenceArray[i].charAt(0));
      if (consonants.includes(sentenceArray[i].charAt(0))) {
        justVowelArray.push(sentenceArray[i].charAt(0))
      }
    }
    console.log(justVowelArray)
    return justVowelArray.join(",")
  }
}



// let newSentence = new Sentence("this is the line")
// newSentence.pigLatin()


// checkYConsonant(array) {
//   for (let i = 0; i < array.length; i++) {
//     if ((array[i][0]).toLowerCase() === 'y') {
//       let words = array[i];
//       let transformedWord = words.replace(words[0], "");
//       let result = transformedWord + "yay";
//       console.log(result);
//     }
//   }
// }

// let vowels = ['A', 'E', 'I', 'O', 'U'];
// let consonants = [
//   'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
//   'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 
//   'X', 'Z', 'Y'];

// $("#pig-form").submit(function(event) {
//   event.preventDefault();

//   let input = $('#word').val();
//   let inputArr = input.split(" ");

//   function pigLatin(array) {
//     let isCons = true;


//     for(let i = 0; i < array.length; i++) {
//       let firstLetter = array[i].charAt(0);

//       if(vowels.indexOf(firstLetter.toUpperCase()) !== -1) {
//         array[i] = array[i] + "ay";
//       } else if (consonants.indexOf(firstLetter.toUpperCase()) !== -1) {

//         let wordArr = array[i].split("");
//         let cons = "";
//         let nonCons = "";

//         wordArr.forEach(function(letter) {
//           if(consonants.indexOf(letter.toUpperCase()) !== -1 && isCons) {
//             cons += letter;
//           } else {
//             isCons = false;
//             nonCons += letter;
//           }
//         });
//         isCons = true;
//         array[i] = nonCons + cons + "ay";
//       }

//     }
//     return array;
//   }

// let pigLatinVowel = pigLatin(inputArr).join(" ")
// function pigLatin(str) {