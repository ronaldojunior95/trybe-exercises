const sorteio = (num, check) => {
	if (check(num)) {
		return 'Parabéns você ganhou';
	} else {
		return 'Tente Novamente';
	}
};

const checkDraw = (num) => {
	const randomNumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
	let result = false;
	if (randomNumber === num) {
		result = true;
	}
	return result;
};

console.log(sorteio(3, checkDraw));