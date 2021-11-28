window.addEventListener("load", inicializar)
const $ = id => document.getElementById(id)
let contadorRondas = 0

let arrayImagenes = new Array()
arrayImagenes["piedra"] = "img/piedra.png"
arrayImagenes["papel"] = "img/papel.png"
arrayImagenes["tijeras"] = "img/tijeras.png"

let arrayClaves = Object.keys(arrayImagenes)

function inicializar(){
    pc = new Jugador("M4Qu1N4")
    jugador = new Jugador(prompt("Introduce tu nombre", "Jugador1"))

    $("nombreJugador").innerHTML = jugador.nombre
    $("nombreMaquina").innerHTML = pc.nombre

    actualizarMarcador()

    //Listeners:
    $("piedra").addEventListener("click", jugar)
    $("papel").addEventListener("click", jugar)
    $("tijeras").addEventListener("click", jugar)
}

function actualizarMarcador(){
    $("victoriasJugador").innerHTML = jugador.victorias
    $("derrotasJugador").innerHTML = jugador.derrotas
    $("empatesJugador").innerHTML = jugador.empates

    $("victoriasMaquina").innerHTML = pc.victorias
    $("derrotasMaquina").innerHTML = pc.derrotas
    $("empatesMaquina").innerHTML = pc.empates

    $("numPartidas").innerHTML = contadorRondas
}

function juegaMaquina(){
    return arrayClaves[Math.floor(Math.random()*3)]
}

function jugar(event){
    contadorRondas++
    eleccionMaquina = juegaMaquina()

    console.log(`${jugador.nombre} saca: ${event.target.id}`)
    console.log(`${pc.nombre} saca: ${eleccionMaquina}`)

    $("eleccionJugador").src = arrayImagenes[event.target.id]
    $("eleccionMaquina").src = arrayImagenes[eleccionMaquina]

    if(event.target.id == eleccionMaquina){
        $("result").innerHTML = "EMPATE"
        jugador.empatar()
        pc.empatar()
    }else{
        switch(event.target.id){
            case "piedra":
                if(eleccionMaquina == "tijeras"){
                    jugador.ganar()
                    pc.perder()
                    $("result").innerHTML = "GANAS"
                }else if(eleccionMaquina == "papel"){
                    pc.ganar()
                    jugador.perder()
                    $("result").innerHTML = "PIERDES"
                }
                break;
            case "papel":
                if(eleccionMaquina == "piedra"){
                    jugador.ganar()
                    pc.perder()
                    $("result").innerHTML = "GANAS"
                }else if(eleccionMaquina == "tijeras"){
                    pc.ganar()
                    jugador.perder()
                    $("result").innerHTML = "PIERDES"
                }
                break;
            case "tijeras":
                if(eleccionMaquina == "papel"){
                    jugador.ganar()
                    pc.perder()
                    $("result").innerHTML = "GANAS"
                }else if(eleccionMaquina == "piedra"){
                    pc.ganar()
                    jugador.perder()
                    $("result").innerHTML = "PIERDES"
                }
                break;
        }
    }

    actualizarMarcador()
}