document.addEventListener('DOMContentLoaded',() => {
    // access all html elements
    const startBtn = document.querySelector('.beer-button')
    const foodBtn = document.querySelector('.food-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const foodPairingDisplay = document.querySelector('.food-pairing')
    const beerImage = document.getElementById("beer-image")
    const reloadButton = document.querySelector("#reload");
    const form = document.querySelector('.form')


    const url = 'https://api.punkapi.com/v2/beers/random'


// get random beer data from source
function getBeer(e) {
        e.preventDefault()
    fetch(url)
    .then(resp => {
        return resp.json()
    })
    .then(data => {

        const name = data[0].name
        const description = data[0].description
        const abv = data[0].abv
        
        
        randomBeer.innerText = `${name} - ${abv} abv.` 
        descriptionDisplay.innerText = description
        
        data.forEach(beerPic => {createBeerImage(beerPic)});
  })
}


// fetches food pairing info
function fetchFood() {
    fetch(url)
    .then(resp => {
        return resp.json()
    })
    .then(data => {
    const foodPairing = data[0].food_pairing
    foodPairingDisplay.innerText = foodPairing
 })
}


// populates beer images
function createBeerImage(beerPic){
  const img = beerImage.querySelector("img")
  img.src = beerPic.image_url
  img.alt = beerPic.name

  beerImage.appendChild(img)
}

function formSubmit(e) {
    e.preventDefault();
    alert('Thank you for your recommendation')

}



// Refresh page on click
function reload() {
    reload = location.reload();
}


// event listeners return beer details on click and refresh page

form.addEventListener('submit', formSubmit)
reloadButton.addEventListener("click", reload);
foodBtn.addEventListener('click', fetchFood);
startBtn.addEventListener('click', getBeer);
})














