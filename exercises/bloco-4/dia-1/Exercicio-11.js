let salarioBruto = 3000;
let salarioLiquido;
let salarioInss;
let inss;
let ir;
let descontoIR;
let descontoInss;

if (salarioBruto <= 1556.94){
    inss = 0.08;
    descontoInss = salarioBruto * inss
    salarioInss = salarioBruto - descontoInss;
}else if(salarioBruto <= 2594.92){
    inss = 0.09;
    descontoInss = salarioBruto * inss
    salarioInss = salarioBruto - descontoInss;
}else if(salarioBruto <= 5189.82){
    inss = 0.11;
    descontoInss = salarioBruto * inss
    salarioInss = salarioBruto - descontoInss;
}else {
    inss = 570.88;
    descontoInss = inss;
    salarioInss = salarioBruto - descontoInss;
}

if (salarioInss <= 1903.98){
    ir = 0;
    salarioLiquido = salarioInss;
} else if(salarioInss <= 2826.65){
    ir = 0.075;
    descontoIR = (salarioInss * ir) - 142.80;
}else if(salarioInss <= 3751.05){
    ir = 0.15;
    descontoIR = (salarioInss * ir) - 354.80;
}else if(salarioInss <= 4664.68){
    ir = 0.225;
    descontoIR = (salarioInss * ir) - 636.13;
}else{
    ir = 0.275;
    descontoIR = (salarioInss * ir) - 869.36;
}
salarioLiquido = salarioInss - descontoIR;
console.log("Salario Liquido:" + salarioLiquido + " INSS:" + descontoInss + " IR:" + descontoIR);