let valorCusto = 100;
let valorVenda = 250;
let imposto = 0.2;
if (valorCusto >= 0 && valorVenda >= 0){
    let valorCustoTotal = (valorCusto * imposto) + valorCusto;
    let lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro);
}else{
    console.log("Valores menores que 0, error.");
}