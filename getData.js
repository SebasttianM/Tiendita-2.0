const urlProducts = "https://api-prueba-productos.herokuapp.com/productos";

const getData = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    return data;
};

export default getData;
