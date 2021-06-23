let angle1 = 10;
let angle2 = 20;
let angle3 = 150;
let sum;
let result;

if (angle1 < 0 || angle2 < 0 || angle3 < 0){
    result = "error";
} else{
    sum = angle1 + angle2 + angle3;
    if(sum === 180){
        result = true;
    }else{
        result = false;
    }
}
console.log(result);

