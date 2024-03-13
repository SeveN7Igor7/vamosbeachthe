document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    
    var nomeArena = urlParams.get('nome');
    var zona = urlParams.get('zona');
    var bairro = urlParams.get('bairro');
    var horario = urlParams.get('horario');
    var valor = urlParams.get('valor');
    var imagem = urlParams.get('imagem');

    // Atualiza os elementos na página com os detalhes da arena
    document.getElementById('nomeArena').textContent = nomeArena;
    document.getElementById('zona').textContent = 'Zona: ' + zona;
    document.getElementById('bairro').textContent = 'Bairro: ' + bairro;
    document.getElementById('horario').textContent = 'Horário: ' + horario;
    document.getElementById('valor').textContent = 'Valor: ' + valor;

    // Define a fonte da imagem
    var imagemElement = document.getElementById('imagem');
    imagemElement.src = imagem;
    imagemElement.alt = 'Imagem da Arena ' + nomeArena;
});
