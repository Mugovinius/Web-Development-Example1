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