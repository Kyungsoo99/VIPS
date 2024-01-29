var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1000
});

// 선택적: 추가적인 사용자 정의 로직이 필요한 경우 여기에 작성
