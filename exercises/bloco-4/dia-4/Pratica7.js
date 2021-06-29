function lesserIndex(numbers){
    let numb = numbers[0];
    let result;
    for (let i = 0; i < numbers.length; i += 1){
        if (numb < numbers[i]){
            numb = numb;
        }
        else{
            numb = numbers[i];
        }
    }
    result = numbers.indexOf(numb);
    return result;
}
//Teste
let a = [2, 4, 6, 7, 10, 10, -3];
console.log(lesserIndex(a));