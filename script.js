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
  if(readmore.textContent === 'Показать все') {
    readmore.textContent = 'Скрыть';
  }else {
    readmore.textContent = 'Показать все';
  }

  if(parseInt(window.getComputedStyle(document.body).width) < 1120) {
    sliderContainer.classList.toggle('slider-container-medium');
    sliderWrapper.classList.toggle('slider-wrapper-medium');
  }
  if(parseInt(window.getComputedStyle(document.body).width) > 1119) {
    sliderContainer.classList.toggle('slider-container-large');
    sliderWrapper.classList.toggle('slider-wrapper-large');
  }
});
