let totalProductos = 0;
let totalUsuarios = 0;
let contadorIdProductos = 1;
let contadorIdUsuarios = 101;

const spanProductos = document.getElementById('total-productos');
const spanUsuarios = document.getElementById('total-usuarios');

function actualizarDashboard() {
  spanProductos.textContent = totalProductos;
  spanUsuarios.textContent = totalUsuarios;
}

actualizarDashboard();

const formProducto = document.getElementById('form-producto');
const tablaProductos = document.getElementById('tabla-productos');

formProducto.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const nombre = document.getElementById('nombre-producto').value;
  const precio = document.getElementById('precio-producto').value;

  const nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `<td>#0${contadorIdProductos}</td><td><div class="img-placeholder img-placeholder-thumb"></div></td><td>${nombre}</td><td>$${precio}</td><td class="table-acciones"><button class="btn-eliminar" onclick="eliminarProducto(this)">Eliminar</button></td>`;

  tablaProductos.appendChild(nuevaFila);

  totalProductos++;
  contadorIdProductos++;
  actualizarDashboard();

  formProducto.reset();
  alert('Producto agregado con éxito!');
});

function eliminarProducto(boton) {
  boton.parentElement.parentElement.remove();

  totalProductos--;
  actualizarDashboard();
}

const formUsuario = document.getElementById('form-usuario');
const tablaUsuarios = document.getElementById('tabla-usuarios');

formUsuario.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const nombre = document.getElementById('nombre-usuario').value;
  const email = document.getElementById('email-usuario').value;
  const rol = document.getElementById('rol-usuario').value;

  const nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `<td>#${contadorIdUsuarios}</td><td>${nombre}</td><td>${email}</td><td>${rol}</td><td class="table-acciones"><button class="btn-eliminar" onclick="eliminarUsuario(this)">Eliminar</button></td>`;

  tablaUsuarios.appendChild(nuevaFila);

  totalUsuarios++;
  contadorIdUsuarios++;
  actualizarDashboard();

  formUsuario.reset();
  alert('Usuario agregado con éxito!');
});

function eliminarUsuario(boton) {
  boton.parentElement.parentElement.remove();
  
  totalUsuarios--;
  actualizarDashboard();
}