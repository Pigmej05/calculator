$(function () {
})

let massivNumders = document.querySelectorAll(`.namber`);
let massivOperacion = document.querySelectorAll(`.operation`)
let c = document.getElementById(`clean`);
let p = document.getElementById(`pi`);
let delit = document.getElementById(`del1`);
let oneX = document.getElementById(`oneX`);
let square = document.getElementById(`square`);
let displey = document.getElementById(`text`);
let point = document.getElementById(`point`);
let memoryNumber = 0;
let memoryNewNumber = false;
let memoryOperation = ``;


function insert(num) {
    if (memoryNewNumber) {
        displey.value = num;
        memoryNewNumber = false;

    }
    else {
        if (displey.value === `0`) {
            displey.value = num;
        }
        else {
            displey.value = document.form.numbers.value + num;
        }

    }
};

function onClickNumbers(object) {
    let numbe = object.currentTarget;
    let operant = numbe.innerHTML;
    insert(operant);
    console.log(operant)
}

for (let i = 0; i < massivNumders.length; i++) {
    let button = massivNumders[i];
    button.addEventListener(`click`, onClickNumbers);
};

function calculation(calc) {
    memoryLocal = displey.value;
    if (memoryNewNumber && memoryOperation !== `Enter`) {
        displey.value = memoryNumber;
    }
    else if (calc === `√x`) {
        displey.value = Math.sqrt(parseFloat(memoryLocal))
    }
    else if (calc === `ln(x)`) {
        displey.value = Math.log(parseFloat(memoryLocal))
    }
    else if (calc === `sin`) {
        displey.value = Math.sin(parseFloat(memoryLocal))
    }
    else if (calc === `cos`) {
        displey.value = Math.cos(parseFloat(memoryLocal))
    }
    else if (calc === `tan`) {
        displey.value = Math.tan(parseFloat(memoryLocal))
    }
    else if (calc === `+/-`) {
        displey.value = - memoryLocal;
    }
    else {
        memoryNewNumber = true;
        if (memoryOperation === `+`) {
            memoryNumber += parseFloat(memoryLocal);
        }
        else if (memoryOperation === `-`) {
            memoryNumber -= parseFloat(memoryLocal);
        }
        else if (memoryOperation === `÷`) {
            memoryNumber /= parseFloat(memoryLocal);
        }
        else if (memoryOperation === `x`) {
            memoryNumber *= parseFloat(memoryLocal);
        }
        else if (memoryOperation === `y<sup><small>x</small></sup>`) {
            memoryNumber **= parseFloat(memoryLocal);
        }

        else {
            memoryNumber = parseFloat(memoryLocal);
        };
       
        displey.value = memoryNumber.toPrecision(5);;
        memoryOperation = calc;
        
    }

};

function operat(sign) {
    let oper = sign.currentTarget;
    let op = oper.innerHTML;
    calculation(op);
    console.log(op)
}
for (let i = 0; i < massivOperacion.length; i++) {
    let action = massivOperacion[i];
    action.addEventListener(`click`, operat)
}
function erase() {
    document.form.numbers.value = ``;
    memoryNumber = 0;
    memoryNewNumber = true;
    memoryOperation = ``;
};
c.addEventListener(`click`, erase);

function pi() {
    document.form.numbers.value = Math.PI;
};
p.addEventListener(`click`, pi);

function delitSimvol() {
    let del = document.form.numbers.value;
    displey.value = del.substring(0, del.length - 1);
}
delit.addEventListener(`click`, delitSimvol);

function comma() {
    let localFuncion = displey.value;
    if (memoryNewNumber) {
        localFuncion = `0.`;
        memoryNewNumber = false;
    }
    else {
        if (localFuncion.indexOf(`.`) === -1) {
            localFuncion += `.`;
        }
    }
    displey.value = localFuncion
}
point.addEventListener(`click`, comma);


function delX() {
    x = displey.value;
    y = 1 /displey.value;
    displey.value = y.toPrecision(5);
}
oneX.addEventListener(`click`, delX);


function sqar (){
    x = displey.value;
    y = x*x;
    displey.value = y.toPrecision(5);
}
square.addEventListener(`click`, sqar);

let procent = document.getElementById(`procent`);
function proc (){
    x = memoryNumber;
    y = displey.value;
    z = x/100*y;
    displey.value = z.toPrecision(5);
}
procent.addEventListener(`click`, proc);