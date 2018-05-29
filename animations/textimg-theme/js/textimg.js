
  $(function() {
		// 1 有图片 0 无图片
		var ba_type = $('#ba_type').val()
        window.init = function(seconds) {
          var timeline = new Timeline()
          timeline
            .add({
              event: function() {
                $('#secondScene').css('visibility', 'visible').addClass('in')
                $('.user-img-wrapper').addClass('movePic')
                $('.user-msg-wrapper').addClass('moveInfo')
                calTime(seconds)
              },
              delay: 600
            })
            .add({
                event: function() {
                  var animateClasses = 'flash tada swing flip flipInX flipInY fadeIn fadeInUp fadeInDown fadeInRight fadeInUpBig fadeInDownBig fadeInRightBig bounceIn bounceInDown bounceInUp bounceInRight rotateIn rotateInDownRight rotateInUpLeft rotateInUpRight rollIn';
                  animateClasses = animateClasses.split(" ")
                  // 有照片
                var text = $('.text-content')
                var css = getCss(text.text().length)
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
                parent.window.hideTheme()
              } else {
                seconds--
              }
              $('.count_time').text(seconds)
            }, 1000)
          }

        })