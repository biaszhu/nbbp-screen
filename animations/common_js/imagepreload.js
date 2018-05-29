var isPC = IsPC()
var bg = '../addons/bl_wx_wall/template/images/newbig/bg.webm'
var isPic
if(isPC) {
  bg = document.getElementById("bg-value").value
  var reg1 = /\.(jpg|jpeg|png|bmp|gif)$/
  isPic = reg1.test(bg)
}

var AnimationPics = [{
  'PC': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball1.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball2.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball3.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball4.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball5.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball6.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/ball7.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/yellow-bg.webm'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball1.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball2.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball3.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball4.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball5.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball6.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/ball7.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/birthday/mobile/yellow.jpg'
  ]
}, {
  'PC': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/C.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/D.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/E.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/F.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/purple-bg.webm'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/mobile/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/mobile/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/mobile/B.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/mobile/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/mobile/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/love/mobile/purple.jpg'
  ]
}, {
  'PC': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/C.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/D.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/E.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/red-bg.webm'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/mobile/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/mobile/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/mobile/B.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/mobile/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/mobile/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/ask_about/mobile/red.jpg'
  ]
}, {
  'PC': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/C.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/D.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/E.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/F.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/loveheart1.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/loveheart2.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/right-border.png'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/B.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/loveheart1.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/loveheart2.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/propose/mobile/right-border.png'
  ]
}, {
  'PC': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/E.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/F.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/blue-bg.webm'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/mobile/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/mobile/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/mobile/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/mobile/left-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/mobile/right-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/brother/mobile/blue.jpg'
  ]
}, {
  'PC': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/A.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/C.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/E.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/F.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/right-large-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/right-large-border-yellow.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/right-large-border-red.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/right-large-border-purple.png'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/avatar-circle-inner.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/avatar-circle-outer.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/B.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/right-large-border.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/right-large-border-yellow.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/right-large-border-red.png',
    '../addons/bl_wx_wall/template/images/shangqiang/H5V2.0/text/mobile/right-large-border-purple.png'
  ]
}, {
  //ship
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/yacht/bg.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/bg2.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_coconut.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew1.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew2.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew3.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew4.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew5.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_ship.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/x1.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/x2.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/x3.png'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/yacht/bg_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/bg2_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_coconut.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew1.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew2.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew3.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew4.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_mew5.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/i_ship.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/x1.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/x2.png',
    '../addons/bl_wx_wall/template/images/H5/yacht/x3.png'
  ]
}, {
  // car
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg1.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg2.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg3.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/car.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/light_1.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/light_2.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg.jpg'
  ],
   'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg1_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg2_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg3_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/car.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/light_1_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/light_2_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/vehicle/bg_mobile.jpg'
  ]
}, {
  // hermes
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/hermes/bag_two.png',
    '../addons/bl_wx_wall/template/images/H5/hermes/bg.jpg',
    '../addons/bl_wx_wall/template/images/H5/hermes/line_two.png',
    '../addons/bl_wx_wall/template/images/H5/hermes/logo_two.png'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/hermes/bag_two_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/hermes/bg_mobile.jpg',
    '../addons/bl_wx_wall/template/images/H5/hermes/line_two_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/hermes/logo_two.png'
  ]
}, {
  // okamoto
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/okamoto/light.png',
    '../addons/bl_wx_wall/template/images/H5/okamoto/bg.jpg',
    '../addons/bl_wx_wall/template/images/H5/okamoto/pro.png'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/okamoto/light_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/okamoto/bg_mobile.jpg',
    '../addons/bl_wx_wall/template/images/H5/okamoto/pro_mobile.png'
  ]
}, {
  // rose
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/rose/color.png',
    '../addons/bl_wx_wall/template/images/H5/rose/bg.jpg',
    '../addons/bl_wx_wall/template/images/H5/rose/glitter.png',
    '../addons/bl_wx_wall/template/images/H5/rose/rose.png',
    '../addons/bl_wx_wall/template/images/H5/rose/word_bg.jpg'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/rose/color_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/rose/bg_mobile.jpg',
    '../addons/bl_wx_wall/template/images/H5/rose/glitter_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/rose/rose_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/rose/word_bg_mobile.jpg'
  ]
}, {
  // royal_salute
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/royal_salute/wine.png',
    '../addons/bl_wx_wall/template/images/H5/royal_salute/bg.jpg'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/royal_salute/wine_mobile.png',
    '../addons/bl_wx_wall/template/images/H5/royal_salute/bg_mobile.jpg'
  ]
}, {
  // sexy_lingerie
  'PC': [
    '../addons/bl_wx_wall/template/images/H5/sexy_lingerie/bg.jpg'
  ],
  'MOBILE': [
    '../addons/bl_wx_wall/template/images/H5/sexy_lingerie/bg_mobile.jpg'
  ]
}, {
  'PC': [
    bg
    //'../addons/bl_wx_wall/template/images/newbig/bg.webm'
  ],
  'MOBILE': []
}]

