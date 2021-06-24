let note = 100;
let letter;

if (note >= 90 && note <= 100){
    letter = 'A';
}else if (note >= 80 && note < 90){
    letter = 'B';
}else if (note >= 70 && note < 80){
    letter = 'C';
}else if (note >= 60 && note < 70){
    letter = 'D';
}else if (note >= 50 && note < 60){
    letter = 'E';
}else if (note < 50 && note > 0){
    letter = 'F';
}else{
    letter = 'Error.'
}

console.log(letter);