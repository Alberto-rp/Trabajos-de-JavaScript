function Jugador(nombre, empates=0, victorias=0, derrotas=0){
    this.nombre = nombre
    this.victorias = victorias
    this.derrotas = derrotas
    this.empates = empates

    this.ganar = function(){
        this.victorias++
    }

    this.perder = function(){
        this.derrotas++
    }

    this.empatar = function(){
        this.empates++
    }

}