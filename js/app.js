const navSearchBtn = document.querySelectorAll('.nav__search-btn')[1],
        navSearch = document.querySelector('.nav__search'),
        navSearchCloseBtn = document.querySelector('.nav__search-close-btn');

    
navSearchBtn.addEventListener('click', ()=>{
    navSearch.style.display = 'block';
})

navSearchCloseBtn.addEventListener('click', ()=>{
    navSearch.style.display = 'none';
})