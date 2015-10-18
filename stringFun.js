var original = "THIS IS A SENTENCE THAT IS IN CAPS.";

function seperate(sentence){ 
  var newSentence = sentence.split(' '); 
  return newSentence;
}

function wordNormalize(word){
  var newWord = word.split('');
  for(var i = 0; i<newWord.length; i++){
    if(i !== 0){
      newWord[i] = newWord[i].toLowerCase();
    } 
  }

  return newWord.join('');
}

function makeWord(){}

function normalizeSentence(sentence){
  var words = seperate(sentence);
  var newSentence = [];

  for(var i = 0; i<words.length; i++){
    newSentence.push(wordNormalize(words[i]));
  }

  return newSentence.join(' ');
}

console.log(normalizeSentence(original));  
