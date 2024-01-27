fetch('https://fakestoreapi.com/products/1')
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            throw new Error('No se pudo obtener el producto');
        }
    })
    .then(product => {
        // Actualiza el contenido del body con los detalles del producto
        document.body.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>Precio: $${product.price}</p>
            <p>${product.description}</p>
        `;
    })
    .catch(err => {
        console.error('Error en la solicitud!:', err);
        // Si ocurre un error, carga el contenido del archivo not-found.html
        fetch('not-found.html')
            .then(resp => resp.text())
            .then(html => {
                // Actualiza el contenido del body con el contenido de not-found.html
                document.body.innerHTML = html;
            })
            .catch(innerErr => {
                console.error('Error al cargar not-found.html:', innerErr);
                // Si no se puede cargar not-found.html, muestra un mensaje genérico
                document.body.innerHTML = '<p>No se pudo completar la solicitud.</p>';
            });
    });
