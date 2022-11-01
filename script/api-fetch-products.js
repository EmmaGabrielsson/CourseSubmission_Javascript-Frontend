
//Kod för att hämta information om produkterna från ett api och visa dem på sidan
const productCards = document.querySelector('.shop-content');
let output = "";

const url = 'https://api.punkapi.com/v2/beers';

let productData = fetch(url)
    .then(res => res.json())
    .then(productData => {
        for (let i = 0; i < productData.length; i++) {
            const productId = productData[i].id;
            const productImage = productData[i].image_url;
            const beerProductName = productData[i].name;
            const productDescription = productData[i].description;
            const tips = productData[i].brewers_tips;
            const price = Math.floor(Math.random() * 100);
            //price = localStorage;

            output += `   
            <div class="product-box">
                <img src="${productImage}" alt="" class="product-img">
                <h2 class="product-title">${productId + " " + beerProductName}</h2>
                <p class="card-text">${productDescription}</p>
                <button id="btn-more-info" type="button" class="btn btn-secondary me-3">
                    More info
                </button>
                <span class="price">${price} kr</span>
                <i class="bi bi-cart-plus add-cart"> add</i>
            </div>`;
        };
        productCards.innerHTML = output;
    });


//Funktion för att visa arrow-up vid företagsnamn när man scrollar ner på webbsidan.
window.addEventListener("scroll", () => {
    const scrolls = window.scrollY;
    let arrow = document.querySelector(".bi-arrow-up");
    if (scrolls >= 1000) {
        arrow.classList.add("active");
    }
    else if (scrolls < 1000) {
        arrow.classList.remove("active");
    }
});
