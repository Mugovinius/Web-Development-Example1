//sidebar
const cartBtn = document.querySelector('.mycart');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

cartBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

const cards = [
    {
        id:1,
        img: "./images/6325e05b19faa88edce28f77_product-gift-card-light-thumbnail-p-500.webp",
        price: "$ 15.00 USD",
        name: "Gift Card Light",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque."
    },
    {
        id:2,
        img: "./images/6325e0c0fed41fc9e8eba3d5_product-gift-card-standard-thumbnail-p-500.webp",
        price: "$30.00 USD",
        name: "Gift Card Standard",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque."
    },
    {
        id:3,
        img: "./images/6325e07e7e7563bf1db00af2_product-gift-card-premium-thumbnail-p-500.webp",
        price: "$50.00 USD",
        name: "Gift Card Premium",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque."
    },
    {
        id:4,
        img: "./images/6325e0913009595d2623f575_product-gift-card-gold-thumbnail-p-500.webp",
        price: "$100.00 USD",
        name: "Gift Card Gold",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque."
    }
]

const productsContainer = document.querySelector(".second");

window.addEventListener("DOMContentLoaded", function(){
    displayAllProducts(cards);
});

function displayAllProducts(myProducts){
    let menuProducts = myProducts.map(function(item){
        return `<div class="my-items">
        <img src=${item.img} class="pic1"/>
        <div id="info">
            <h4>${item.price}</h4>
            <h2>${item.name}</h2>
            <p>${item.info}</p>
        </div>
    </div>`;
    });
    menuProducts = menuProducts.join("");
    productsContainer.innerHTML = menuProducts;
}