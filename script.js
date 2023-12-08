new Swiper('.swiper', {
  
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickabe: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const readmore = document.querySelector('.repair__read-more');
const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.swiper-wrapper');
  
readmore.addEventListener('click',  function func() {
  readmore.classList.toggle('repair__read-more-modified');
  if(readmore.innerHTML === "Показать все") {
    if(parseInt(window.getComputedStyle(document.body).width) < 1120) {
      sliderContainer.style.height = '336px';
      sliderWrapper.style.height = '336px';
    }else {
      sliderContainer.style.height = '248px';
      sliderWrapper.style.height = '248px';
    }
    readmore.innerHTML = "Скрыть";
  } else {
    readmore.innerHTML = "Показать все";
    sliderContainer.style.height = '160px';
    sliderWrapper.style.height = '160px';
  }
});
