let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Ex 8
let numbers2 = [];
for (let i = 1; i < 26; i += 1){
  numbers2.push(i);
}
console.log(numbers2)

//Ex 9
for (let div of numbers2){
    let result = div / 2;
    console.log(result)
}