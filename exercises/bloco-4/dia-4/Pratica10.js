function sumInRange(num1){
    let result = 0;
    for (let i = 1; i <= num1; i += 1){
        result += i;
    }
    return result;
}
//teste
console.log(sumInRange(5));