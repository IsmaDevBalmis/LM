
let contador = 1
let datosNumericos = []
//let datosNumericos2 = []
let result = []

PideDatos()



function PideDatos() {


    do {

        datos = prompt("Dime números")
        datosNumericos.push(datos)

    } while (isNaN(datos) == false)


    datosNumericos.sort(compare)


    datosNumericos.forEach(MyArray)




    console.log("-------------------------")

    console.log(result)

    //datosNumericos2.push(datosNumericos.forEach(MyArray2)) 

    //console.log(datosNumericos2)


}

function compare(a, b) {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    // a debe ser igual b
    return 0;
}

function MyArray(numero) {

    if (isNaN(numero) == false) {

        if (contador % 2 == 0) {
            +(numero)
        } else {
            Number(numero)
        }

        contador++
        console.log(numero)

        result = datosNumericos.filter(numero => numero % 3 == 0);

    }



}

/*
function MyArray2(numero){

    if (isNaN(numero) == false) {
        if(numero%3 == 0){
            datosNumericos2.push(numero)
        }

    }



}
*/