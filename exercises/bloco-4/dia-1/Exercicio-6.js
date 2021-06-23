let pieceName = "bispo";
let pieceNameLower = pieceName.toLowerCase();
let result;

if (pieceNameLower === "rainha"){
    pieceNameLower = "dama"
}else if (pieceName === "peao"){
    pieceNameLower = "peão";
}

switch (pieceNameLower){
    case "rei":
        result = "REI - Movimento: somente anda uma casa por lance em todas as direções. Não pode situar-se em casa sob domínio de peça adversária, pois o rei não pode se entregar ou se colocar em situação de XEQUE jamais. Esta jogada não é permitida e ambos os jogadores devem estar atentos."
        break;
    case "dama":
        result = "RAINHA ou DAMA - Movimento: peça mais poderosa e versátil do tabuleiro, a dama pode movimentar-se como a torre e como o bispo, ou seja, anda tanto em paralelas (linhas ou colunas) quanto em diagonais, tantas casas quanto se desejar, desde que haja espaço no tabuleiro."
        break;
    case "torre":
        result = "TORRE - Movimento: o movimento executado pelas torres é sempre em paralelas (linhas ou colunas), quantas casas desejar desde que haja espaço livre."
        break;
    case "bispo":
        result = "BISPO - Movimento: seu movimento é sempre em diagonal, obedecendo à cor de sua casa inicial, ou seja, o bispo da casa branca não pode ocupar uma casa preta e vice-versa, ficando eternamente na mesma cor desde o inicio até o final do jogo."
        break;
    case "cavalo":
        result = "CAVALO - Movimento: seu movimento é sempre em diagonal, obedecendo à cor de sua casa inicial, ou seja, o bispo da casa branca não pode ocupar uma casa preta e vice-versa, ficando eternamente na mesma cor desde o inicio até o final do jogo."
        break;
    case "peão":
        result = "PEÃO - Movimento: uma casa desocupada à frente. Quando o peão está em sua casa inicial, pode mover-se uma ou duas casas adiante, somente no primeiro movimento de cada peão. Se você andar pela primeira vez com o peão somente uma casa, na próxima jogada, não é permitido usar a opção de abrir com 2 casas. O Peão não pode andar para trás em hipótese alguma."
        break;
    default:
        result = "Não existe essa peça no Xadrez."
}
console.log(result);