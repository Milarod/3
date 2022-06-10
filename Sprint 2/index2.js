// # : id, . : css, [placeholder="Nombre"]
// document.querySelectorAll(".form-control")

//alt + shift + flecha abajo : duplica fila en vsCode

// innerHtml, value, text 

function agregarTotal(Total){
    let nombre = document.querySelector("#nombre").value;
    let pago = document.querySelector("#pago").value;
    
    let personaExiste = document.querySelector("#" + nombre);
    if(personaExiste){
        modificarPersona(nombre, pago)
    }else{
        agregarPersona(nombre, pago);
    }
}

function modificarPersona(nombre, pago){
    let total = document.querySelector("#" + nombre + "Pago");
    total.innerHTML = (+total.innerHTML) + (+pago);
}

function agregarPersona(nombre, pago){
    const lista = document.querySelector("#list-group");
    const item = document.createElement("li");
    
    const itemNombre = document.createElement("span")
    itemNombre.setAttribute('id', nombre);
    itemNombre.appendChild(document.createTextNode(nombre));
    
    const itemPago = document.createElement("span")
    itemPago.setAttribute('id', nombre + 'Pago');
    itemPago.appendChild(document.createTextNode(pago));

    item.appendChild(itemNombre);
    item.appendChild(itemPago);
    lista.appendChild(item);
}