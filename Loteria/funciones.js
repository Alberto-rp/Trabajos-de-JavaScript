window.addEventListener("load", inicializar)
const $ = id => document.getElementById(id)

function inicializar(){
    $("Gordo").innerHTML = salidaString(gordo)
    $("SegundoPremio").innerHTML = salidaString(segundoPremio)
    $("TercerPremio").innerHTML = salidaString(tercerPremio)
    
    $("CuartoPremio1").innerHTML = salidaString(cuartoPremio1)
    $("CuartoPremio2").innerHTML = salidaString(cuartoPremio2)
    
    $("QuintoPremio1").innerHTML = salidaString(quintoPremio1)
    $("QuintoPremio2").innerHTML = salidaString(quintoPremio2)
    $("QuintoPremio3").innerHTML = salidaString(quintoPremio3)
    $("QuintoPremio4").innerHTML = salidaString(quintoPremio4)
    $("QuintoPremio5").innerHTML = salidaString(quintoPremio5)
    $("QuintoPremio6").innerHTML = salidaString(quintoPremio6)
    $("QuintoPremio7").innerHTML = salidaString(quintoPremio7)
    $("QuintoPremio8").innerHTML = salidaString(quintoPremio8)

    $("disparador").addEventListener("click", mostrarBruto)

}
/*FUNCIONES*/

//Funcion que saca el numero bonito 00000
function salidaString(num) {
    salidaFor = "" + num;
    while (salidaFor.length < 5) {
        salidaFor = "0" + salidaFor;
    }
    return salidaFor;
}

//Funcion que hace un numero random no repetido;
function randomizador(arrayEntrada) {
    do {
        salida = Math.floor(Math.random() * 100000);
    } while (arrayEntrada.includes(salida));
    return salida;
}

function mostrarBruto(){
    let returnedString = "<br><table><tr>"

    contadorSalto = 0;
        for(i = 0; i <= 99999; i++){
        contadorSalto++;
        switch(true){
            case premios.includes(i):
                returnedString += "<td class='gordo'>"+salidaString(i)+"</td>"
                break;
            case pedrea.includes(i):
                returnedString += "<td class='pedrea'>"+salidaString(i)+"</td>"                
                break;
            case aprox.includes(i):
                returnedString += "<td class='aprox'>"+salidaString(i)+"</td>"
                break;
            case centenas.includes(i % 1000):
                returnedString += "<td class='centenas'>"+salidaString(i)+"</td>"
                break;
            case decenas.includes(i % 100):
                returnedString += "<td class='decenas'>"+salidaString(i)+"</td>"
                break;
            case reintegro.includes(i % 10):
                returnedString += "<td class='blanquito'>"+salidaString(i)+"</td>"
                break;

            default:
                returnedString += "<td>"+salidaString(i)+"</td>"

        }
        

        //Salto de línea
        if(contadorSalto == 21){
            returnedString += "</tr><tr>"
            contadorSalto = 0;
        }
    }
    returnedString += "</tr>"
    returnedString += "</table>"

    $("salidaBruto").innerHTML = returnedString
}

/*---------------------------------------------------------------------*/

contadorGanadores = 0;

/*PREMIOS*/

//GORDO: (1)
gordo = Math.floor(Math.random() * 99999);
let premios = [gordo];

//SEGUNDO PREMIO (1)
segundoPremio = randomizador(premios);
premios.push(segundoPremio);

//Tercer Premio (1)
tercerPremio = randomizador(premios);
premios.push(tercerPremio);

//Cuartos Premios (2)
cuartoPremio1 = randomizador(premios);
premios.push(cuartoPremio1);

cuartoPremio2 = randomizador(premios);
premios.push(cuartoPremio2);

//Quintos premios (8)
quintoPremio1 = randomizador(premios);
premios.push(quintoPremio1);

quintoPremio2 = randomizador(premios);
premios.push(quintoPremio2);

quintoPremio3 = randomizador(premios);
premios.push(quintoPremio3);

quintoPremio4 = randomizador(premios);
premios.push(quintoPremio4);

quintoPremio5 = randomizador(premios);
premios.push(quintoPremio5);

quintoPremio6 = randomizador(premios);
premios.push(quintoPremio6);

quintoPremio7 = randomizador(premios);
premios.push(quintoPremio7);

quintoPremio8 = randomizador(premios);
premios.push(quintoPremio8);

//Pedrea
let pedrea = [null];
for (i = 0; i < 1794; i++) {
    pedrea.push(randomizador(premios));
}

//Aproximaciones
let aprox = [null];
aprox.push(gordo - 1);
aprox.push(gordo + 1);

aprox.push(segundoPremio - 1);
aprox.push(segundoPremio + 1);

aprox.push(tercerPremio - 1);
aprox.push(tercerPremio + 1);

//Centenas del primer, segundo, tercer y cuartos premios
let centenas = [null];
centenas.push(gordo % 1000);
centenas.push(segundoPremio % 1000);
centenas.push(tercerPremio % 1000);
centenas.push(cuartoPremio1 % 1000);
centenas.push(cuartoPremio2 % 1000);

//Decenas del primer, segundo y tercer premio
let decenas = [null];
decenas.push(gordo % 100);
decenas.push(segundoPremio % 100);
decenas.push(tercerPremio % 100);

//Reintegro
let reintegro = [gordo % 10];