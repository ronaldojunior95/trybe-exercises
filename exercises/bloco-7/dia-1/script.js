const button = document.querySelector('#btn');
const counter = document.querySelector('#counter');

let clickCount = 0;

button.addEventListener('click', () => {
	clickCount += 1;
	counter.innerHTML = `Clicks: ${clickCount}`;
});