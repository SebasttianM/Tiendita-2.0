const modalProduct = async (product, modal, data) => {
    const prod = await product;
    console.log(data)
    const datos= await data

    modal.innerHTML = "";
    console.log(prod)
        const { imagen, nombre, precio, id } = prod;
        modal.innerHTML += `
        <div class="modalProduct">
            <img class="modalImg" src=${imagen} alt=''/>
            <div class="modalOrder">
                <div class="modalDescription">
                    <h3 class="Name">${nombre}</h3>
                    <h4 class="Price">☺${precio}</h4>
                    <div class="productDescription">
                        <span class="iva">Precios con IVA incluido<span>
                        <p class="priceAdvise">Peso aproximado por pieza, puede variar de acuerdo al peso real.</p>
                    </div>
                </div>
            </div>
        </div>

        `;
        // datos.forEach((ele)=>{
        //     modal.innerHTML+=`
          
        //     <div class="cardProduct">
        //         <span class="discount">32%dto</span>
        //         <img class="imgProduct" src=${ele.imagen} alt="">
        //         <div class="price">
        //         <p class="actualPrice">${ele.precio}/kg</p>
        //         <p class="lastPrice">$${ele.precio}/kg</p>
        //         </div>
        //         <p class="nameProduct">${ele.nombre}</p>
        //     </div>
        //     `;
        // })    
};

export default modalProduct;
