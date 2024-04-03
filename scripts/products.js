function cargarProducto(productName) {
    fetch('../data/products.json')
    .then(response => response.json())
    .then(data => {
      const productoData = data[productName];
      sessionStorage.setItem("producto", JSON.stringify(productoData));
      window.location.href = productoData.enlace;
    });
}