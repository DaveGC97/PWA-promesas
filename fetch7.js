fetch('https://fakestoreapi.com/products/1')

.then(resp =>{
    if(resp.ok){
        return resp.json()
    } else if (resp.status === 400){
        throw new Error('No existe el producto')
    }
})
    .then(console.log)
    .catch(err => {
        console.log("Error en la petición");
        console.log(err);
    })