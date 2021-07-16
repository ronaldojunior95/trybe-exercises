function checkTheEndWord(word, ending){
    let wordLowerCase = word.toLowerCase();
    let endLowercase = ending.toLowerCase();
    let size = word.length - ending.length;
    let result = '';
    for (let i = size; i < word.length; i += 1){
       result += wordLowerCase[i];
    }
    if (result === endLowercase){
        return true;
    }else{
        return false;
    }
}
console.log(checkTheEndWord('trybe', 'be'));
console.log(checkTheEndWord('joaofernando', 'fernan'));