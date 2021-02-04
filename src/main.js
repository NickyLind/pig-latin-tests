import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Sentence from './piglatin.js';


$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    const input = $('input#piglatin').val();
    const plArray = input.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];

    checkYConsonant(plArray);

    //   const slicedLetter = array.slice(0, 1).toString().toLowerCase();
    //   array.push(slicedLetter);
    //   array.shift();
    //   const transformedString = array.slice().join("");
    //   result = transformedString + "ay";
    //   console.log(result);
    // }



    // function pigLatin(plArray){}
    // if (plArray[0] === "y") {
    //   const newArray = input.slice(0, 1);
    //   result = (input.append(newArray)).join() + "ay";


    //   const result = pigLatin(plArray);
    // }

    // plArray.forEach(function(beginning) {
    //   if (beginning.slice(0)) === vowels {
    //     beginning.concat("way");
    //   };
    // });






  });
});