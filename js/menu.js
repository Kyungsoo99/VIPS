(function ($) {
  // 아코디언 메뉴 숨기기
  $('.cate ul').hide();

  // 아코디언 서브메뉴 오픈/클로즈
  $('.cate .accordian_menu .subopen').click(function () {
      if ($(this).hasClass('active')) {
          $(this).parent().next().slideUp('slow');
          $(this).removeClass('active');
      } else {
          $('.accordion').find('.active').parent().next().slideUp('slow');
          $('.accordion').find('.active').removeClass('active');
          $(this).parent().next().slideDown('slow');
          $(this).addClass('active');
      }
  });

  // 아코디언 메뉴 오픈
  $('.open').on('click', function () {
      $('nav').addClass('open');
      $('body').css('overflow', 'hidden'); // 페이지 스크롤 방지
  });

  // 아코디언 메뉴 클로즈
  $('.close').on('click', function () {
      $('nav').removeClass('open');
      $('body').css('overflow', 'auto'); // 페이지 스크롤 복원
  });
})(jQuery);
