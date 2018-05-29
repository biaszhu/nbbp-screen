var basePicUrl = 'http://xnb.siweiquanjing.com/screen/'
//var basePicUrl = 'http://localhost/nbbp-screen/'
var AnimationPics = {
  0: [
    'animations/common_img/right-large-border.png',
    'animations/common_img/right-large-border-purple.png',
    'animations/common_img/right-large-border-yellow.png',
    'animations/common_img/right-large-border-red.png'
  ],
  1: [
    'animations/birthday-theme/images/avatar-circle-inner.png',
    'animations/birthday-theme/images/avatar-circle-outer.png',
    'animations/birthday-theme/images/A.png',
    'animations/birthday-theme/images/ball1.png',
    'animations/birthday-theme/images/ball2.png',
    'animations/birthday-theme/images/ball3.png',
    'animations/birthday-theme/images/ball4.png',
    'animations/birthday-theme/images/ball5.png',
    'animations/birthday-theme/images/ball6.png',
    'animations/birthday-theme/images/ball7.png',
    'animations/birthday-theme/images/left-border.png',
    'animations/birthday-theme/images/right-border.png'
  ],
  2: [
    'animations/love-theme/images/avatar-circle-inner.png',
    'animations/love-theme/images/avatar-circle-outer.png',
    'animations/love-theme/images/A.png',
    'animations/love-theme/images/C.png',
    'animations/love-theme/images/D.png',
    'animations/love-theme/images/E.png',
    'animations/love-theme/images/F.png',
    'animations/love-theme/images/left-border.png',
    'animations/love-theme/images/right-border.png'
  ],
  3: [
    'animations/ask_about-theme/images/avatar-circle-inner.png',
    'animations/ask_about-theme/images/avatar-circle-outer.png',
    'animations/ask_about-theme/images/A.png',
    'animations/ask_about-theme/images/C.png',
    'animations/ask_about-theme/images/D.png',
    'animations/ask_about-theme/images/E.png',
    'animations/ask_about-theme/images/left-border.png',
    'animations/ask_about-theme/images/right-border.png'
  ],
  5: ['hb-rain.webm'],
  4: [
    'animations/propose-theme/images/avatar-circle-inner.png',
    'animations/propose-theme/images/avatar-circle-outer.png',
    'animations/propose-theme/images/A.png',
    'animations/propose-theme/images/C.png',
    'animations/propose-theme/images/D.png',
    'animations/propose-theme/images/E.png',
    'animations/propose-theme/images/F.png',
    'animations/propose-theme/images/loveheart1.png',
    'animations/propose-theme/images/loveheart2.png',
    'animations/propose-theme/images/left-border.png',
    'animations/propose-theme/images/right-border.png',
  ],
  6: [
    'animations/brother-theme/images/avatar-circle-inner.png',
    'animations/brother-theme/images/avatar-circle-outer.png',
    'animations/brother-theme/images/A.png',
    'animations/brother-theme/images/E.png',
    'animations/brother-theme/images/F.png',
    'animations/brother-theme/images/left-border.png',
    'animations/brother-theme/images/right-border.png'
  ],
  7: [
    'animations/yacht-gift/images/bg.png',
    'animations/yacht-gift/images/bg2.png',
    'animations/yacht-gift/images/i_coconut.png',
    'animations/yacht-gift/images/i_mew1.png',
    'animations/yacht-gift/images/i_mew2.png',
    'animations/yacht-gift/images/i_mew3.png',
    'animations/yacht-gift/images/i_mew4.png',
    'animations/yacht-gift/images/i_mew5.png',
    'animations/yacht-gift/images/i_ship.png',
    'animations/yacht-gift/images/x1.png',
    'animations/yacht-gift/images/x2.png',
    'animations/yacht-gift/images/x3.png'
  ],
  8: [
    'animations/vehicle-gift/images/bg1.png',
    'animations/vehicle-gift/images/bg2.png',
    'animations/vehicle-gift/images/bg3.png',
    'animations/vehicle-gift/images/car.png',
    'animations/vehicle-gift/images/light_1.png',
    'animations/vehicle-gift/images/light_2.png',
    'animations/vehicle-gift/images/bg.jpg'
  ],
  9: ['hb-only.webm'],
  10: [
    'animations/hermes-gift/images/bag_two.png',
    'animations/hermes-gift/images/bg.jpg',
    'animations/hermes-gift/images/line_two.png',
    'animations/hermes-gift/images/logo_two.png'
  ],
  11: [
    'animations/okamoto-gift/images/light.png',
    'animations/okamoto-gift/images/bg.jpg',
    'animations/okamoto-gift/images/pro.png'
  ],
  12: [
    'animations/rose-gift/images/color.png',
    'animations/rose-gift/images/bg.jpg',
    'animations/rose-gift/images/glitter.png',
    'animations/rose-gift/images/rose.png',
    'animations/rose-gift/images/word_bg.jpg'
  ],
  13: [
    'animations/royal_salute-gift/images/wine.png',
    'animations/royal_salute-gift/images/bg.jpg'
  ],
  14: [
    'animations/sexy_lingerie-gift/images/bg.jpg'
  ]
}
window.BlobVideos = {}
// 加载图片
var imagePreload = function(options) {
  this.total = 0
  this.images = []
  this.progressBar = document.querySelector(".progress")
  this.percentDom = document.querySelector("#percent")
  this.progressBar.addEventListener('webkitTransitionEnd', function() {
    if (this.images.length == 0) {
     options.callback && options.callback()
    }
  }.bind(this))
}

imagePreload.prototype.init = function() {
  this.initLoadImage()
  this.startLoadImage()
}

// 获取图片总数
imagePreload.prototype.initLoadImage = function() {
  var _this = this
  var total = 0
  for (var i in AnimationPics) {
    AnimationPics[i].forEach(function(v, i) {
      var _url = v.indexOf('http') != -1 ? v : basePicUrl + v
       _this.images.push(_url)
    })
  }
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
      // console.log(_this.images[0])
      xhr.responseType = 'blob';
      xhr.onload = function(e) {
        if (this.status == 200 && this.readyState) {
          var myBlob = this.response;
          var vid = (window.webkitURL ? webkitURL : URL).createObjectURL(myBlob);
          var keyStart = _this.images[0].lastIndexOf('/') + 1
          var keyEnd = _this.images[0].lastIndexOf('.')
          var key = _this.images[0].substring(keyStart, keyEnd)
          window.BlobVideos[key] = vid
          _this.images.shift()
          _this.updateBar()
          _this.startLoadImage()
        } else {
          _this.images.shift()
          _this.updateBar()
          _this.startLoadImage()
        }
      }
      xhr.onerror = function(e) {
        _this.images.shift()
        _this.updateBar()
        _this.startLoadImage()
      }
      xhr.send();
    }

  } else {
    // 结束
  }
}

imagePreload.prototype.updateBar = function() {
  var hasLoad = this.total - this.images.length
  var flaotNum = parseFloat(hasLoad / this.total).toFixed(2)
  //this.progressBar.animate(flaotNum)
  this.percentDom.innerHTML = parseInt(flaotNum * 100) + '%'
  this.progressBar.style.width = flaotNum * 100 + '%'
}

imagePreload.prototype.push = function(url) {
  this.images.push(url)
}
