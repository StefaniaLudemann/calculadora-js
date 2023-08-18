//CALCULADORA


//eventos onclick
//esta funcion agrega los numeros a la calculadora
function agregar(valor){ //valor recibe el 1,2,3,etc
    document.getElementById('pantalla').value+=valor
}

//esta funcion borra
function borrar(){
    document.getElementById('pantalla').value=""
}

function calcular(){
    const valorPantalla=document.getElementById('pantalla').value
    const resultado=eval(valorPantalla) //eval es un metodo que evalua una operacion matematica. toma un string y ejecuta y lo almacena en resultado
    document.getElementById('pantalla').value=resultado
}