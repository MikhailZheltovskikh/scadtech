$('.menu__btn').on('click', function () {
   $('.menu__list-top').slideToggle();
   $('.menu__btn').toggleClass('active');
   $('body').toggleClass('lock');
});