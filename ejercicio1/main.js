//ejercicio1
// funcion para tomar el color
function tomarColor() {
    let Color = document.getElementById("indexcolor");
    document.getElementById("numero").value=Color.selectedIndex;
    document.getElementById("texto1").value=Color.options[Color.selectedIndex].text;
    document.getElementById("texto2").value=Color.options[Color.selectedIndex].value;
    let value=Color.options[Color.selectedIndex].value;
    document.getElementById("color").value=("#"+value)
}

// tomar el color con addEventListener
let btn=document.getElementById("indexcolor");
btn.addEventListener("change", tomarColor)
 
function name(params) {
    
}

//ejercicio 3
// definir variables
let patronLetra= /[a-zA-Z]/;
let patronVocal= /[aeiouAEIOUáéíóú]/;
let patronNumero=/[0-9]/;
let patronTel= /^607[0-9]{7}/;
let texto1= "--> texto contiene letra o contiene vocal"
let texto2= "--> texto NO contiene letra o NO contiene vocal"
let texto3= "--> texto contiene letra, vocal, y numero"
let texto4= "--> texto NO contiene letra, vocal,numero o a superado el limite de caracteres (20)"
let texto5= "--> el numero es correcto"
let texto6= "--> el numero NO inicia con 607 o a superado el limite de caracteres "

//funcion para validar primer input
function validarLetra() {
    let = primerInput =document.getElementById("textoRegular").value;
    if (patronLetra.test(primerInput) && patronVocal.test(primerInput)){
        document.getElementById("rtaRegular").innerHTML=texto1;
    }else{
        document.getElementById("rtaRegular").innerHTML=texto2;
    }
}
//boton para validar primer input
let btnReg= document.getElementById("btnRegular");
btnReg.addEventListener("click", validarLetra);

//funcion para validar segundo input
function validarNumero() {
    let = segundoInput =document.getElementById("textoRegular2").value;
    if ( patronLetra.test(segundoInput) && patronVocal.test(segundoInput) && patronNumero.test(segundoInput) && segundoInput.length<20) {  
        document.getElementById("rtaRegular2").innerHTML=texto3
    } else{
        document.getElementById("rtaRegular2").innerHTML=texto4
    }
}
// boton para validar segundo input
let btnReg2= document.getElementById("btnRegular2");
btnReg2.addEventListener("click", validarNumero);

//funcion para validar tercer input
function validarTelefono() {
    let tercerInput= document.getElementById("textoRegular3").value;
    if (patronTel.test(tercerInput) && tercerInput.length==10){
        document.getElementById("rtaRegular3").innerHTML=texto5
    }else{
        document.getElementById("rtaRegular3").innerHTML=texto6
    }
}
//boton para validar tercer input
let btnReg3= document.getElementById("btnRegular3");
btnReg3.addEventListener("click",validarTelefono);


//declaro variables para contador de letras ejercicio 4
let contLetras=50


function letrasFaltantes() {
    document.getElementById("contadorLetras").innerHTML=contLetras--;
}
document.getElementById("areakey").addEventListener("keyup",letrasFaltantes)

//funcion para ejercicio 5//
const imagen1= document.querySelector("#imgUno")
const imagen2= document.querySelector("#imgDos")
const imagen3= document.querySelector("#imgTres")
const imagen4= document.querySelector("#imgCuatro")


function muestra(num) {
    let imagen=document.images[num].src;
    let grande=document.images["primera"]
    grande.src=imagen
}

imgUno.addEventListener("click",()=>muestra(1));
imgDos.addEventListener("click",()=>muestra(2));
imgTres.addEventListener("click",()=>muestra(3));
imgCuatro.addEventListener("click",()=>muestra(4));

//ejercicio 6//

const nuevoElemento= document.createElement("p")
//declaro un nodo para el texto
//let inputText=prompt("ingrese el texto")
const nuevoTexto=document.createTextNode("insertado nuevo texto")
//opcion1
const nuevoNodo= nuevoElemento.appendChild(nuevoTexto)
//opcion2
nuevoElemento.appendChild(nuevoTexto)

function fnCrear() {
    //document.getElementById("nuevoTexto").appendChild(nuevoElemento);
    let contenedor= document.getElementById("nuevoTexto");
    contenedor.appendChild(nuevoNodo);
}
function fnCopiar() {
    let copiarNodo=document.getElementById("nuevoTexto");
    copia=copiarNodo.cloneNode(true);
    document.getElementById("copia").appendChild(copia)
}
function fnEliminar() {
    let eliminarNodo=document.getElementById("nuevoTexto");
    eliminarNodo.parentNode.removeChild(eliminarNodo);
}

let btn7=document.getElementById("btnCrear");
btn7.addEventListener("click",fnCrear);

let btn8=document.getElementById("btnDup");
btn8.addEventListener("click",fnCopiar);

let btn9=document.getElementById("btnEliminar");
btn9.addEventListener("click",fnEliminar);