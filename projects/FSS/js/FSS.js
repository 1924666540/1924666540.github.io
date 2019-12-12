$(function () {
  var y = 0;
  var Canchlick = true;
  var current = 0;
  $('body').on('wheel', function (e) {
    y += e.originalEvent.deltaY;
    setTimeout(function () {
      if (Canchlick) {
        Canchlick = false;
        if (y < 0) {
          prevPic(), 5000;
        } else if (y > 0) {
          nextPic();
        }
        $('.nav-list li').eq(current).addClass('active').siblings().removeClass('active');
        setTimeout(function () {
          y = 0;
          Canchlick = true;
          myAnimate();
        }, 500);
      }
    }, 100);
  })
  $('.nav-list li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    current = $(this).index();
    showPic()
    myAnimate()
  })

  function nextPic() {
    current = current >= $('.list li').length - 1 ? $('.list li').length - 1 : ++current;
    showPic()
  }

  function prevPic() {
    current = current <= 0 ? 0 : --current;
    showPic()
  }

  function showPic() {
    $('.list li').eq(0).animate({
      marginTop: -100 * current + 'vh'
    })
  }

  function myAnimate() {
    if (current == 0) {
      $('.list .page1').find('.move-bg').animate({
        top: 0
      }, 1000).end().find('.tiile-main').animate({
        top: '35vh'
      }, 1000).end().find('.title-second').animate({
        top: '50vh'
      }, 1000).end().find('.release').animate({
        top: '65vh'
      }, 1000)
    } else {
      $('.list .page1').find('.move-bg').animate({
        top: '60vh'
      }, 1000).end().find('.tiile-main').animate({
        top: '-10vh'
      }, 1000).end().find('.title-second').animate({
        top: '100vh'
      }, 1000).end().find('.release').animate({
        top: '100vh'
      }, 1000)
    }
    if (current == 1) {
      $('.page2').find('.title-icon').css({
        transform: 'scale(1)',
        opacity: 1
      }).find('.small-bg').css({
        transform: 'scale(1)',
        opacity: 1
      }).end().siblings('.pc').animate({
        opacity: 1,
        left: 0
      }, 1000).siblings('.phone').animate({
        opacity: 1,
        left: 0
      }, 1000)
    } else {
      $('.page2').find('.title-icon').css({
        transform: 'scale(0)',
        opacity: 0
      }).find('.small-bg').css({
        transform: 'scale(0)',
        opacity: 0
      }).end().siblings('.pc').animate({
        opacity: 0,
        left: -100
      }, 1000).siblings('.phone').animate({
        opacity: 0,
        left: 100
      }, 1000)
    }
    if (current == 2) {
      $('.page3').find('.page3-title').animate({
        top: 62,
        opacity: 1
      }, 1000).siblings('.page3-text').animate({
        top: 62,
        opacity: 1
      }, 1000).siblings('.page3-icon').animate({
        top: 62,
        opacity: 1
      }, 1000)
    } else {
      $('.page3').find('.page3-title').animate({
        top: 120,
        opacity: 0
      }, 1000).siblings('.page3-text').animate({
        top: 80,
        opacity: 0
      }, 1000).siblings('.page3-icon').animate({
        top: 120,
        opacity: 0
      }, 1000)
    }
    if (current == 3) {
      $('.page4').find('.page4-bg1').css({
        transform: 'scale(1)'
      }).siblings('.page4-bg2').css({
        transform: 'scale(1)'
      }).siblings('.page4-bg3').animate({
        top: 100
      }, 1000).siblings('.page4-bg4').animate({
        top: 100
      }, 1000).siblings('.page4-bg5').animate({
        top: 100,
        opacity: 1
      }, 1000).siblings('.page4-bg6').animate({
        top: 100,
        opacity: 1
      }, 1000)
    } else {
      $('.page4').find('.page4-bg1').css({
        transform: 'scale(0)'
      }).siblings('.page4-bg2').css({
        transform: 'scale(0)'
      }).siblings('.page4-bg3').animate({
        top: -200
      }, 1000).siblings('.page4-bg4').animate({
        top: 400
      }, 1000).siblings('.page4-bg5').animate({
        top: 200,
        opacity: 0,
      }, 1000).siblings('.page4-bg6').animate({
        opacity: 0,
        top: 200
      }, 1000)
    }
    if (current == 4) {
      $('.list .page5').find('.page5-bg1').animate({
        top: 80,
        opacity: 1
      }, 1000).siblings('.page5-bg2').animate({
        top: 80,
        opacity: 1
      }, 1000).siblings('.page5-bg3').animate({
        top: 80,
        opacity: 1
      }, 1000).siblings('.page5-bg4').animate({
        left: 160,
        opacity: 1
      }, 1000).siblings('.page5-bg5').animate({
        left: 160,
        opacity: 1
      }, 1000)
    } else {
      $('.list .page5').find('.page5-bg1').animate({
        top: 500,
        opacity: 0
      }, 1000).siblings('.page5-bg2').animate({
        top: 300,
        opacity: 0
      }, 1000).siblings('.page5-bg3').animate({
        top: 200,
        opacity: 0
      }, 1000).siblings('.page5-bg4').animate({
        left: 500,
        opacity: 0
      }, 1000).siblings('.page5-bg5').animate({
        left: 500,
        opacity: 0
      }, 1000)
    }
    if (current == 5) {
      $('.list .page6').find('.page6-bg1').css({
        transform: 'scale(1)'
      }).siblings('.page6-bg2').css({
        transform: 'scale(1)'
      }).siblings('.page6-bg3').animate({
        top: 60
      }, 1000)
    } else {
      $('.list .page6').find('.page6-bg1').css({
        transform: 'scale(0)'
      }).siblings('.page6-bg2').css({
        transform: 'scale(0)'
      }).siblings('.page6-bg3').animate({
        top: 500
      }, 1000)
    }
    if (current == 6) {
      $('.list .page7').find('.page7-code').animate({
        top: 160,
        opacity: 1
      }, 1000).siblings('.page7-btn').animate({
        top: 0,
        opacity: 1
      }, 1000)
    } else {
      $('.list .page7').find('.page7-code').animate({
        top: 600,
        opacity: 0
      }, 1000).siblings('.page7-btn').animate({
        top: 300,
        opacity: 0
      }, 1000)
    }
  }
})