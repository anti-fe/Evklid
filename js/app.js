const navSearchBtn = document.querySelectorAll('.nav__search-btn')[1],
        navSearch = document.querySelector('.nav__search'),
        navSearchCloseBtn = document.querySelector('.nav__search-close-btn'),
        slider = document.querySelector('.slider');
const stepsCont = document.querySelector('.working__steps'),
        workingBlock1 = document.querySelector('.working__consult1'),
        workingBlock2 = document.querySelector('.working__consult2'),
        workingBlock3 = document.querySelector('.working__consult3'),
        workingBlock4 = document.querySelector('.working__consult4');
const questionsBtns = document.querySelectorAll('.questions__btn');

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
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

stepsCont.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log(workingBlock2);
  if(e.target.className.includes('step-1')) {
    workingBlock1.style.display = 'grid';
    workingBlock2.style.display = 'none';
    workingBlock3.style.display = 'none';
    workingBlock4.style.display = 'none';
  } else if(e.target.className.includes('step-2')) {
    workingBlock2.style.display = 'grid';
    workingBlock1.style.display = 'none';
    workingBlock3.style.display = 'none';
    workingBlock4.style.display = 'none';
  } else if(e.target.className.includes('step-3')) {
    workingBlock3.style.display = 'grid';
    workingBlock1.style.display = 'none';
    workingBlock2.style.display = 'none';
    workingBlock4.style.display = 'none';
  } else if(e.target.className.includes('step-4')) {
    workingBlock4.style.display = 'grid';
    workingBlock1.style.display = 'none';
    workingBlock2.style.display = 'none';
    workingBlock3.style.display = 'none';
  }
})

function openAcard(btn){
  btn.classList.toggle('active-quest-btn');
  let textBlock = btn.parentElement.parentElement.querySelector('.question__text');
  textBlock.classList.toggle('open-acard');
}
  