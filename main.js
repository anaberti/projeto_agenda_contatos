const form = document.getElementById('cadastro');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputFone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNomeAtividade.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputFone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputFone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNome.value = '';
    inputFone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
