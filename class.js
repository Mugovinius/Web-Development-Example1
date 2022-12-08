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

const classes = [
    {
        id:1,
        img: "./images/63237d010a2f18a51f76444b_class-delicious-breakfast-p-500.webp",
        class: "Asian",
        name: "Delicious Breakfast",
        date: "June 16,2023"
    },
    {
        id:2,
        img: "./images/63238471370cee245fe5fb99_class-coffee-time-p-500.webp",
        class: "Breakfast",
        name: "Coffee Time",
        date: "March 17,2023"
    },
    {
        id:3,
        img: "./images/63237f29e1807c751e2da944_class-vegan-burger-p-500.webp",
        class: "Vegan",
        name: "Vegan Burger",
        date: "January 10,2023"
    },
    {
        id:4,
        img: "./images/632383cf8d1ac44c47e3f7d4_class-salad-style-p-500.webp",
        class: "Italian",
        name: "Salad Style",
        date: "November 19,2022"
    },
]
/*
{
    id:5,
    img: "./images/632383d4a8b3a86dd91b541f_class-homemade-honey.webp",
    class: "Italian",
    name: "Homemeade Honey",
    date: "October 8,2022"
}
*/
const imageContainer = document.querySelector(".my-img-container");

window.addEventListener("DOMContentLoaded", function(){
    displayAllClasses(classes);
});

function displayAllClasses(myClasses){
    let displayClasses = myClasses.map(function(item){
        return `<div class="my-imgs">
        <div class="mytext">
            <h1>${item.class}</h1>
            <h2>${item.name}</h2>
            <p>${item.date}</p>
        </div>
        <img src=${item.img} class="mypic">
    </div>`;
    });
    displayClasses = displayClasses.join("");
    imageContainer.innerHTML = displayClasses;
}