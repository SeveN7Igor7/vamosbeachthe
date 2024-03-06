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

    // Atualizar o parágrafo inicialmente
    atualizarHorario();

    // Atualizar o horário a cada segundo
    setInterval(atualizarHorario, 1000);

    // Função para atualizar o horário no parágrafo
    function atualizarHorario() {
        var elementoP = document.getElementById('dataHorario');
        elementoP.textContent = obterDataHoraFormatada();
    }
});
