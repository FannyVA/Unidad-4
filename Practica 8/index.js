const searchInput = document.getElementById('search');
const results = document.getElementById('results');
const searchButton = document.getElementById('button');
const url = "http://api.giphy.com/v1/gifs/search" ;

searchButton.addEventListener('click', searGIFs);

function searGIFs() {
    const search = searchInput.Value;
    return getGiphyResults(url)
        .then(function (gifs) {
            console.log(gifs)
            gifs.forEach(function (gif) {
                const img = document.createElement('img')
                img.src = gif.imagen.fixed_height.url;
                img.alt = gif.title
                results.appendChild(img)
            });

        })
}
function buildUrl(search) {
    const API_KEY = 'neXoghkE4n1e83PFswNfWPcyH5Cos3Mz';
    const Baseurl = 'api.giphy.com/v1/gifs/search';
    return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;

}
function getGiphyResults(url) {
return fetch(url)
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