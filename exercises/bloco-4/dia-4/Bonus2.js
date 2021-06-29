function evenNumbers(numbers){
    let even = []
    for (i in numbers){
        for (number of numbers[i]){
            if (number % 2 === 0){
                even.push(number);
            }
        }
    }
    return even;
}
//teste
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(evenNumbers(vector));