const newEmployees = (generateId) => {
	const employees = {
		id1: generateId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
		id2: generateId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
		id3: generateId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
	}
	return employees;
};

const personId = (str) => {
	const obj = { nomeCompleto: str, email: `${str.split(' ').join('_').toLowerCase()}@trybe.com`, };
	return obj;
}

console.log(newEmployees(personId));