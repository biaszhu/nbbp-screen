var Rose = {}
Rose.init = function(time) {
  if (!time) {
    return;
  }
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
        parent.window.postMessage({ status: 'close' }, '*')
      }
    )
  });
}
Rose.initAnime = function() {
  var myTimeline = anime.timeline({
    direction: 'alternate',
    loop: 0,
    autoplay: false,
    complete: function(anime2) {
      anime({
        targets: '#glitter',
        opacity: [1, 0.5, 1],
        easing: 'linear',
        duration: 3000,
        loop: true
      })
      anime({
        targets: '#rose',
        scale: [1, 1.2, 1],
        easing: 'linear',
        duration: 3000,
        loop: true
      })
      $('.suc-tip').wordAppend(100, function() {})
    }
  });
  myTimeline
    .add({
      targets: '#rose',
      scale: [0, 1],
      rotate: '-1turn',
      duration: 800,
      easing: 'linear'
    })
    .add({
      targets: '#glitter',
      opacity: [0, 1],
      easing: 'easeInOutCubic',
      duration: 1000
    })
    .add({
      targets: '#user-send',
      scale: [0, 1]
    })
  myTimeline.play()
}