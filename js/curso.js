'use strict'
console.log('JS Cargada');

//objetos como una estructura de c, puedes meterle funciones, variables, nombres, array.. TAMBIEN LE PUEDES CREAR UN METODO
let objeto =
{
  atributo: 78,
  nombre: 'PERICO PALOTES',
  parejas: ['Maria','Juan','Roberto'],
  metodo2: function(num)
  {
    console.log("Metodo 2: "+ num * 2);
  }
};

console.log(objeto);
console.log('Me llano' + objeto.nombre);
console.log ('Una de mis parejas es ' + objeto.parejas[1]);

function funcion1()
{
  document.write("Me encanta javascript <br/>");
}

funcion1();

let num = 7; //Declaro num y le asigno 7, es tipo number

num = funcion1; // le asigno la funcion a num, ahora pasa de num a funcion, LA VARIABLE NUM YA NO ES 7 ES LA FUNCION1()

num(); //La ejecuto, puedo llamar a num() y a funcion1() para lo mismo. Son como variables

objeto.metodo = funcion1; //Es un atributo que se le pone al objeto, le das a ese atributo la funcion y si la llamas sale la funcion

objeto.metodo();

objeto.metodo2(88);

//parametros de funciones
function suma(a,b = 4)
{
  return a+b;
}

console.log(suma(5,8));
console.log(suma(2));
console.log(suma());

function ejecuta (callback)
{
  console.log("Ejecutando....")
  callback();
}

ejecuta(funcion1);

try
{
  let num1 = 45;
  let nombre = "Juanjosa"
  console.log(num1.substr(2,4)) //Te da la cantidad de caracteres que quieres, primero es inicio y despuies la longitus
  //console.log( num1 * 'zapato')
  //ejecuta(funcion2);
}
 catch (exception) //Captura el error,y puede actuar
{
  console.log("Ha cometido un fallo")
  console.log( exception) //Muestra el error
}
finally
{
  console.log( "Ejecto el finally"); //Siempre muestra eso
}
