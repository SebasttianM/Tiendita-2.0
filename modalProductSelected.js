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
            
        </div>

        `
        datos.forEach((ele)=>{
            modal.innerHTML+=`
            <div class="cardProduct">
                <span class="discount">32%dto</span>
                <img class="imgProduct" src=${ele.imagen} alt="">
                <div class="price">
                    <p class="actualPrice">${ele.precio}/kg</p>
                    <p class="lastPrice">$${ele.precio}/kg</p>
                </div>
                <p class="nameProduct">${ele.nombre}</p>
            </div>`;
        })    
};

export default modalProduct;
