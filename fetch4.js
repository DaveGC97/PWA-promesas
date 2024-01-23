let user = {
    name: 'david',
    age: 27
}
fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('error de petición')
    console.log(error)
})