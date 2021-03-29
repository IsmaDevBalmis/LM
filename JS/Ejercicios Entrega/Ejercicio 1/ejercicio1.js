let productoArray = 1;

function Ejercicio1(cadena, booleano, array, ){
    
    //Primero debes comprobar que los tipos son los esperables

    if(booleano == true){ //No hace falta poner == true

        //REcorre con foreach (en arrays y funciones está sumar todos con un foreach, aquí tienes que multiplicar)
        for(let i of array){
            productoArray *= i
        }
        

        if(productoArray > 100){

            //Este puede estar con una ternaria y comprimes más
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
//Pon más llamadas, como las que tienes en el enunciado
