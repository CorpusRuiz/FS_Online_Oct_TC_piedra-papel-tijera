let opciones = ['piedra, papel, tijera'];
let puntuacionUsuario = 0
let puntuacionMaquina = 0ç

function jugadaConsola () {
    return opciones[math.floor(math.random()*3)];
}


function jugada (jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) {
        return "empate";
    }
    else if (jugadaUsuario === 'piedra' && jugadaMaquina === 'tijera' ||
     jugadaUsuario ==='papel' && jugadaMaquina === 'piedra' || 
     jugadaUsuario ==='tijera' && jugadaMaquina === 'papel'){
        return 'ganaste';
    } else {
        return 'perdiste';
    }

}

function actualizar (){
    const resultadoDiv = document.getElementById('resultados');
    const puntosUsuario = document.getElementById('contdaor-usuario');
    const puntosMaquina = document.getElementById('contador-ordenador');
    resultadoDiv.textContent = `resultado ${resultado}`
    if ('resultado' === 'ganaste') {
        puntosUsuario++;
    }
    else if ('resultado' ==='perdiste') {
        puntosMaquina++;
    } puntosUsuario.textContent = `usuario ${puntosUsuario}`;
    puntosMaquina.textContent = `maquina ${puntosMaquina}`;
}
function pulsar () {
    const seleccionMaquina = jugadaConsola();
    const resultado = jugada(jugadaUsuario, jugadaMaquina);
    actualizar();
}
boton-jugada.array.forEach(button => {
    button.addeventlistener('click', () => {
        const jugadaUsuario = button.id;
        const jugadaMaquina = jugadaConsola;
        const resultado = jugada (jugadaUsuario, jugadaMaquina);
        actualizar(resultado);
    })
    
});

