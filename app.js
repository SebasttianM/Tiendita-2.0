import getData from "./getData.js";
import modalProduct from "./modalProductSelected.js";
import showData from "./showData.js"
import showDataModal from "./showDataModal.js";

const productsContainer=document.getElementById("productsContainer");
const losMasPopulares = document.getElementById("losMasPopulares");
const modalProductoSeleccionado = document.getElementById(
    "modalProductoSeleccionado"
);
const modalProductsRelated= document.getElementById("modalProductsRelated")

const urlProducts = "https://api-prueba-productos.herokuapp.com/productos";

document.addEventListener("DOMContentLoaded", async() => {
    const data = await getData(urlProducts);
    const populares= data.slice(5,10)
    showData(data, productsContainer);
    showData(populares, losMasPopulares);
    showDataModal(data, modalProductsRelated);
    showDataModal(populares);
    
});

productsContainer.addEventListener("click",async (e)=>{
    const id= e.target.id
    const mostrarProducto = e.target.classList.contains("btnAddProduct");
   
    if(mostrarProducto){
        const listData = await getData(urlProducts);
        console.log(listData)
        const productSelect= listData.find((pro)=>pro.id===id)        
        console.log(productSelect)
        modalProduct(productSelect, modalProductoSeleccionado, listData, modalProductsRelated)
    }
})