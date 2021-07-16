const enviarBtn = document.querySelector('#enviar-btn');
const apagarBtn = document.querySelector('#apagar-btn');
const dia = document.querySelector('#datepicker');

function createCalendar() {
	flatpickr('#datepicker', {dateFormat: 'd/m/Y', locale: 'pt'});
}

createCalendar();

function createBrazilStates() {
	const estadosHolder = document.querySelector('#estado-input')
	const siglas = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
	const nomes = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

	for (let i = 0; i < siglas.length; i += 1) {
		const option = document.createElement("option");
		option.value = siglas[i];
		option.text = nomes[i];
		estadosHolder.appendChild(option);
	}
}

createBrazilStates();

function verifyDate() {
	let value = dia.value;
	console.log(value);
	return value;
}

function verifyInputValues() {
	const inputs = document.querySelectorAll('.inputs');
	let result = true;
	for (let i = 0; i < inputs.length; i += 1) {
		const inputValue = inputs[i].value;
		if (inputValue === '') {
			result = false;
			break;
		}
	}
	return result;
}

function getIdValues(div) {
	const inputs_id = document.querySelectorAll('.inputs-id');
	const labels_id = document.querySelectorAll('.labels-id');
	for (let i = 0; i < labels_id.length; i += 1) {
		const inputValue = inputs_id[i].value;
		const innerText = labels_id[i].innerText;
		const pre = document.createElement("pre");
		pre.innerText += innerText + inputValue;
		div.appendChild(pre);
	}
}

function getAdressValues(div) {
	const labels_ende = document.querySelectorAll('.labels-ende');
	const inputs_ende = document.querySelectorAll('.inputs-ende');

	for (let i = 0; i < labels_ende.length; i += 1) {
		const inputValue = inputs_ende[i].value;
		const innerText = labels_ende[i].innerText;
		const pre = document.createElement("pre");
		pre.innerText += innerText + inputValue;
		div.appendChild(pre);
	}
}

function getHouseValues(div) {
	const moradia = document.querySelectorAll('.moradia-input');
	const labels_moradia = document.querySelectorAll('.labels-moradia');
	for (let i = 0; i < moradia.length; i += 1) {
		const moradiaValue = moradia[i].checked;
		if (moradiaValue) {
			const innerText = 'Moradia:';
			const inputValue = labels_moradia[i].innerText;
			const pre = document.createElement("pre");
			pre.innerText += innerText + inputValue;
			div.appendChild(pre);
		}
	}
}

function getCurriculumValues(div) {
	const labels_curriculo = document.querySelectorAll('.labels-curriculo');
	const inputs_curriculo = document.querySelectorAll('.inputs-curriculo');

	for (let i = 0; i < labels_curriculo.length; i += 1) {
		const inputValue = inputs_curriculo[i].value;
		const innerText = labels_curriculo[i].innerText;
		const pre = document.createElement("pre");
		pre.innerText += innerText + inputValue;
		div.appendChild(pre);
	}	
}

function getDateValues(div) {
	const value = verifyDate();
	const text = 'Data de início:'
	const pre = document.createElement("pre");
	pre.innerText += text + value;
	div.appendChild(pre);
}

function createDataFeedback() {
	const body = document.querySelector('#main');
	const div = document.createElement("div");
	const oldDiv = document.querySelector('.data-div');
	const divError = document.querySelector('.error-div');

	if (divError !== null) {
		body.removeChild(divError);
	}
	if (oldDiv !== null) {
		body.removeChild(oldDiv);
	} 

	getIdValues(div);
	getAdressValues(div);
	getHouseValues(div);
	getCurriculumValues(div);
	getDateValues(div);
	div.classList.add('data-div');
	body.appendChild(div);
}

function showErrorMensage() {
	const body = document.querySelector('#main');
	const div = document.createElement("div");
	const divError = document.querySelector('.error-div');
	let canMakeData = verifyDate();
	if (canMakeData === null) {
		window.alert("Dia, Mês ou Ano Inválido");
	}
	if (divError !== null) {
		body.removeChild(divError);
	} 
	div.innerText = "Impossivel Enviar, falta campo para preencher!"
	div.classList.add('error-div');
	body.appendChild(div);
}

function sendData(event) {
	event.preventDefault();
	let inputsValues = verifyInputValues();
	if (inputsValues === false) {
		showErrorMensage();
	} else {
		createDataFeedback();
	}
}

function eraseValues() {
	const inputs = document.querySelectorAll('.inputs');
	const dataDiv = document.querySelector('.data-div');
	for (let i = 0; i < inputs.length; i += 1) {
		inputs[i].value = '';
	}
	if (dataDiv !== null) {
		document.querySelector('body').removeChild(dataDiv);
	}
}

enviarBtn.addEventListener('click', sendData);
apagarBtn.addEventListener('click', eraseValues);