window.BlobVideos = {}


// 加载图片
var imagePreload = function() {
  this.total = 0
  this.images = []
  this.progressBar = null
}

imagePreload.prototype.init = function() {
  this.initLoading()
  this.initLoadImage()
  this.startLoadImage()
}

// 加载进度条
imagePreload.prototype.initLoading = function() {
  console.log('加载中')
  this.progressBar = new ProgressBar.Line('#progressbar', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1000,
    color: '#32efed',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#fff',
        position: 'absolute',
        right: '0',
        top: '20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: { color: '#8abfe2' },
    to: { color: '#32efed' },
    step: function(state, bar) {
      bar.path.setAttribute('stroke', state.color);
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  this.progressBar.animate(0)
}

// 获取图片总数
imagePreload.prototype.initLoadImage = function() {
  var _this = this
  var total = 0
  AnimationPics.forEach(function(v, i) {
    if (isPC) {
      AnimationPics[i].PC.forEach(function(vv, ii) {
        _this.images.push(vv)
      })
    } else {
      var type = AnimationPics[i].MOBILE ? 'MOBILE' : 'PC'
      AnimationPics[i][type].forEach(function(vv, ii) {
        _this.images.push(vv)
      })
    }

  })
  _this.total = _this.images.length
}

// 开始加载到缓存
imagePreload.prototype.startLoadImage = function() {
  var _this = this
  if (this.images.length > 0) {
    var reg = /\.(jpg|jpeg|png|bmp|gif)$/
    if (reg.test(this.images[0])) {
      var img = new Image()
      img.src = this.images[0]
      if (img.complete) {
        _this.images.shift()
        _this.updateBar()
        _this.startLoadImage()
      } else {
        img.onload = function() {
          //console.log("loaded=" + _this.images[0])
          _this.images.shift()
          _this.updateBar()
          _this.startLoadImage()
        }
        img.onerror = function() {
          _this.images.shift()
          _this.updateBar()
          _this.startLoadImage()
        }
      }
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', _this.images[0], true);
      xhr.responseType = 'blob';
      xhr.onload = function(e) {
        if (this.status == 200 && this.readyState) {
          var myBlob = this.response;
          var vid = (window.webkitURL ? webkitURL : URL).createObjectURL(myBlob);
          window.BlobVideos[_this.images[0]] = vid
          _this.images.shift()
          _this.updateBar()
          _this.startLoadImage()
        } else {
          _this.images.shift()
          _this.updateBar()
          _this.startLoadImage()
        }
      }

      xhr.send();
    }

  } else {
    // 结束
    console.log('加载完毕')
    var main = document.getElementById('main')
    if (main) {
      document.getElementById('main').style.display = 'flex'
    }
    if (isPic && isPC) {
      document.body.style.backgroundImage = 'url('+bg+')'
    }
    setTimeout(function(){
      document.getElementById('progressWrap').style.display = 'none'
      window.init && window.init()
    }, 1000)
  }
}

imagePreload.prototype.updateBar = function() {
  var hasLoad = this.total - this.images.length
  var flaotNum = parseFloat(hasLoad / this.total).toFixed(2)
  this.progressBar.animate(flaotNum)
}

var i = new imagePreload()
i.init()