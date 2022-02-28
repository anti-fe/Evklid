const navSearchBtn = document.querySelectorAll('.nav__search-btn')[1],
        navSearch = document.querySelector('.nav__search'),
        navSearchCloseBtn = document.querySelector('.nav__search-close-btn'),
        slider = document.querySelector('.slider');
    
navSearchBtn.addEventListener('click', ()=>{
    navSearch.style.display = 'block';
})

navSearchCloseBtn.addEventListener('click', ()=>{
    navSearch.style.display = 'none';
})

let swiper;
swiper = new Swiper(slider, {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });