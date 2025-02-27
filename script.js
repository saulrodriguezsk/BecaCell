const options = {
    header: [],
    body: [],
    params: []
};

fetch('https://rickandmortyapi.com',options)
.then (response => {
    if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
    }
    return response.json();
})

.then (data => {
    const personaje = data.results[0];
    marcarPersonaje(personaje);
    obtenerImagen(personaje.image);
})

.catch (error => {
    Advertencia(error);
})

function marcarPersonaje(personaje) {
    document.createElement('Nombre del personaje: ${personaje.name', 'background:yellow; color: black; font-weight: bold');

}

function Advertencia(ningunainfo) {
    console.log('Error al consumir la imagen', ningunainfo)
}

function obtenerImagen(imagenURL) {
    fetch(imagenURL)
    
    .then (response => {
        if (!response.ok) {
            throw new Error("Error al cargar la imagen");
        }
        return response.blop();
    })
    
    .then (imageBlop => {
        const imgObjectURL = URL.createObjectURL(imageBlop);
        const imgElement = document.createElement('img');
        imgElement.src = imgObjectURL;
        document.body.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error al cargar la imagen:', error);
    });
}