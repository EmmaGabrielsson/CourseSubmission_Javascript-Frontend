const productCards = document.querySelector('.shop-content');
let output = "";

const url = 'https://api.punkapi.com/v2/beers';

let productData = fetch(url)
    .then(res => res.json())
    .then(productData => {
        for (let i = 0; i < productData.length; i++){
            const productId = productData[i].id;
            const productImage = productData[i].image_url;
            const beerProductName = productData[i].name;
            const productDescription = productData[i].description;
            const tips = productData[i].brewers_tips;
            const price = Math.floor(Math.random()*100);

            output += `   
            <div class="product-box">
                <img src="${productImage}" alt="" class="product-img">
                <h2 class="product-title">${productId + " " + beerProductName}</h2>
                <p class="card-text">${productDescription}</p>
                <button id="btn" type="button" class="btn btn-secondary me-3">
                    More info
                </button>
                <span class="price">${price} kr</span>
                <i class="bi bi-cart-plus add-cart"> add</i>
            </div>`;
        };
        
        productCards.innerHTML = output;
    });

    /*function showArrowUp() {
        let pageVH = window.innerHeight;
        window.scrollBy(0, pageVH);
        let arrow = document.querySelector(".bi-arrow-up")
        arrow.add("active");
    }*/


