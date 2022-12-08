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

const blogs = [
    {
        id:1,
        img: "./images/6325c19ac5878507a6d60379_post-gatsby-night-thumbnail.webp",
        date: "September 19,2022",
        name: "Gatsby Night",
        info: "Massa tempor nec feugiat nisl pretium fusce id. Morbi tincidunt ornare massa eget egestas purus."
    },
    {
        id:2,
        img: "./images/6325c1b605c1e329c3c02569_post-classic-dinner-night-thumbnail.webp",
        date: "September 19,2022",
        name: "Classic Dinner Night",
        info: "Massa tempor nec feugiat nisl pretium fusce id. Morbi tincidunt ornare massa eget egestas purus."
    },
    {
        id:3,
        img: "./images/6325c1ca79ba58470e89030c_post-new-restaurant-thumbnail.webp",
        date: "September 19,2022",
        name: "New Restaurant",
        info: "Massa tempor nec feugiat nisl pretium fusce id. Morbi tincidunt ornare massa eget egestas purus."
    },
    {
        id:4,
        img: "./images/6325c1dd1ee68f26ee5102bd_post-romantic-dinner-thumbnail.webp",
        date: "September 19,2022",
        name: "Romantic Dinner",
        info: "Massa tempor nec feugiat nisl pretium fusce id. Morbi tincidunt ornare massa eget egestas purus."
    },
    {
        id:5,
        img: "./images/6325c2f7acd3d8b38c5d8391_post-brand-new-kitchen-thumbnail.webp",
        date: "September 19,2022",
        name: "Brand New Kitchen",
        info: "Massa tempor nec feugiat nisl pretium fusce id. Morbi tincidunt ornare massa eget egestas purus."
    }
]

const myBlogContainer = document.querySelector(".secondDiv");

window.addEventListener("DOMContentLoaded", function(){
    displayAllBlogs(blogs);
});

function displayAllBlogs(myblogs){
    let allBlogs = myblogs.map(function(item){
        return `<div class="myb-items">
        <img src=${item.img} class="pic1">
        <div id="info">
            <h3>${item.date}</h3>
            <h2>${item.name}</h2>
            <p>${item.info}</p>
        </div>
    </div>`;
    });
    allBlogs = allBlogs.join("");
    myBlogContainer.innerHTML = allBlogs;
}