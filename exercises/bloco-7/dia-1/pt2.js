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

console.log(factorial(5));

//Com Recursividade
const facto = number => number > 1 ? number * facto(number - 1) : 1;

console.log(facto(5));