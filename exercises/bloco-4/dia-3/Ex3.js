// Ex 3
let n = 5;
let symbol = '*'
let inputLine = '';
let position = n
for (let line = 0; line < n; line+= 1){
  for (let colum = 0; colum <= n; colum += 1){
    if (colum < position){
      inputLine += ' ';
    }
    else{
      inputLine += symbol;
    }
  }
  position -= 1;
  console.log(inputLine); 
  inputLine = ''
}