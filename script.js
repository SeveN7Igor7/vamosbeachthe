// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Função para formatar o número com zero à esquerda se for menor que 10
    function formatarNumero(numero) {
        return numero < 10 ? '0' + numero : numero;
    }

    // Função para obter a data e hora formatadas
    function obterDataHoraFormatada() {
        var dataAtual = new Date();

        var dia = formatarNumero(dataAtual.getDate());
        var mes = formatarNumero(dataAtual.getMonth() + 1);
        var ano = dataAtual.getFullYear();

        var horas = formatarNumero(dataAtual.getHours());
        var minutos = formatarNumero(dataAtual.getMinutes());
        var segundos = formatarNumero(dataAtual.getSeconds());

        return 'Data: ' + dia + '/' + mes + '/' + ano + ' - Horário: ' + horas + ':' + minutos + ':' + segundos;
    }

    // Função para obter a localização do usuário
    function obterLocalizacao() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);

                // Aqui você pode usar a latitude e longitude conforme necessário
            }, function(error) {
                console.error('Erro ao obter localização: ' + error.message);
            });
        } else {
            console.error('Geolocalização não suportada pelo navegador.');
        }
    }

    // Atualizar o parágrafo inicialmente
    atualizarHorario();

    // Atualizar o horário a cada segundo
    setInterval(atualizarHorario, 1000);

    // Obter localização ao carregar a página
    obterLocalizacao();

    // Função para atualizar o horário no parágrafo
    function atualizarHorario() {
        var elementoP = document.getElementById('dataHorario');
        if (elementoP) {
            elementoP.textContent = obterDataHoraFormatada();
        }
    }
});

// Função para mostrar/ocultar o conteúdo da opção selecionada
function toggleConteudo(conteudoId, setaId) {
    var conteudo = document.getElementById(conteudoId);
    var seta = document.getElementById(setaId);

    // Verifica se o conteúdo está visível e alterna
    if (conteudo.style.display === 'block') {
        conteudo.style.display = 'none';
        seta.innerHTML = '&#9660;'; // Seta para baixo
    } else {
        conteudo.style.display = 'block';
        seta.innerHTML = '&#9650;'; // Seta para cima
    }
}