let inputName = document.getElementById("name");
let inputNum = document.getElementById("numero");
let inputFech = document.getElementById("fecha");
let inputCvv = document.getElementById("cvv");
let submitButton = document.getElementById("button");

const ENTITY_INVALID = "Este nombre no coincide con ninguna entidad";
const NUM_INVALID = "El numero no coincide con su entidad";
const FECH_INVALID = "Fecha Incorrecta";
const CVV_INVALID = "Solo 3 dígitos";

inputName.addEventListener("input", vName);
inputNum.addEventListener("input", vNum);
inputFech.addEventListener("input", validaFech);
inputCvv.addEventListener("input", vCvv);

let fechV = false;
let ccV = false;

function check() {
    if (fechV && ccV) {
        submitButton.classList.remove("notAvailable");
        submitButton.disabled = false;
    } else {
        submitButton.classList.add("notAvailable");
        submitButton.disabled = true;
    }
}

function vName() {
    let regexName = /^(MasterCard|Visa|American Express)$/i;
    let nameV = regexName.test(inputName.value);
    inputName.className = nameV ? "success" : "error";
    inputName.parentNode.getElementsByTagName("small")[0].innerHTML = nameV ? "" : ENTITY_INVALID;
    check();
}

function vNum() {
    let regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;  //Visa
    let regexMaster = /^5[1-5][0-9]{14}$/;  //MasterCard
    let regexAmerican = /^3[47][0-9]{13}$/; //American Express

    let numV = false;
    if (inputName.value.toLowerCase() === "visa") {
        numV = regexVisa.test(inputNum.value);
    } else if (inputName.value.toLowerCase() === "mastercard") {
        numV = regexMaster.test(inputNum.value);
    } else if (inputName.value.toLowerCase() === "american express") {
        numV = regexAmerican.test(inputNum.value);
    }

    inputNum.className = numV ? "success" : "error";
    inputNum.parentNode.getElementsByTagName("small")[0].innerHTML = numV ? "" : NUM_INVALID;
    check();
}

function validaFech() {
    let regexFech = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    fechV = regexFech.test(inputFech.value);
    inputFech.className = fechV ? "success" : "error";
    inputFech.parentNode.getElementsByTagName("small")[0].innerHTML = fechV ? "" : FECH_INVALID;
    check();
}

function vCvv() {
    let regexCvv = /^[0-9]{3}$/;
    ccV = regexCvv.test(inputCvv.value);
    inputCvv.className = ccV ? "success" : "error";
    inputCvv.parentNode.getElementsByTagName("small")[0].innerHTML = ccV ? "" : CVV_INVALID;
    check();
}

submitButton.addEventListener('click', event => {
    event.preventDefault();
    if (!submitButton.disabled) {
        alert("Enviado");
    }
});
