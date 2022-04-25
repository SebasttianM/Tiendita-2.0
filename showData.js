const showData = async (products, cards) => {
    const product = await products;
    cards.innerHTML = "";

    product.forEach((prod) => {
        const { imagen, nombre, precio, id } = prod;
        const preciofinal = Number(precio.replace("$", "")) + 20;

        
        cards.innerHTML += `
        <div class="cardProduct">
                <span class="discount">32%dto</span>
                <img class="imgProduct" src=${imagen} alt="">
                <div class="price">
                    <p class="actualPrice">${precio}/kg</p>
                    <p class="lastPrice">$${preciofinal}/kg</p>
                </div>
                <p class="nameProduct">${nombre}</p>
                <button id=${id} data-bs-toggle="modal" data-bs-target="#productoSeleccionado" class="btnAddProduct">Agregar</button>
            </div>`;
    });
};

export default showData;
