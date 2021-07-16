function checkPalidrome(word){
    let lowercase = word.toLowerCase();
    let palidrome = lowercase.split("").reverse().join("");
    if (palidrome === lowercase){
        return true;
    }else{
        return false;
    }
}

console.log(checkPalidrome("Arara"));

