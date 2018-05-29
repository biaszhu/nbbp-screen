var RoyalSalute = {}


RoyalSalute.initAnime = function() {
  var myTimeline = anime.timeline({
        direction: 'alternate',
        loop: 0,
        autoplay: false,
        complete: function(anime2) {
            anime({
                targets: '#wine',
                translateX: [0, 10, 0, -10 , 0],
                delay: 2000,
                easing: 'linear',
                duration: 750,
                loop: true
            })
            $('.suc-tip').wordAppend(100, function() {})
        }
    });
    myTimeline
        .add({
            targets: '#user-send',
            scale: [0, 1]
        })
        .add({
            targets: '#wine',
            opacity: [0, 1],
            translateX: ["-100%", 0],
            easing: 'easeInOutCubic',
            duration: 1000
        })
    myTimeline.play()
  
}

RoyalSalute.init = function(time) {
  if (!time) {
    return ;
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
              parent.window.postMessage({status: 'close'}, '*')
          }
      )
  });
}

