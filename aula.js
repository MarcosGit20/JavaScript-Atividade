
const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    mensagem.textContent = '';
    mensagem.classList.remove('positivo', 'negativo');

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
        mensagem.classList.add('positivo');
    } else {
        mensagem.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        mensagem.classList.add('negativo');
    }
});