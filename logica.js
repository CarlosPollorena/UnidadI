// Referencia al contenedor donde se dibujarán las tarjetas
const contenedor = document.getElementById("contenedor-productos");

// Función asíncrona para obtener productos
async function obtenerProductos() {
    try {
        // Petición a la API
        const respuesta = await fetch("https://fakestoreapi.com/products");

        // Convertir respuesta a JSON
        const productos = await respuesta.json();

        console.log(productos); // Para ver el JSON en consola

        // Dibujar tarjetas
        dibujarProductos(productos);

    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

// Función para renderizar tarjetas dinámicamente
function dibujarProductos(productos) {

    productos.forEach(producto => {

        const tarjeta = `
            <div class="tarjeta">
                <img src="${producto.image}" alt="${producto.title}">
                <div class="info">
                    <h3>${producto.title}</h3>
                    <p>${producto.category}</p>
                    <p class="precio">$${producto.price}</p>
                    <p>⭐ ${producto.rating.rate} (${producto.rating.count} reseñas)</p>
                </div>
            </div>
        `;

        contenedor.innerHTML += tarjeta;
    });
}

// Ejecutar al cargar la página
obtenerProductos();
