// script.js

document.addEventListener('DOMContentLoaded', function () {
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
    
    document.addEventListener('DOMContentLoaded', function () {
        // Função para obter a localização do usuário
        function obterLocalizacao() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
    
                    console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
    
                    // Aqui você pode usar a latitude e longitude conforme necessário
                }, function (error) {
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
    

    // Função para obter a localização do usuário
    function obterLocalizacao() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);

                // Aqui você pode usar a latitude e longitude conforme necessário
            }, function (error) {
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

function toggleOpcoes(opcaoId, setaId) {
    var opcao = document.getElementById(opcaoId);

    // Verifica se a opção existe e tem conteúdo
    if (opcao) {
        var conteudo = document.getElementById(opcaoId);

        // Verifica se o conteúdo está visível e alterna
        if (conteudo.style.display === 'none' || window.getComputedStyle(conteudo).display === 'none') {
            conteudo.style.display = 'block';
        } else {
            conteudo.style.display = 'none';
        }

        var seta = document.getElementById(setaId);

        // Alterna a classe para rotacionar a seta
        if (opcao.classList.contains('opcao-aberta')) {
            opcao.classList.remove('opcao-aberta');
            seta.innerHTML = '&#9660;'; // Seta para baixo
        } else {
            opcao.classList.add('opcao-aberta');
            seta.innerHTML = '&#9650;'; // Seta para cima
        }
    }
}
