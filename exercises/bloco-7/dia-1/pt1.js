const testingScope = (escopo) => {
	if (escopo === true) {
		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
		console.log(ifScope);
	} else {
		let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
};

//Usando sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);

//Usando For
function sortedArray(array) {
	for (let i = 1; i < array.length; i += 1) {
		for (let j = 0; j < i; j += 1) {
			if (array[i] < array[j]) {
				let value = array[i];
				array[i] = array[j];
				array[j] = value;
			}
		}
	}
	return array;
};

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