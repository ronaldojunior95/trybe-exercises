const enviarBtn = document.querySelector('#enviar-btn');
const apagarBtn = document.querySelector('#apagar-btn');
let diaValue = '';
let mesValue = '';
let anoValue = '';

enviarBtn.addEventListener('click', sendData);

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
	const dia = document.querySelector('#dia-input').value;
	const mes = document.querySelector('#mes-input').value;
	const ano = document.querySelector('#ano-input').value;
	let result = null
	if (dia > 0 && dia <= 31 || mes > 0 && mes <= 12 || ano > 0) {
		diaValue = dia;
		mesValue = mes;
		anoValue = ano;
		result = diaValue + "/" + mesValue + "/" + anoValue;
	} else {
		result = 'error'
	}
	return result;
}

function createDataFeedback() {
	const body = document.querySelector('#main');
	const div = document.createElement("div");
}






function sendData(event) {
	let canMakeData = verifyDate();
	if (canMakeData === 'error') {
		window.alert("Dia, Mês ou Ano Inválido");
		console.log("como tá: " + canMakeData);
	}
	//event.preventDefault();
	
}