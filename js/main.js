// styling of swiper section



const slider1 = new Swiper('#slider1', {
  effect: 'slide',
  spaceBetween: 20,

  pagination: {
      el: '.swiper-pagination',
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },


  breakpoints: {

      565: {
          slidesPerView: 1,

      },

      600: {
          slidesPerView: 2,

      },

      786: {
          slidesPerView: 3,

      },

  }
});

const slider2 = new Swiper('#slider2', {
  effect: 'slide',

  pagination: {
      el: '.swiper-pagination',
  },


  autoplay: 
    {
      delay: 2000,
    },
    loop: true,
});


// const slider3 = new Swiper ('#slider3', {
//   // effect: 'cube',

//   effect: 'slide',

//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   pagination: {
//     el: '.swiper-pagination',
//   },

// });







var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({
              countNum: $this.text()
          }).animate({
                  countNum: countTo
              },

              {

                  duration: 2000,
                  easing: 'swing',
                  step: function () {
                      $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                      $this.text(this.countNum);
                      //alert('finished');
                  }

              });
      });
      counted = 1;
  }

});