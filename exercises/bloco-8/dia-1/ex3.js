const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const result = (gabarito, respostasEstudante, check) => {
	return check(gabarito, respostasEstudante);
};

const checkAnswer = (gabarito, respostasEstudante) => {
	let count = 0;
	for (let index = 0; index < gabarito.length; index += 1) {
		count = gabarito[index] === respostasEstudante[index] ? count += 1 : count -= 0.5;
	}
	return count;
};

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));