function inyectarHeader() {
  const contenedorHeader = document.getElementById("header");
  if (contenedorHeader) {
    let totalItems = 0;
    try {
      const datos = localStorage.getItem("carrito");
      if (datos) {
        const carrito = JSON.parse(datos);
        totalItems = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);
      }
    } catch (e) {
      totalItems = 0;
    }

    contenedorHeader.innerHTML = `
      <header class="top-header">
            <div class="brand">
                <span class="logo-box"></span>
                <h1>Michi Panadería</h1>
            </div>
            <nav class="main-nav">
                <a href="index.html">Home</a> |
                <a href="paginas/producto.html">Productos</a> |
                <a href="nosotros/index.html">Nosotros</a> |
                <a href="blogs/index.html">Blogs</a> |
                <a href="contactos/index.html">Contacto</a>
            </nav>
            <a href="paginas/carrito.html" class="cart-status" style="text-decoration: none; color: inherit;">
                <span class="cart-icon">🛒</span> Cart (${totalItems})
            </a>
        </header>
    `;
  }
}

function inyectarFooter() {
  const contenedorFooter = document.getElementById("footer");
  if (contenedorFooter) {
    contenedorFooter.innerHTML = `
      <div class="footer">
        <div>Michi Panaderia</div>
        
        <div class="metodos-pago">
          <span>VISA</span>
          <span>EFECTIVO</span>
          <span>TRANSFERENCIA</span>
        </div>

        <div class="footer-links">
          <div class="footer-columna">
            <h2>Conócenos!</h2>
            <div class="conocenos">
              <div><a href="contactos/index.html">Contactanos</a></div>
              <div><a href="locales/index.html">Locales</a></div>
              <div><a href="terminos/index.html">Términos y condiciones</a></div>
              <div><a href="terminos/index.html">Políticas y privacidad</a></div>
            </div>
          </div>

          <div class="footer-columna">
            <h2>Redes Sociales</h2>
            <div class="conocenos">
              <div><a href="#">Instagram</a></div>
              <div><a href="#">Facebook</a></div>
            </div>

            <h2 style="margin-top: 1.2rem;">Mi Cuenta</h2>
            <div class="conocenos">
              <div><a href="#">Pedir</a></div>
              <div><a href="#">Iniciar sesión</a></div>
            </div>
          </div>

          <div class="noticias">
            <h2>Boletín</h2>
            <label>Mantente informado! Únete a nuestro portal de noticias.</label>
            <form>
              <input type="email" placeholder="Ingresa Email">
              <button type="submit">Subscribete</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

inyectarHeader();
inyectarFooter();
