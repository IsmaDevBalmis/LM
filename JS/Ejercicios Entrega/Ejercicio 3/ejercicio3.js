
let contador = 1
let datosNumericos

PideDatos()

do{

    datos = Number(prompt("Dime números"));


}while (isNaN(datosNumericos) == false)

function PideDatos(){


   

  
    datosNumericos.sort(compare)

    datosNumericos.forEach(MyArray)

  
  

}

function compare(a, b) {
    if (a < b ) {
      return -1;
    }
    if (a > b ) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  }

function MyArray(numero){

    if (isNaN(numero) == false) {
        
        if (contador % 2 == 0) {
            +(numero)
        }else{
            Number(numero)
        }

        contador++

        console.log(numero)
    }

    

}
