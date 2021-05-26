"use strict"

const depositos = [];


const retiros = [];


/* TOTAL */
let total = () => {
    let total = totalDepositos() - totalRetiros();
    return total;
}

/*  GENERAR TOTAL DEPOSITOS */

let totalDepositos = () => {
    let totalD = 0;

    for (let i of depositos) {
        totalD += i._monto;
    }
    return totalD;

}


/* GENERAR TOTAL RETIROS */

let totalRetiros = () => {

    let totalR = 0;
    for (let i of retiros) {
        totalR += i._monto;
    }
    return totalR;
}

/* CARGAR APPLICACION */
let cargarApp = () => {
    let total = totalDepositos() - totalRetiros();
    document.getElementById("grid__amount").innerHTML = `$${total}`;
}

/* DEPOSITOS */

let agregarDeposito = () => {

    let form = document.forms["grid__formDepositos"];
    let depo = form["grid__depAmount"];
    let desc = form["grid__depDesc"];

    if (depo.value !== "" && desc.value !== "") {
        depositos.push(new Deposito(+depo.value, desc.value));
        /* GENERANDO DIVS DINAMICOS */
        agregarDepositoHTML();
    } else {
        alert("Por favor llena los campos");
    }
    cargarApp();

}

let agregarDepositoHTML = () => {
    let actual = "";
    for (let i of depositos) {
        actual += crearDepositoHTML(i);
    }
    document.getElementById("grid__listaDep").innerHTML = actual;
}

/* CREAR DEPOSITO HTML */

let crearDepositoHTML = (deposito) => {
    let depositoHTML = `<div id="grid__movimientos__elemento">
    <p class="grid__Amount" id="grid__mov__descDep">${deposito.desc}</p>
    <p class="grid__Desc" id="grid__mov__amoDep">$${deposito.monto}</p>
</div>

`;
    return depositoHTML;
}


/* RETIROS */

let agregarRetiro = () => {
    let form = document.forms["grid__formRetiros"];
    let ret = form["grid__retAmount"];
    let desc = form["grid__retDesc"];

    if (ret.value !== "" && desc.value !== "") {
        if (total() - ret.value >= 0) {
            retiros.push(new Retiro(+ret.value, desc.value));
            /* GENERANDO RETIROS DINAMICOS */
            agregarRetiroHTML();
        } else {
            alert("Fondos insuficientes");
        }

    } else {
        alert("Por favor llena los campos");
    }
    console.log("RETIROS" + retiros);
    console.log("DEPOSITOS" + depositos);
    cargarApp();
}

let agregarRetiroHTML = () => {
    let actual = "";
    for (let i of retiros) {
        actual += crearRetiroHTML(i);
    }
    document.getElementById("grid__listaRet").innerHTML = actual;
}

/* CREAR RETIRO HTML */
let crearRetiroHTML = (retiro) => {
    let retiroHTML = ` <div id="grid__movimientos__elemento">
  <p class="grid__Amount" id="mov__desRet">${retiro.desc}</p>
  <p class="grid__Desc" id="mov__amoRet">$${retiro.monto}</p>
</div>`;
    return retiroHTML;
}