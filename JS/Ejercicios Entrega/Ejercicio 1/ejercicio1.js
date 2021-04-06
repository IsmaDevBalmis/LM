'use strict';

let productoArray = 1;

function Ejercicio1(cadena, booleano, array, funcion){

    if(typeof cadena == "string" && typeof booleano == "boolean" && Array.isArray(array)){


        if(booleano){

            array.forEach(MyArray)
            /*for(let i of array){
                productoArray *= i
            }*/
            
    
            
    
            if(productoArray > 100){
    
                cadena.indexOf('a') >= 1 ? console.log("El caracter 'a' no está permitido.") : console.log("Muy bien no has usado la 'a'.")
    
    
            }else{
                console.log("El resultado de tu array es insuficiente para comprobar la cadena.")
            }
    
        }else{
    
            console.log(booleano)
            funcion()
    
        }


    }else{
         console.log("No son los datos esperados")
    }

}

let sum = 0

function MyArray(item){

    productoArray *= item

}

Ejercicio1()
Ejercicio1("Hola mundo",true,[1,2,3,4],()=>{alert("Se acabó el juego")})
Ejercicio1("Si",true,[10,20,30,40],()=>{alert("Se acabó el juego")})
Ejercicio1("Si",false,[10,20,30,40],()=>{alert("Se acabó el juego")})