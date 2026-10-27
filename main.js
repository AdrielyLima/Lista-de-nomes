
const nomes = ["Adriely", "Cavalcante", "Lima"];
const nomesAdicionados = [];

const lista = document.getElementById("lista");
const listaAdicionados = document.getElementById("listaAdicionados");
const input = document.getElementById("inputNome");
const botao = document.getElementById("botao");

function mostrarMeuNome() {
    lista.innerHTML = "";
    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}


function mostrarAdicionados() {
    listaAdicionados.innerHTML = "";
    for (let nome of nomesAdicionados) {
        listaAdicionados.innerHTML += `<li>${nome}</li>`;
    }
}

botao.addEventListener("click", () => {
    if (input.value !== "") {
        nomesAdicionados.push(input.value);
        input.value = "";
        mostrarAdicionados();
    }
});

mostrarMeuNome();