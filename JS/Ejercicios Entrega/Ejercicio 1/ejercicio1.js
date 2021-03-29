let productoArray = 1;

function Ejercicio1(cadena, booleano, array, ){

    if(booleano == true){

        for(let i of array){
            productoArray *= i
        }
        

        if(productoArray > 100){

            if(cadena.indexOf('a') >= 1){
                console.log("El caracter 'a' no está permitido.")
            }else{
                console.log("Muy bien no has usado la 'a'.")
            }

        }else{
            console.log("El resultado de tu array es insuficiente para comprobar la cadena.")
        }

    }else{

        //ANCHOR Comprobar que la llamada a la función es así
        //funcion()

    }

}


Ejercicio1("Hola mundo",true,[1,2])