function obtenerCarrito(){
    let datos = localStorage.getItem("carrito");

    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
    } 
}

function agregarAlCarrito(id) {
    let carrito = obtenerCarrito();
    let existe = carrito.find(p => p.id == id);

    if (existe){
        existe.cantidad += 1;
    } else {
        carrito.push({id: id, cantidad: 1});
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarDelCarrito(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(p => p.id != id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    let carrit = document.getElementById("carrito"); 
    
    if (!carrit) return;

    let carritoo = obtenerCarrito(); 
    carrit.innerHTML = "";
    let total = 0;

    for (const item of carritoo) {
        let producto = productoss.find(p => p.id == item.id);

        if (!producto) continue;

        total += producto.precio * item.cantidad;
        carrit.innerHTML += `
    <div class="carrito">
        <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
        <p>${item.cantidad}</p>
        <p>${producto.precio * item.cantidad}</p>
        <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
      </div>`;
    }
    carrit.innerHTML += `<h3>Total: ${total}</h3>`;
}