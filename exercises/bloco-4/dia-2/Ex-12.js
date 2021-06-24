let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = []
//Ex bonus 3
for (let i = 0; i < numbers.length; i += 1){
    let secondIndex = i + 1;
    if (secondIndex < numbers.length){
      let result = numbers[i] * numbers[secondIndex];
      newNumbers.push(result);
    }
    else{
      let result = numbers[i] * 2;
      newNumbers.push(result);
    }
}
console.log(newNumbers);