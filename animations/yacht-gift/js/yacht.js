var Ship = {
	width: $(window.parent).width(),
	height: $(window.parent).height(),
	mewTime: 2e3,
	shipTime: 3e3,
	waveChangeTime: 400,
	winInTime: 2e3,
	winWordSpeed: 100,
	waveTime: 36,
	show_time:0
};
Ship.wavePlay = function() {
	function i() {
		$(".m-ctn").animate({
			left: "-900%"
		}, 1e3 * Ship.waveTime, "linear", function() {
			$(".m-ctn").css("left", "0"), i()
		})
	}
	i()
}, Ship.mewPlay = function() {
	$(".m-mews img").each(function() {
		function i() {
			e.animate({
				right: "120%",
				bottom: n
			}, t, function() {
				e.css({
					bottom: "33.33%",
					right: "-10%"
				}), setTimeout(i, 2e3 * Math.random() + 2e3)
			})
		}
		var e = $(this),
			n = e.data("bottom"),
			t = 1689 / e.data("speed") * Ship.mewTime;
		i()
	})
}, Ship.shipPlay = function() {
	function i() {
		o = o > 1 ? 0 : o + 1, m.eq(o).addClass("selected").siblings(".selected").removeClass("selected"), setTimeout(i, 400)
	}
	var e = $(".m-ship"),
		n = e.attr("data-bottom"),
		t = e.attr("data-right"),
		a = e.attr("data-width");
		setTimeout(function(){
			e.find("img").css({
		width: "5.56%",
		right: "23.4%",
		bottom: "22%"
	}).animate({
		width: "51.56%",
		bottom: "12.96%",
		right: "31.4%"
	}, 3e3);
}, 0)
	
	var m = $(".icon-wave"),
		o = 0;
	i()
}, Ship.windowPlay = function() {
	var i = $(".m-win");
	// 150 40 60
	if (Ship.width < 1500 && i.removeClass("a-pulse"), !isPC()) {
		var e = 150 / Ship.width;
		i.css({
			"-webkit-transform": "scale(" + e + ", " + e + ")",
			transform: "scale(" + e + ", " + e + ")",
			right: -40 * e + "%",
			top: -60 * e + "%"
		})
	}
	if (isPC()) {
		var _scale = Ship.width / 1920;
		i.css({
			transform: "scale(" + _scale + ", " + _scale + ")",
			'transform-origin': '100% 0%'
		})
	}
	i.css("opacity", 0).removeClass("z-hide").fadeIn(Ship.winInTime), setTimeout(function() {
		timeCountDown(Ship.show_time, function(i) {
			$("#countDown").text(i)
		}, function() {
			//$("body").html("").css("background", "#000")
            parent.window.postMessage({status: 'close'}, '*');
		}), i.find(".m-w_word b").wordAppend(Ship.winWordSpeed, function() {})
	}, Ship.winInTime + 300)
}, Ship.init = function(i) {
	i && (i.mewTime && (Ship.mewTime = +i.mewTime),
	i.shipTime && (Ship.shipTime = +i.shipTime),
	i.waveChangeTime && (Ship.waveChangeTime = +i.waveChangeTime),
	i.winWordSpeed && (Ship.winWordSpeed = +i.winWordSpeed),
	i.winInTime && (Ship.winInTime = +i.winInTime),
	i.waveTime && (Ship.waveTime = +i.waveTime),
    i.show_time && (Ship.show_time = i.show_time)),
	Ship.windowPlay(),
	Ship.mewPlay(),
	Ship.shipPlay(),
	Ship.wavePlay()
};