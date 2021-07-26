const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

function addNewKeyAndValue(obj, key, value) {
	obj[key] = value;
}

addNewKeyAndValue(lesson2, 'turno', 'manhã');

const keys = (obj) => Object.keys(obj);

const size = (obj) => keys(obj).length;

const values = (obj) => Object.values(obj);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const totalAlunos = (obj) => obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;

const getValueByNumber = (obj, id) => values(obj)[id];

const verifyPair = (obj, key, value) => obj[key] === value ? true : false;

const verifyMathClass = (obj) => {
	let total = 0;
	const arrayObj = keys(obj);
	for (let i = 0; i < arrayObj.length; i += 1) {
		if (obj[arrayObj[i]].materia === 'Matemática'){
			total += obj[arrayObj[i]].numeroEstudantes;
		}
	}
	return total;
};

console.log(verifyMathClass(allLessons));