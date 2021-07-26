const button = document.querySelector('#btn');
const counter = document.querySelector('#counter');

const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bash'];

let clickCount = 0;

button.addEventListener('click', () => {
	clickCount += 1;
	counter.innerHTML = `Clicks: ${clickCount}`;
});

function changeX(str, newStr) {
	let splits = str.split(' ');
	let result = '';

	for (let i = 0; i < splits.length; i += 1) {
		if (splits[i] === 'x') {
			splits[i] = newStr;
		}
		result += `${splits[i]} `;
	}
	return result;
}

function mySkills(str, array) {
	const firstString = `${str}Minhas cinco principais habilidades são:`;
	let result = ''
	array.sort();

	for (let i = 0; i < array.length; i += 1) {
		result += `${array[i]} 
`;}

	console.log(`${firstString}
${result}`);
}

mySkills(changeX('Tryber x aqui!', 'Ronaldo'), skills);


