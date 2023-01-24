const display = document.querySelector(".screen--result");
const buttons = document.querySelectorAll("button");

let operacionA = 0;
let operacionB = 0;
let operacion = "";
let resultado = 0;
let pivot = 0;
display.textContent = "0";
buttons.forEach( (item) => {
    item.onclick = () => {
        if(item.id == "reset") {
            display.innerText = "";
        } else if (item.id == "eliminar"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        // Pa los números
        else if (item.id == "0") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "0";
        }
        else if (item.id == "1") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "1";
        }
        else if (item.id == "2") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "2";
        }
        else if (item.id == "3") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "3";
        }
        else if (item.id == "4") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "4";
        }
        else if (item.id == "5") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "5";
        }
        else if (item.id == "6") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "6";
            console.log(display.textContent);
        }
        else if (item.id == "7") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "7";
        }
        else if (item.id == "8") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "8";
        }
        else if (item.id == "9") {
            if(display.textContent == "0")
                display.textContent = "";
            display.textContent = display.textContent + "9";
        }
        else if (item.id == ".") {
            display.textContent = display.textContent + ".";
        }
        else if (item.id == "suma") {
            console.log("entre");
            operacionA = display.textContent;
            operacion = "+";
            display.innerText = "";
        }
        else if (item.id == "-") {
            operacionA = display.textContent;
            operacion = "-";
            display.textContent = "";
        }
        else if (item.id == "x") {
            pivot = display.textContent.replace(",", "");
            console.log(pivot);
            operacionA = pivot;
            operacion = "x";
            display.textContent = "";
        }
        else if (item.id == "/") {
            operacionA = display.textContent;
            operacion = "/";
            display.textContent = "";
        }
        else if (item.id == "=") {
            operacionB = display.textContent;
            if(operacion == "+"){
                resultado = parseFloat(operacionA) + parseFloat(operacionB);
            }
            else if (operacion == "-"){
                resultado = parseFloat(operacionA) - parseFloat(operacionB);
            }
            else if (operacion == "x"){
                resultado = parseFloat(operacionA) * parseFloat(operacionB);
            }
            else if (operacion == "/"){
                resultado = parseFloat(operacionA) / parseFloat(operacionB);
            }
            else{
                resultado = parseFloat(operacionB);
            }
            display.textContent = resultado;
        }

        if(display.textContent == ""){
            display.textContent += "0";
        }
    };
});

function resetear(){
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}