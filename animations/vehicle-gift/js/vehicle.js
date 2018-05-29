/*
* marry animation
* @author: Micheal Wayne
* @build time: 2017.09.02
*/

var Car = {
	width: $(window.parent).width(),
	height: $(window.parent).height(),

	wheelTime: 20,
	carTime: 2,
	waveChangeTime: 400,

	winInTime: 2000,
	winWordSpeed: 100,

	waveTime: 36,
	show_time:0
};
Car.wheelTime,
Car.carPlay = function () {
	var speed =
	    index = 0;

	/*var $wheelF = $('.m-wl_f'),
	    $wheelE = $('.m-wl_e');
	function run () {
	    index = index > 2 ? 0 : index + 1;

	    $wheelF.css('background-position-x', -index * 90 + 'px');
	    $wheelE.css('background-position-x', -index * 50 + 'px');

	    setTimeout(run, speed);
	}

	run();*/

	

	var index = 0;
	function run () {
	    /*$('.m-wl_f').css({
	        'background-position-x': -index * $('.m-wl_f').width() + 'px'
	    });
	    $('.m-wl_e').css({
	        'background-position-x': -index * $('.m-wl_e').width() + 'px'
	    });*/

	    index = index > 14 ? 0 : index + 1;
	    setTimeout(run, speed);
	}
	run();

	function style () {
		var _fWidth = $('.m-wl_f').width(),
		    _eWidth = $('.m-wl_e').width();

		var _fHeight = _fWidth / 2 * 3 + 'px',
		    _eHeight = _eWidth / 18 * 25 + 'px';

		$('.m-wl_f').css({
	        'height': _fHeight,
			'background-position-x': -index * $('.m-wl_f').width() + 'px'
	    });
	    $('.m-wl_e').css({
	        'height': _eHeight,
			'background-position-x': -index * $('.m-wl_e').width() + 'px'
	    });

	    setTimeout(style, 20);
	}
	style();

	setTimeout(function(){
		$('.m-car p').animate({
		    'margin-left': 0,
		    'margin-top': 0,
		    'width': '100%',
		    'height': '100%'
		}, 1000 * Car.carTime);
	},0)

	$('.light-1').animate({
		'margin-left': '50%',
		'opacity': '0.5'
	}, 1000 * Car.carTime);
	$('.light-2').animate({
		'margin-left': '50%',
		'opacity': '0.5'
	}, 1500 * Car.carTime)
	
	$.fn.showMove = function (time, opac) {
		var $t = $(this);
		
		function run () {
			$t.animate({
				'left': '100%',
				'top': 0,
				'opacity': opac || 0.7,
				'width': '60%',
				'height': '60%'
			}, time || 2000, function () {
				$t.css({
					'left': '-100%',
					'opacity': 1,
					'top': '20%',
					'width': '100%',
					'height': '100%'
				});
				run();
			});
		}
		run();
	}
	$('.bg-1').showMove(100);
	$('.bg-2').showMove(500);
	$('.bg-3').showMove(3000);
};

Car.windowPlay = function () {
	var $win = $('.m-win');
	if (Car.width < 1500) $win.removeClass('a-pulse');

	if (!isPC()) {
		//0.3 * 375
		var _scale = 150 / $(window.parent).width();
		$win.css({
			'-webkit-transform': 'scale(' + _scale + ', ' + _scale + ')',
			'transform': 'scale(' + _scale + ', ' + _scale + ')',
			'right': -40 * _scale + '%',
			'top': -60 * _scale + '%',
		})
	} else {
		var _scale = $(window.parent).width() / 1920;
		$(".m-win").css({
			transform: "scale(" + _scale + ", " + _scale + ")",
			'transform-origin': '100% 0%'
		});
	}
	$win.css('opacity', 0).removeClass('z-hide').fadeIn(Car.winInTime);
	setTimeout(function () {
		// countdown
		            timeCountDown(Car.show_time, function (num) {
		                $('#countDown').text(num);
		            }, function () {
		                //$('body').html('').css('background', '#000');
                        parent.window.postMessage({status: 'close'}, '*');
		            });
		
		$win.find('.m-w_word b').wordAppend(Car.winWordSpeed, function () {
			
		});
	}, Car.winInTime + 300);
};


Car.init = function (options) {
	if (options) {
		if (options.wheelTime) Car.wheelTime = +options.wheelTime;
		if (options.carTime) Car.carTime = +options.carTime;

		if (options.winWordSpeed) Car.winWordSpeed = +options.winWordSpeed;
		if (options.winInTime) Car.winInTime = +options.winInTime;
        if (options.show_time) Car.show_time = options.show_time;
	}

	Car.windowPlay();
	Car.carPlay();
	$('.m-bg2').fadeIn(3000);
};