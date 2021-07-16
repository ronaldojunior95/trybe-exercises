function getValueFromRomane(romaneAlgarism){
    let charRome = {
        I:1, V:5, X:10, L:50, C:100, D:500, M:1000
    };
   let result = 0;
   let arrayNumbers = [];
   let nextIndex = 0;

   for (let index in romaneAlgarism){
       arrayNumbers[index] = charRome[romaneAlgarism[index]];
   }

   for (let i = 0; i < arrayNumbers.length; i += 1){
       if (nextIndex < arrayNumbers.length){
         nextIndex = i + 1; 
         if (arrayNumbers[i] < arrayNumbers[nextIndex]){
             arrayNumbers[nextIndex] -= arrayNumbers[i];
         }
         else{
             result += arrayNumbers[i];
         }
     }
    }
   return result;
}

console.log(getValueFromRomane('MDLXXXIV'));