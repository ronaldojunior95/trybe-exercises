function reptedNumber(numbersArray){
let numbers = {};
let max = '';
let maxi= 0;
for (index of numbersArray){
    if (numbers[index]){
        numbers[index]+= 1;
    }else{
        numbers[index] = 1;
    }
    if (maxi < numbers[index]){
        max = index;
        maxi = numbers[index];
    }
}
    return max;
}


//
let a = [2, 3, 2, 5, 8, 2, 3];
console.log(reptedNumber(a));