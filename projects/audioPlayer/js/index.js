var musicData = [{
    musicName: "狐狸",
    author: "薛之谦",
    musicUrl: "http://music.163.com/song/media/outer/url?id=525241230.mp3",
    imgUrl: "./img/0.jpg"
  },
  {
    musicName: "眼里",
    author: "小咪",
    musicUrl: "http://music.163.com/song/media/outer/url?id=1361997765.mp3",
    imgUrl: "./img/xiaomi.jpg"
  },
  {
    musicName: "演员",
    author: "薛之谦",
    musicUrl: "http://music.163.com/song/media/outer/url?id=32507038.mp3",
    imgUrl: "./img/0.jpg"
  },
  {
    musicName: "十六",
    author: "小咪",
    musicUrl: "http://music.163.com/song/media/outer/url?id=1384535630.mp3",
    imgUrl: "./img/xiaomi.jpg"
  },
  {
    musicName: "你走以后1.0",
    author: "王恩信Est/二胖u",
    musicUrl: "http://music.163.com/song/media/outer/url?id=1363205817.mp3",
    imgUrl: "./img/1.jpg"
  },
  {
    musicName: "撒野（Cover：欸-61）",
    author: "凯瑟喵",
    musicUrl: "http://music.163.com/song/media/outer/url?id=483937795.mp3",
    imgUrl: "./img/2.jpg"
  }
]
$.each(musicData, function (index, value) {
  if (index == 0) {
    $('.list').append(` <li class="active" data-src="${value.musicUrl}">
  <div class="img">
  <img class="auto-img playing" src="${value.imgUrl}" alt="">
  </div>
  <div class="discrib">
    <div class="name">${value.musicName}</div>
    <div class="auther">${value.author}</div>
  </div>
</li>`);
  } else {
    $('.list').append(`<li data-src="${value.musicUrl}">
  <div class="img">
    <img class="auto-img" src="${value.imgUrl}" alt="">
  </div>
  <div class="discrib">
    <div class="name">${value.musicName}</div>
    <div class="auther">${value.author}</div>
  </div>
</li>`);
  }
})
$(function () {
  var duration = 0;
  var currentTime = 0;
  $('.my-audio')[0].onended = function () {
    //列表循环
    if ($('.list li.active').index() == $('.list li').length - 1) {
      $('.my-audio').attr('src', $('.list li').eq(0).data('src'))
      $('.list li').eq(0).addClass('active').siblings().removeClass('active')
    } else {
      $('.my-audio').attr('src', $('.list li').eq($('.list li.active').index() + 1).data('src'))
      $('.list li').eq($('.list li.active').index() + 1).addClass('active').siblings().removeClass('active')
    }
    change()
  }
  $('.my-audio')[0].oncanplay = function () {
    duration = this.duration;
    currentTime = this.currentTime;
    var minutes = parseInt(duration / 60) < 10 ? '0' + parseInt(duration / 60) : parseInt(duration / 60);
    var secound = parseInt(duration % 60) < 10 ? '0' + parseInt(duration % 60) : parseInt(duration % 60);
    $('.time .totalTime').html(`${minutes}:${secound}`)
    $('.list li').click(function () {
      $('.list').slideUp()
      if ($(this).hasClass('active')) {
        return;
      }
      $('.controls .fa-pause').addClass('active')
      $('.controls .fa-play').removeClass('active')
      $(this).addClass('active').siblings().removeClass('active')
      $('.my-audio').attr('src', $(this).attr('data-src'))
      $('.my-audio')[0].play()
      $('.controls .play').removeClass('fa-play').addClass('fa-pause')
      $('.show').css({
        background: 'url("' + $(this).find('img').attr('src') + '") no-repeat',
        backgroundSize: 'cover'
      })
      $('.show').find('.musicName').html($(this).find('.name').html())
      $('.show').find('.auther').html($(this).find('.auther').html())
      $(this).find('img').addClass('playing').end().siblings().find('img').removeClass('playing')
      $('img.playing').css({
        animationPlayState: 'running'
      })
    })
    $('.my-audio')[0].ontimeupdate = function () {
      duration = $('.my-audio')[0].duration;
      currentTime = $('.my-audio')[0].currentTime;
      var rate = currentTime / duration;
      var minutes = parseInt(currentTime / 60) < 10 ? '0' + parseInt(currentTime / 60) : parseInt(currentTime / 60)
      var secound = parseInt(currentTime % 60) < 10 ? '0' + parseInt(currentTime % 60) : parseInt(currentTime % 60)
      $('.time .newTime').html(`${minutes}:${secound}`)
      $('.mask').width(rate * $('.bar').width())
      $('.slider').css({
        left: rate * ($('.bar').width() - $('.slider').width())
      })
    }
  }
  $('.cover').on('mousedown', function (e) {
    $('.mask').width(e.offsetX)
    $('.slider').css({
      left: e.offsetX
    })
    $('.my-audio')[0].currentTime = (e.offsetX / $(this).width()) * $('.my-audio')[0].duration;
  })
  $('.fa-play').on('click', function () {
    $('img.playing').css({
      animationPlayState: 'running'
    })
    $('.my-audio')[0].play()
    $(this).removeClass('active')
    $('.fa-pause').addClass('active');
  })
  $('.fa-pause').on('click', function () {
    $('.my-audio')[0].pause();
    $(this).removeClass('active');
    $('.fa-play').addClass('active');
    $('img.playing').css({
      animationPlayState: 'paused'
    })
  })
  $('.fa-bars').click(function () {
    $('.list').slideToggle()
  })
  $('.fa-backward').on('click', function () {
    if ($('.list li.active').index() == 0) {
      $('.my-audio').attr('src', $('.list li').eq($('.list li').length - 1).data('src'))
      $('.list li').eq($('.list li').length - 1).addClass('active').siblings().removeClass('active')
    } else {
      $('.my-audio').attr('src', $('.list li').eq($('.list li.active').index() - 1).data('src'))
      $('.list li').eq($('.list li.active').index() - 1).addClass('active').sibling().removeClass('active')
    }
    change()
  })
  $('.fa-forward').on('click', function () {
    if ($('.list li.active').index() == $('.list li').length - 1) {
      $('.my-audio').attr('src', $('.list li').eq(0).data('src'))
      $('.list li').eq(0).addClass('active').siblings().removeClass('active')
    } else {
      $('.my-audio').attr('src', $('.list li').eq($('.list li.active').index() + 1).data('src'))
      $('.list li').eq($('.list li.active').index() + 1).addClass('active').siblings().removeClass('active')
    }
    change()
  })
  function change() {
    $('.my-audio')[0].play();
    $('.fa-play').removeClass('active')
    $('.fa-pause').addClass('active')
    $('.list li.active').find('img').addClass('playing').end().siblings().find('img').removeClass('playing')
    $('img.playing').css({
      animationPlayState: 'running'
    })
    $('.show').css({
      background: 'url("' + $('.list li.active').find('img').attr('src') + '") no-repeat',
      backgroundSize: 'cover'
    })
    $('.show').find('.musicName').html($('.list li.active').find('.name').html())
    $('.show').find('.auther').html($('.list li.active').find('.auther').html())
  }
});