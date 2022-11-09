
// Reloj de Sololearn

function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    document.body.innerHTML = hours + ":" + mins + ":" + secs;
}

// para llamar a la funcion cada 1000 ms (1 segundo), usamos setInterval();
setInterval(printTime, 1000);