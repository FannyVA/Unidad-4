//creandoo nodos en el div
const app = document.getElementById('app')
getImageFromNasa()
    .then(function (data) {
        console.log(data)
        data.forEach(function (data) {
            const img = document.createElement('img')
            img.src = getImage(data)
            img.alt = data.caption
            app.appendChild(img)

        })

    })
// fetch Para hacer peticiones sincronas (consigue los datos) 
//si no funciona saldra error
function getImageFromNasa() {
        return fetch('https://epic.gsfc.nasa.gov/api/natural')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })   
    }
function getImage(data) {
    const url = 'https://epic.gsfc.nasa.gov/api/natural'
    const date = data.date
        .substr(0, 10) //obtiene los primeros 10 caracteres 
        .split('-')//separar los carcateres 
        
    return '${url}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png' //regresa los datos de cada una de las datos y imagen
}
//funcion para obtener la url de cada imagen 
data.forEach(function (data) {
    const img = document.createElement('img')
    img.src = getImage(data)
    img.alt = data.caption


})
