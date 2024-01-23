fetch('img/foto.jpg')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(blob);
        document.body.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error fetching the image:', error);
    });
