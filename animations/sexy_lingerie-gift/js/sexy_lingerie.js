var SexyLingerie = {}


SexyLingerie.initAnime = function() {
  anime({
  targets: '#user-send',
  scale: [0, 1],
  complete: function(anime) {
    $('.suc-tip').wordAppend(100, function() {})
  }
})
}

SexyLingerie.init = function(time) {
  if (!time) {
    return ;
  }
  replaceImgSrc()
  var _this = this
  imagesLoaded('#body', { background: true }, function() {
      console.log('#body background image loaded');
      document.getElementById("loader").style.display = 'none'
      document.getElementById("body").style.display = 'block'
      _this.initAnime()
      timeCountDown(time,
          function(t) {
              document.getElementById('time').innerHTML = t
          },
          function() {
              parent.window.postMessage({status: 'close'}, '*')
          }
      )
  });
}

function replaceImgSrc () {
  $('.img').each(function(i, v) {
    if ($('html').hasClass('mobile')) {
      $(v).attr('src', $(v).attr('data-mobile'))
    } else {
      $(v).attr('src', $(v).attr('data-pc'))
    }
  })
}