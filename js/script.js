
let inputName = document.getElementById("name");
let inputNum = document.getElementById("numero");
let inputFech = document.getElementById("fecha");
let inputCvv = document.getElementById("cvv");
let submitButton = document.getElementById("button");

const ENTITY_INVALID = "Este nombre no coincide con ninguna entidad";
const NUM_INVALID = "El numero no coincide con su entidad";
const FECH_INVALID = "Fecha Incorrecta";
const CVV_INVALID = "Solo 3 dígitos";


inputName.addEventListener("blur", vName);
inputNum.addEventListener("blur", vNum);
inputFech.addEventListener("blur", validaFech);
inputCvv.addEventListener("blur", vCvv);

let fechV = false;
let ccV = false;


function check() {
    if (fechV && ccV) {
        submitButton.classList.remove("notAvailable");
    } else {
        submitButton.classList = "notAvailable";
    }
}

function vName() {

    if (inputName === numVV || inputName === numVM || inputName === numVA) {

        inputName.parentNode.getElementsByTagName("small")[0].innerHTML = ENTITY_INVALID;

    } else {
        inputName.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }


}

function vNum() {

    let numVV = "Visa";
    let numVM = "MasterCard";
    let numVA = "AmericanExpess";

    let regexVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;  //Visa
    let regexMaster = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;  //MasterCard
    let regexAmerican = /^3[47][0-9]{13}$/; //American

    numVV = regexVisa.test(inputNum.value);
    numVM = regexMaster.test(inputNum.value);
    numVA = regexAmerican.test(inputNum.value);

    inputNum.className = numVV ? "success" : "error";
    inputNum.className = numVM ? "success" : "error";
    inputNum.className = numVA ? "success" : "error";

    if (!numVV && !numVM && !numVA) {
        // Obtenemos la etiqueta <small> del div al que pertenece el input
        inputNum.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    } else {
        inputNum.parentNode.getElementsByTagName("small")[0].innerHTML = NUM_INVALID;
    }
// let reg = new RegExp("(((0[123456789]|10|11|12)/(([1][9][0-9][0-9])|([2][0-9][0-9][0-9]))))");

}

function validaFech() {

  
    let pater = /'^(0[1-9]|1[0-2])\/([1-9][0-9])$'/;

    fechV = pater.test(inputFech.value);
    inputFech.className = fechV ? "success" : "error";

    if (!fechV) {
        inputFech.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    } else {
        inputFech.parentNode.getElementsByTagName("small")[0].innerHTML = FECH_INVALID
    }
    check();

}

function vCvv() {

    let patron = /'^[0-9]{3}$'/;

    ccV = patron.test(inputCvv.value);
    inputCvv.className = ccV ? "success" : "error"; 


    if (!ccV) {
        inputCvv.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    } else {
        inputCvv.parentNode.getElementsByTagName("small")[0].innerHTML = CVV_INVALID

    }
    check();
}

form.addEventListener('submit', event => {
    /*
    Para detener el envío del formulario, llamar al método preventDefault() del objeto de evento
    dentro del controlador de eventos de envío de esta manera:
    */
    event.preventDefault();
  
    /*
    Para enviar el formulario tras validarlo, llamariamos al método submit() del objeto del
    formulario:
    */
    form.submit();
  
    // Sólo probamos que funciona con un alert()
    alert("Enviado");
  
  
  });
  