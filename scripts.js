// Supongamos que tienes una lista de productos destacados en forma de objetos.
const productosDestacados = [
    { nombre: "Producto 1", precio: 19.99, imagen: "ruta-imagen-1.jpg" },
    { nombre: "Producto 2", precio: 29.99, imagen: "ruta-imagen-2.jpg" },
    // Agrega más productos si es necesario
];

// Función para mostrar los productos destacados en la página
function mostrarProductosDestacados() {
    const contenedorProductos = document.getElementById("productosDestacados");

    productosDestacados.forEach(producto => {
        const productoHTML = `
            <div class="col-md-4">
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                </div>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML;
    });
}

// Evento cuando se envía el formulario de suscripción
document.getElementById("formularioSuscripcion").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor o realizar otras acciones.
});
// Obtén el enlace de la barra de navegación que apunta a la página del catálogo
const enlaceCatalogo = document.querySelector(".nav-link[href='catalogo.html']");

// Verifica si la página actual es catalogo.html y agrega la clase activa al enlace
if (window.location.pathname.includes("catalogo.html")) {
    enlaceCatalogo.classList.add("active");
} else {
    enlaceCatalogo.classList.remove("active");
}

