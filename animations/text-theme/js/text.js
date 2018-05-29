window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var canvas = document.createElement("canvas")
  var context = canvas.getContext("2d")
  var balls = []
  var hander = null
  var ball = function() {
    this.radius = random(Math.floor(fSize * 0.05), Math.floor(fSize * 0.15))
    this.x = random(2 * this.radius, canvas.width - 2 * this.radius)
    this.y = random(canvas.height * 3 / 4, canvas.height - 2 * this.radius)
    this.opacity = Math.random(0, 1)
  }

  ball.prototype.move = function() {
    this.y--
    this.opacity -= 0.003
  }

  ball.prototype.draw = function() {
    context.beginPath()
    context.fillStyle = 'rgba(255,255,255,' + this.opacity + ')'
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fill()
    context.closePath()
  }

  function random(min, max) {
    return Math.floor(Math.random(0, 1) * (max - min) + min)
  }

  function initPaoPao() {

    var holder = document.getElementById("canvas-holder")
    canvas.width = holder.offsetWidth
    canvas.height = holder.offsetHeight + holder.getBoundingClientRect().top
    canvas.id = "canvas"
    canvas.style.marginLeft = (-holder.offsetWidth / 2) + 'px'
    document.getElementById("firstScene").appendChild(canvas)
    generatePaoPao()
  }

  function generatePaoPao() {
    for (var i = 0; i < 30; i++) {
      balls.push(new ball())
    }

    hander = requestAnimationFrame(loop)
  }


  function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (var i = 0; i < balls.length; i++) {
      if (balls[i].opacity <= 0) {
        balls[i] = new ball()
      } else {
        balls[i].draw()
        balls[i].move()
      }
    }
    hander = requestAnimationFrame(loop)
  }

  $(function() {

    window.init = function(seconds) {
      // 1 有图片 0 无图片
      var ba_type = $('#ba_type').val()
      var timeline = new Timeline()
      timeline
        .add({
          event: function() {
            $('.main-pic').addClass('animatePic')
          },
          delay: 600
        })
        .add({
          event: function() {
            $('.light-ani').addClass('animate')
          },
          delay: 1000
        })
        .add({
          event: function() {
            initPaoPao()
            $('.light-inner').addClass('moveLight')
          },
          delay: 750
        })
        .add({
          event: function() {
            $('#firstScene').hide()
            window.cancelAnimationFrame(hander)
            if(ba_type == "1") {
              $('#secondScene').css('visibility', 'visible').addClass('in')
              $('.user-img-wrapper').addClass('movePic')
              $('.user-msg-wrapper').addClass('moveInfo')
            } else {
              $('#thirdScene').css('visibility', 'visible').addClass('in')
            $('#main2-wrapper').addClass('animated rotateIn')
            }
            calTime(seconds)
          },
          delay: 4000
        })
        .add({
          event: function() {
            var animateClasses = 'flash tada swing flip flipInX flipInY fadeIn fadeInUp fadeInDown fadeInRight fadeInUpBig fadeInDownBig fadeInRightBig bounceIn bounceInDown bounceInUp bounceInRight rotateIn rotateInDownRight rotateInUpLeft rotateInUpRight rollIn';
            animateClasses = animateClasses.split(" ")

            var text = $('#text-content-' + ba_type)
            var css = ba_type == "1" ? getCss(text.text().length) : getCss(text.text().length, 0)
            text.css(css)
            var index = Math.floor(Math.random(0, 1) * animateClasses.length)
            text.textillate({ in: { effect: animateClasses[index] } }).css('visibility', 'visible')
          },
          delay: 1000
        })
        .do()

      var flag = false
      if(ba_type == "1") {
              $('.user-msg-wrapper').on('webkitAnimationEnd', function() {
                // 有照片
                if (!flag){
                  flag = true
                  $('.avatar-border').find('span').addClass('animate')
                }
              })
            } else {
              $('#main2-wrapper').on('webkitAnimationEnd', function() {
                if (!flag){
                  flag = true
                  $('.avatar-border2').find('span').addClass('animate')
                }
                
              })
            }

    }

    function calTime(seconds) {
      var seconds = seconds
      var timer = setInterval(function() {
        if (seconds == 0) {
          clearInterval(timer)
          console.log('end')
          parent.window.postMessage({status: 'close'}, '*')
        } else {
          seconds--
        }
        $('.count_time').text(seconds)
      }, 1000)
    }


  })