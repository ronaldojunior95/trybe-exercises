let status;
let candidateNote = 60;

if (candidateNote >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
    status = "aprovado";
} else if (candidateNote < 80 && candidateNote >= 60){
    console.log("Você está na lista de espera.");
    status = "lista";
} else{
    console.log("Você foi reprovado.");
    status = "reprovado";
}

switch(status){
    case "aprovado":
        status = "Aprovado"
        break;
    case "lista":
        status = "Lista"
        break;
    case "reprovado":
        status = "Reprovado"
        break;
    default:
        status = "Não se aplica"
}
console.log(status);