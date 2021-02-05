import { TestScheduler } from "jest"
import Sentence from "./../src/piglatin.js"

describe('Pig latin sentence', () => {

  let reuseableSentence;

  beforeEach(() => {
    reuseableSentence = new Sentence("this is a sentence, octopus");
  })

  test('should create sentence object', () => {
    expect(reuseableSentence.line).toEqual("this is a sentence, octopus");
  });
  test('should recognize if a sentence starts with a vowel', () => {
    expect(reuseableSentence.pigLatin()).toEqual(false);
    let vowelSentence = new Sentence("Overall, Steven")
    expect(vowelSentence.pigLatin()).toEqual(true);
  });
  test('should recognize the first letter of each word in a sentence', () => {
    expect(reuseableSentence.firstLetterPerWord()).toEqual("t,i,a,s,o")
  });
  test('should recognize if first letter of each word in a sentence is a vowel', () => {
    expect(reuseableSentence.firstLetterPerWordVowel()).toEqual("i,a,o")
  })
  test('should add "way" to the end of words starting with vowels', () => {
    expect(reuseableSentence.addWay()).toEqual("this isway away sentence, octopusway");
  })
  test('should recognize if first letter of each word in a sentence is a consonant', () => {
    expect(reuseableSentence.consonantCheck()).toEqual("t,s")
  })
  test('should move all starting letter consonants to end of word', () => {
    expect(reuseableSentence.moveConsonants()).toEqual("hist is a entences, octopus")
  })
});