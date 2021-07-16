function highIndex(numbers){
    let numb = numbers[0];
    for (let i = 0; i < numbers.length; i += 1){
        if (numbers[i] > numb){
            numb = numbers.indexOf(numbers[i]);
        }
    }
    return numb;
}
//Teste
let a = [2, 3, 6, 7, 10, 1];
console.log(highIndex(a));