document.addEventListener('DOMContentLoaded', function() {
    // Obtendo a data atual
    var dataAtual = new Date();

    // Extraindo informações de data e horário
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Lembre-se que os meses começam do zero
    var ano = dataAtual.getFullYear();

    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    // Criando uma string formatada
    var dataHoraFormatada = 'Data: ' + dia + '/' + mes + '/' + ano + ' - Horário: ' + horas + ':' + minutos + ':' + segundos;

    // Exibindo as informações no console
    console.log(dataHoraFormatada);

    // Adicionando a string formatada ao parágrafo no HTML
    var elementoP = document.getElementById('dataHorario');
    elementoP.textContent = dataHoraFormatada;
});
