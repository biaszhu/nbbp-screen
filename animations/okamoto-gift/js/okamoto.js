var GangBen = {}


GangBen.initAnime = function() {
  var myTimeline = anime.timeline({
    direction: 'alternate',
    loop: 0,
    autoplay: false
  });
  var gangben = document.getElementById("gangben")
  var gangbenleft = gangben.getBoundingClientRect().right

  myTimeline
    .add({
      targets: '#gangben',
      scale: [0, 0.7],
      translateX: [0, -gangbenleft * 2],
      duration: 500,
      easing: 'easeInOutSine'
    })
    .add({
      targets: '#gangben',
      scale: [0.7, 1],
      translateX: [
        { value: -gangbenleft * 2, duration: 0, delay: 0, easing: 'linear' },
        { value: 0, duration: 500, elasticity: 0, easing: 'linear' }
      ],
      duration: 500
    })
    .add({
      targets: '#light',
      opacity: [0, 1],
      scale: [0, 1],
      easing: 'linear',
      duration: 300
    })
    .add({
      targets: '#user-send',
      translateX: ["-100%", 0],
      opacity: [0, 1]
    })
  myTimeline.play()
  myTimeline.complete = function(ae) {
    anime({
      targets: '#light',
      opacity: [1, 0.5, 1],
      loop: true,
      easing: 'linear',
      duration: 3000
    })
  }
}

GangBen.init = function(time) {
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
        parent.window.postMessage({status: 'close'}, '*')
      }
    )
  });
}