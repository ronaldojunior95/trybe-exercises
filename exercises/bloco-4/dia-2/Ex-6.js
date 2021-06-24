let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Ex 6
let totalOdd = 0;
for (let number of numbers){
  if (number % 2 !== 0){
    totalOdd += 1
    console.log("Total de Numeros Ímpares: " + totalOdd);
  }else if(totalOdd === 0){
    console.log("Nenhum valor ímpar encontrado.")
  }   
}