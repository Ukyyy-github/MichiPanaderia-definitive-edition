
let productoss = [
  { id: 1, img:"../imagenes/michipancito.webp", nombre: "Pancitos dulcecitos", precio: 5000 },
  { id: 2, img:"../imagenes/pizza.webp", nombre: "pitzas", precio: 6000 },
  { id: 3, img:"../imagenes/marraqueta.webp", nombre: "Marraquemiau", precio: 7000 },
  { id: 4, img:"../imagenes/empanada.webp", nombre: "michiempanadas", precio: 7000 },
  { id: 5, img:"../imagenes/pielimon.webp", nombre: "patita de limón", precio: 7000 },
  { id: 6, img:"../imagenes/cafe.webp", nombre: "michicafé", precio: 7000 }
];

function mostrarProductos() {
  let product = document.getElementById("productos");
  product.innerHTML = "";
  for (const producto of productoss) {
    product.innerHTML += `
      <div class="caluga">
        <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
        <a href="producto.html?id=${producto.id}" class="btn btn-primary">Ver más</a>
        <button onclick="agregarAlCarrito(${producto.id})"> Agregar al carrito </button>
      </div>
    `;
  }
}

function mostrarProducto() {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  let producto = productoss.find(p => p.id == id);

  if (producto) {
    let product = document.getElementById("producto");
    product.innerHTML = `
      <div class="caluga">
        <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})"> Agregar al carrito </button>
      </div>
    `;
  }
}