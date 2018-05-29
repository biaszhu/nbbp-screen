var Hermes = {}
Hermes.init = function(time) {
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

Hermes.initAnime = function() {
  var myTimeline = anime.timeline({
      direction: 'alternate',
      loop: 0,
      autoplay: false
  });
  var scale = IsPC() ? 1 : 0.85
  myTimeline
      .add({
          targets: '#bag_two',
          translateY: ["-100%", "0"]
      })
      .add({
          targets: '#logo_two',
          translateY: ["-1000%", "0"],
          easing: 'easeInOutCubic',
          duration: 300
      })
      .add({
          targets: '#line_two',
          scaleX: [0, 1],
          easing: 'easeInOutCubic',
          duration: 300
      })
      .add({
          targets: '#user-send',
          scale: [0, scale]
      })
  myTimeline.play()
  myTimeline.complete = function(a) {
    document.getElementById('bag_two').className = 'bounce animated infinite'
  }
}
