
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);

        let lista = document.getElementById('listaAmigos');
        limparLista(lista);
        amigos.forEach(amigo => {
            let item = document.createElement('p');
            item.textContent = amigo;
            lista.appendChild(item);
        });
        document.getElementById('amigo').value = '';
    }
}

function embaralhar(array) {
    for (let i = (array.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigo() {
    if (amigos.length >= 2) {
         let amigosEmbaralhados = embaralhar([...amigos]);
        let listaSorteio = document.getElementById('resultado');
        limparLista(listaSorteio);
        let amigo1 = amigosEmbaralhados[0];
        let item = document.createElement('p');
        item.textContent = "O amigo secreto sorteado é: "+ amigo1;
        listaSorteio.appendChild(item);
    } else {
        alert('Adicione pelo menos dois amigos!');
    }
}

function limparLista(lista) {
    lista.innerHTML = '';
}