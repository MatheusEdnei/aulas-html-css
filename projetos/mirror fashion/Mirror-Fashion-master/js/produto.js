var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valortamanho]');

function mostraTamanho() {
	outputTamanho.value = inputTamanho.value;
	outputTamanho.textContent = event.target.value;
}

// Chamando a função mostraTamanho se o inputTamanho receber um evento oninput
inputTamanho.oninput = mostraTamanho;

// Para o IE10...
inputTamanho.onchange = mostraTamanho;