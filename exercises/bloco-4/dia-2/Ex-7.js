let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Ex 7
let min = numbers[0];
for (let i = 0; i < numbers.length; i += 1){
    let value = numbers[i];
    if (value < min){
      min = value;
    }
}
console.log(min);