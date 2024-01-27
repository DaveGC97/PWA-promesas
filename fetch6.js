fetch('https://fakestoreapi.com/products/1')
.then(resp => {
    resp.clone().json().then(data => {
        console.log(data);
    })
    resp.clone().json().then(data => {
        console.log(data);
    })
    resp.json().then(data => {
        console.log(data);
    })
}
)