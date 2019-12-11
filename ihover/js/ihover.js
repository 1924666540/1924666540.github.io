$(function () {
  $('.stage2 .markC').on('mouseover', function () {

    $('.stage2 .btnC').css({
      transform: 'rotate(-180deg)'
    })
    $('.stage2 .layerC').css({
      transform: 'translateX(50px)',
      opacity: '1'
    })

  })
  $('.stage2 .markD').on('mouseover', function () {

    $('.stage2 .btnD').css({
      transform: 'rotate(180deg)'
    })
    $('.stage2 .layerD').css({
      transform: 'translateX(-50px)',
      opacity: '1'
    })

  })
  $('.stage2 .markC').on('mouseout', function () {

    $('.stage2 .btnC').css({
      transform: 'rotate(0deg)'
    })

    $('.stage2 .layerC').css({
      transform: 'translateX(-200px)',
      opacity: '0'
    })
  })
  $('.stage2 .markD').on('mouseover', function () {

    $('.stage2 .btnD').css({
      transform: 'rotate(90deg)'
    })

    $('.stage2 .layerD').css({
      transform: 'translateX(-50px)',
      opacity: '1'
    })
  })
  $('.stage2 .markD').on('mouseout', function () {

    $('.stage2 .btnD').css({
      transform: 'rotate(0deg)'
    })

    $('.stage2 .layerD').css({
      transform: 'translateX(200px)',
      opacity: '0'
    })
  })
  $('.stage3 .markE').on('mouseover', function () {
    $('.stage3 .layerE').css({
      transform: 'translateX(0px)',
      opacity: 1
    })
    $('.stage3 .btnE').css({
      transform: 'translateX( 150px) translateY( -200px) scale(.5)'

    })
  })
  $('.stage3 .markE').on('mouseout', function () {
    $('.stage3 .layerE').css({
      transform: 'translateX(-250px)',
      opacity: 0
    })
    $('.stage3 .btnE').css({
      transform: 'translateX( 50px) translateY( -200px) scale(1)'
    })
  })
  $('.stage3 .markF').on('mouseover', function () {

    $('.stage3 .layerF').css({
      transform: 'translateX(300px) translateY(-400px)',
      opacity: 1
    })
    $('.stage3 .btnF').css({
      transform: 'translateX( 250px) translateY( -600px) scale(.5)'

    })
  })
  $('.stage3 .markF').on('mouseout', function () {
    $('.stage3 .layerF').css({
      transform: 'translateX(550px) translateY(-400px)',
      opacity: 0
    })
    $('.stage3 .btnF').css({
      transform: 'translateX( 350px) translateY( -600px)'
    })
  })
})