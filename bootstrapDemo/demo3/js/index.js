$(function(){

  $('.header .meun-btn').on('touchstart',function(){
    $('.header .menu-small').css({
      right:0
    })
  })

  $('.header .close').on('touchstart',function(){
    $('.header .menu-small').css({
      right:'-40%'
    })

  })

  $('.carousel2').carousel({
    interval: 5000,
    keyboard:false,
    pause:null
  })
  $('.to-top').on('click',function(){
    // console.log($(document).scrollTop())
    if($(document).scrollTop()==0){
      return;
    }
    $(document).scrollTop(0)
  })

})
