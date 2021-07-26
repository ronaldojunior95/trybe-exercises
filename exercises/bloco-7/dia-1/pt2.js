//Sem Recursividade
const factorial = (number) => {
	let result = number;
	if (number === 0) {
		return 1;
	}
	while(number > 1) {
		result *= number - 1;
		number -= 1;
	}
	return result;
};

//Com Recursividade
const facto = number => number > 1 ? number * facto(number - 1) : 1;

//Ex 2.
const longestWord = str => {
	const longestWord = str.split(' ').sort(function(a ,b) {
		return b.length - a.length;
	})
	console.log(`${longestWord[0]}: ${longestWord[0].length}`);
	return longestWord[0].length;
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");