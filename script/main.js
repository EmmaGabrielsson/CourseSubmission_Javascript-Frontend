"use strict";

//Kod för att hämta produktdata från ett api
export let productData = fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json();
    })
    .then((productData) => {
        showProductCards(productData);
    })
    .catch((error) => console.error(error));


//Funktion för att visa produkterna på webbsidan
const productCards = document.querySelector('.shop-content');
function showProductCards(productData) {
    let outputBox = "";
    productData.map((data) => {
        let dataInfo = data.image + data.title + data.price;
        outputBox += `   
        <div class="product-box">
        <p class="product-category">${data.category}</P>
        <img src="${data.image}" id="${data.image}" alt="product-img" title="click to view large image" class="product-img">
        <h2 data-id="${data.title}" class="product-title">${data.title}</h2>
        <p class="card-text">${data.description}</p>
        <span data-id="${data.price}" class="price">${data.price} kr</span>
        <i id="${dataInfo}" class="bi bi-cart-plus add-cart" title="add to cart"> add</i>
        </div>`;
    });
    productCards.innerHTML = outputBox;
};


let addBtn = document.getElementsByClassName("add-cart");
for (let i = 0; i < addBtn.length; i++) {
    let cartBtn = addBtn[i];
    console.log(cartBtn);
    cartBtn = addEventListener("click", () => {
    });
}

/*
function addBtnProductInfo(productData) {
    productData = () => {
        for (let i = 0; i < data.length; i++) {
            let productInfo = data[i];
            addBtn.contain(productInfo);
            console.log(productInfo);
        }
    };
}

for (let i = 0; i < addBtn.length; i++) {
    let cartBtn = addBtn[i];
    cartBtn = addEventListener("click", () => {
        console.log(cartBtn);
    });
}
//spara produkter i localStorage

/*
//Funktion för att visa produktbilder i stor vy på webbsidan, efter klick av vald produktbild
let view = document.querySelector(".view-large-img");
function viewLargeImg(productData) {
    let viewImage = document.querySelector(".view-large-img img");
    let outputBox = "";

    productData = (data) => {
        for (let i = 0; i < data.length; i++) {
            let image = data[i].image;
            console.log(image);
            outputBox += `   
            <i class="bi bi-x close-large-view" title="Close"></i>
            <img src="${data[i].image}" alt="img-product">
            `;
            viewImage.forEach(image => {
                image.addEventListener("click", () => {
                    view.style.display = "block";
                    viewImage.src = image.getAttribute("src");
                    view.innerHTML = outputBox;
                });
            });
        }
    }
}
*/

//Funktion för att stänga stor vy av produktbild
const closeView = document.querySelector(".close-large-view");
closeView.onclick = () => {
    view.style.display = "none";
}


//Funktioner för att öppna/stänga kassa
const showCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCartBtn = document.querySelector("#close-cart");

function openCart() {
    cart.classList.add("active");
}
showCart.addEventListener("click", openCart);

function closeCart() {
    cart.classList.remove("active");
}
closeCartBtn.addEventListener("click", closeCart);


/*
//visa sparade produkter från localstorage i kassan
const showAddedProducts = document.querySelector(".cart-content");
export function showStoredProductsInCart() {
    if (localStorage.length == 0) {
        showAddedProducts.innerText = "No products added to cart yet!";
        showAddedProducts.style.textAlign = "center";
    }
    else {
        let contentContainer = document.createElement("div");
        contentContainer.classList.add("cart-box");
        let productContent = `
                <img src="#" alt="" class="cart-img">
                <div class="detail-box">
                <div class="cart-title-product">${title}</div>
                <div class="cart-price">${price}</div>
                <label for="quantity">Antal</label>
                <input name="quantity" title="quantity" type="number" value="1" class="cart-quantity">
                </div>
                <i class="bi bi-trash cart-remove" title="delete from cart"></i>
                `;

        contentContainer.appendChild(productContent);
        showAddedProducts = productContent.innerHTML;
    }
}*/

//Funktion för att visa arrow-up vid företagsnamn när man scrollar ner på webbsidan.
window.addEventListener("scroll", () => {
    const scrolls = window.scrollY;
    let arrow = document.querySelector(".bi-arrow-up");
    if (scrolls >= 700) {
        arrow.classList.add("active");
    }
    else if (scrolls < 700) {
        arrow.classList.remove("active");
    }
});


//Knapp för att visa alla produkter, eller olika produktkategorier 
const categoryBtn = document.querySelector(".dropdown button");

categoryBtn.addEventListener("mouseover", function () {
    categoryBtn.style.boxShadow = "0px 0px 5px rgb(0, 202, 209)";
});
categoryBtn.addEventListener("mouseout", function () {
    categoryBtn.style.boxShadow = "none";
});



