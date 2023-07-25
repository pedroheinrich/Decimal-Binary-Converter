//Referencias iniciales

let decInp = document.getElementById('dec-inp');
let binInp = document.getElementById('bin-inp');
let errorMsg = document.getElementById('error-msg');

//Convertir de decimales para binarios 

decInp.addEventListener('input', () => {
    let decValue = parseInt(decInp.value);
    //conversion del valor decimal para binario
    binInp.value = decValue.toString(2);

});

//Convertir de binarios para decimales

binInp.addEventListener('input', () => {
    let binValue = binInp.value;
    //Si el numero binario es valido, convertir para decimal
    if(binValidator(binValue)){
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }
    //No es válido: Mensage de Error!
    else {
        errorMsg.textContent = "Please Enter An Valid Binary Input ( 0 or 1)"

    }

    //Funcion de validacion para averiguar si no hay numeros que no sean 0 y 1

    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num [i] != "0" && num[i] != "1")
            {
            return false;
        }
    }
    return true;
    }
});
