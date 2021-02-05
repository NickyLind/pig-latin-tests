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
    return justVowelArray.join(",")
  }
  addWay() { //HERE
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
    return sentenceArray.join(" ")
  }

  consonantCheck() {
      let vowelArray = []
      let justVowelArray = []
      const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
      this.line = this.line.toLowerCase()
      let sentenceArray = this.line.split(" ")
      for (let i = 0; i < sentenceArray.length; i++) {
        vowelArray.push(sentenceArray[i].charAt(0));
        if (consonants.includes(sentenceArray[i].charAt(0))) {
          justVowelArray.push(sentenceArray[i].charAt(0))
        }
      }
      return justVowelArray.join(",")
    }
    // moveConsonants() {
    //   let consArray = []
    //   const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    //   this.line = this.line.toLowerCase()
    //   let sentenceArray = this.line.split(" ")
    //   for (let i = 0; i < sentenceArray.length; i++) {
    //     consArray.push(sentenceArray[i].charAt(0));
    //     if (consonants.includes(sentenceArray[i].charAt(0))) {
    //       if (consonants.includes(sentenceArray[i].charAt(1))) {
    //         if (consonants.includes(sentenceArray[i].charAt(2))) {
    //           sentenceArray = sentenceArray + sentenceArray.charAt(0) + sentenceArray.charAt(1) + sentenceArray.charAt(2) + "ay"
    //           sentenceArray.slice(3)
    //         }
    //         sentenceArray = +sentenceArray.charAt(0) + sentenceArray.charAt(1) + "ay"
    //         sentenceArray.slice(2)
    //       }
    //       sentenceArray = +sentenceArray.charAt(0) + "ay"
    //       sentenceArray.slice(1)
    //     }
    //     console.log(sentenceArray)
    //     return sentenceArray
    //   }
    // }
  moveConsonants() {
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    this.line = this.line.toLowerCase()
    let sentenceArray = this.line.split(" ")
    console.log(sentenceArray)
    for (let i = 0; i < sentenceArray.length; i++) {
      if (consonants.includes(sentenceArray[i].charAt(0)) && consonants.includes(sentenceArray[i].charAt(1)) && consonants.includes(sentenceArray[i].charAt(2))) {
        sentenceArray[i] =+ sentenceArray[i].charAt(0) + sentenceArray[i].charAt(1) + sentenceArray[i].charAt(2) + "ay";
        sentenceArray[i].slice(3);
      } else if (consonants.includes(sentenceArray[i].charAt(0)) && consonants.includes(sentenceArray[i].charAt(1))) {
        sentenceArray[i] =+ sentenceArray[i].charAt(0) + sentenceArray[i].charAt(1) + "ay";
        sentenceArray[i].slice(2);
      } else if (consonants.includes(sentenceArray[i].charAt(0))) {
        sentenceArray[i] =+ sentenceArray[i].charAt(0) + "ay";
        sentenceArray[i].slice(1);
      }
    }
    console.log(sentenceArray);
    return sentenceArray.join(" ");
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