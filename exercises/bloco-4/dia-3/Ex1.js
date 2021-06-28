//Ex 1
let n = 5;
let symbol = '*'
let inputLine = '';

//jeito 1
//for (let i = 0; i < n; i +=1){
  //console.log("******")
//}

//jeito 2
for (let i = 0; i < n; i+= 1){
  inputLine += symbol;
}

for (let i = 0; i < n; i += 1){
  console.log(inputLine);
}