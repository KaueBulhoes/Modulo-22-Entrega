AOS.init();

const dataDoEvento = new Date("Dec 12 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000*60*60*24;
    const horasEmMs = 1000*60*60;
    const minutosEmMs = 1000*60;

    const diasAteEvento = Math.floor(distanciaDoEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaDoEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaDoEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

}, 1000);