let segundos = 0
let intervaloTiempo = null;

function iniciarCronometro(){
    const botonIniciar = document.getElementById('btnIniciar');
    const numeroCronometro = document.querySelector('h2');
    if(intervaloTiempo === null){
        intervaloTiempo = setInterval(()=> {

            segundos++;

           let horas = Math.floor(segundos / 3600);
           let horasFormateadas = horas.toString().padStart(2, '0');

           let minutos = Math.floor((segundos % 3600) / 60);
           let minutosFormateadas = minutos.toString().padStart(2, '0');

           let segundosRestantes = Math.floor(segundos % 60);
           let segundosFormateadas = segundosRestantes.toString().padStart(2, '0');
            numeroCronometro.textContent = `${horasFormateadas}:${minutosFormateadas}:${segundosFormateadas}`;

            botonIniciar.disabled = true;
        }, 1000);
    }
}

function pausarCronometro(){
    const botonIniciar = document.getElementById('btnIniciar');
    if(intervaloTiempo !== null){
        botonIniciar.disabled = false
        clearInterval(intervaloTiempo);
        intervaloTiempo = null;
    }
}

function resetearCronometro(){
    const numeroCronometro = document.querySelector('h2');
    const botonIniciar = document.getElementById('btnIniciar');
    if(intervaloTiempo !== null){
        clearInterval(intervaloTiempo);
        intervaloTiempo = null;
    }

    botonIniciar.disabled = false;
    segundos = 0;
    numeroCronometro.textContent = '00:00:00'

}

document.getElementById('btnIniciar').addEventListener('click', iniciarCronometro);
document.getElementById('btnPausar').addEventListener('click', pausarCronometro);
document.getElementById('btnResetear').addEventListener('click', resetearCronometro);