var faces = [{
  icon: './images/face/high.gif',
  value: 'high'
}, {
  icon: './images/face/aini.gif',
  value: '爱你'
}, {
  icon: './images/face/banguilian.gif',
  value: '扮鬼脸'
}, {
  icon: './images/face/baoya.gif',
  value: '龅牙'
}, {
  icon: './images/face/baobao.gif',
  value: '抱抱'
}, {
  icon: './images/face/baonu.gif',
  value: '暴怒'
}, {
  icon: './images/face/bukan.gif',
  value: '不看'
}, {
  icon: './images/face/bushuo.gif',
  value: '不说'
}, {
  icon: './images/face/buting.gif',
  value: '不听'
}, {
  icon: './images/face/daku.gif',
  value: '大哭'
}, {
  icon: './images/face/daxiao.gif',
  value: '大笑'
}, {
  icon: './images/face/deyi.gif',
  value: '得意'
}, {
  icon: './images/face/fare.gif',
  value: '发热'
}, {
  icon: './images/face/hehe.gif',
  value: '呵呵'
}, {
  icon: './images/face/huai.gif',
  value: '坏'
}, {
  icon: './images/face/jingya.gif',
  value: '惊讶'
}, {
  icon: './images/face/kaixin.gif',
  value: '开心'
}, {
  icon: './images/face/qian.gif',
  value: '钱'
}, {
  icon: './images/face/se.gif',
  value: '色'
}, {
  icon: './images/face/shangxin.gif',
  value: '伤心'
}, {
  icon: './images/face/shengqi.gif',
  value: '生气'
}, {
  icon: './images/face/shengqixiaoniu.gif',
  value: '生气小牛'
}, {
  icon: './images/face/shiwang.gif',
  value: '失望'
}, {
  icon: './images/face/shi.gif',
  value: '屎'
}, {
  icon: './images/face/sikao.gif',
  value: '思考'
}, {
  icon: './images/face/tiaopi.gif',
  value: '调皮'
}, {
  icon: './images/face/tuhao.gif',
  value: '土豪'
}, {
  icon: './images/face/xia.gif',
  value: '吓'
}, {
  icon: './images/face/yun.gif',
  value: '晕'
}];



!(function() {
  var windowWidth
  var bridge = function(datas, options) {
    var settings = {
      loop: false,
      damuPosNum: 3
    }
    this.opts = $.extend({}, settings, options)
    windowWidth = window.innerWidth
    this.init(datas)
    this.opts.dom.show()
  }
  bridge.prototype.init = function(datas) {
    this.hander = null
    this.avatarWidth = parseInt($('.rank-border').width())
    this.elHeight = parseInt($('.bridge-item').height())
    this.maxP = parseInt(this.opts.dom.height())
    this.damuPosNum = this.opts.damuPosNum
    this.damuProperty = {
      0: {
        els: [],
        listener: 0,
        quenes: [],
        duration: 10000
      },
      1: {
        els: [],
        listener: 0,
        quenes: [],
        duration: 15000
      },
      2: {
        els: [],
        listener: 0,
        quenes: [],
        duration: 12000
      }
    }
    this.datas = datas;
    this.curMsgIndex = 0
    this.setMaxId(datas.length > 0 ? datas[0].id : 0)
    //this.hander = requestAnimationFrame(this.loop.bind(this))
  }

  bridge.prototype.getDatas = function() {
    return this.datas
  }

  bridge.prototype.getNextData = function() {
    if (this.curMsgIndex + 1 > this.datas.length) {
      this.curMsgIndex = 0
    }
    return this.datas[this.curMsgIndex]
  }

  bridge.prototype.destory = function() {
    for (var i in this.damuProperty) {
      if (this.damuProperty[i].els.length != 0) {
        this.damuProperty[i].els.forEach(function(v) {
          clearTimeout(v.obj.timer)
        })
      }
    }
    $('.bridge-item').not('#tmp').remove()
    this.opts.dom.hide()
  }

  bridge.prototype.setMaxId = function(v) {
    this.maxId = v
  }

  bridge.prototype.getMaxId = function() {
    return this.maxId
  }

  bridge.prototype.updateMaxIdFromData = function() {
    if (this.datas.length > 0) {
      var copy = Object.assign([], this.datas)
      copy.sort(function(a, b) {
        return b.id - a.id
      })
      this.maxId = copy[0].id
    }
  }

  bridge.prototype.updateData = function(data) {
    if (!this.opts.loop) {
      if (this.datas.length == 0) {
        this.datas = this.datas.concat(data)
        this.add(this.getNextData(), 0)
      } else {
        this.datas = this.datas.concat(data)
      }
      this.updateMaxIdFromData()
      return
    }
    data.sort(function(a, b) {
      return b.id - a.id
    })
    var _this = this
    var maxId = data[0].id
    var params = [this.curMsgIndex + 1, 0].concat(data)
    spliceArray(this.datas, params)
    var ndata = Object.assign([], this.datas)
    var ids = []
    ndata.sort(function(a, b) {
      return b.id - a.id
    })
    ndata = ndata.slice(0, 10)
    ndata.forEach(function(v) {
      ids.push(v.id)
    })
    var f = []
    if (this.datas.length != 0) {
      this.datas.forEach(function(v) {
        if ($.inArray(v.id, ids) != -1) {
          f.push(v)
        }
      })
    }
    f.forEach(function(v, i) {
      if (v.id == maxId) {
        _this.curMsgIndex = i
      }
    })
    this.datas = f
    this.updateMaxIdFromData()
  }

  bridge.prototype.replaceData = function(data) {
    this.datas = data
  }

  bridge.prototype.deleteByIds = function(ids) {
    var _self = this
    ids.forEach(function(v, i) {
      _self.datas.forEach(function(vv, ii) {
        if (vv.id == v.id) {
          _self.datas.splice(ii, 1)
        }
      })
    })
  }

  bridge.prototype.getChannel = function() {
    var chanel = 0
    var widths = []
    for (var i in this.damuProperty) {
      var w = 0
      for (var j = 0; j < this.damuProperty[i].els.length; j++) {
        w += this.damuProperty[i].els[j].elwidth
      }
      widths.push(w)
    }
    var min = widths[0];
    for (var i = 1; i < widths.length; i++) {
      if (widths[i] < min) {
        min = widths[i];
        chanel = i
      }
    }
    return chanel
  }

  bridge.prototype.add = function(data, channel) {
    new danmu(data, this, channel)
    if (this.opts.loop) {
      this.curMsgIndex += 1
    }
  }

  var danmu = function(data, birdge, channel) {
    if (!data)
      return
    this.bridge = birdge
    this.info = data
    this.el = null
    this.avawidth = birdge.avatarWidth
    this.randomTop = channel != undefined ? this.setPostion(channel) : this.getPostion()
    this.state = 'init'
    this.listenerState = 'unlock'
    this.init()
  }

  danmu.prototype.init = function() {
    //初始化的时候，新增
    this.add();
  }

  danmu.prototype.add = function() {
    // msg_type 1 打赏 2霸屏 3红包 4点歌
    //新增一个DOM
    var _self = this
    var info = this.info
    // 专属
    info.special = info.hb && info.hb.type == 3 && info.hb.amount == 1
    // 大红包
    info.big = info.hb && Number(info.hb.money) >= 20
    var picSize = info.img ? info.img.substring(info.img.lastIndexOf('?') + 1).split('x') : [0, 1]
    var picWidth = parseInt(window.fontSize * 1.1 * picSize[0] / picSize[1])
    this.startWidth = windowWidth
    var tpl = Vue.extend({
      template: `
            <!-- msgtype 为3 并且大红包 -->
            <div class="bridge-item" :style="info.bg | filterBg(info.msg_type)" :class="{'hb_big_custom': info.msg_type == 3 && info.big, 'dg_custom': info.msg_type == 4}">
                <div class="bridge-avatar">
                <!-- msgtype 为3 (小红包 && 除了专属(count=1)的) or (大红包 && 除了专属(count=1)的) -->
                <template v-if="(info.msg_type != 1 && info.msg_type != 4) || (info.msg_type == 3 && info.hb.type != 3)">
                    <div class="rank-level">
                        <img :src="info.initiator_headimgurl | prefixImageUrl" class="avatar-thumb">
                        <span class="rank-border screen" :class="'level-' + info.mc_level_id"></span>
                        </div>
                </template>
                <template v-else>
                  <!-- msgtype 为3  专属(count=1)的 -->
                  <template v-if="info.msg_type == 3 && info.special">
                    <div class="rank-level">
                          <span class="rank-border" :class="'level-' + info.mc_level_id"></span>
                          <img :src="info.initiator_headimgurl | prefixImageUrl" class="avatar-thumb">   
                    </div>
                    <div class="to-arrow">
                        <img src="images/arrow-to.png">
                    </div>
                    <div class="to-someone">
                        <img v-if="info.sendee_headimgurl" :src="info.sendee_headimgurl | prefixImageUrl" class="avatar-thumb">
                    </div>
                  </template>
                  <!--不是专属-->
                  <template v-if="info.msg_type == 3 && !info.special">
                    <div class="rank-level">
                          <span class="rank-border" :class="'level-' + info.mc_level_id"></span>
                          <img :src="info.initiator_headimgurl | prefixImageUrl" class="avatar-thumb">   
                    </div>
                    <div class="to-arrow">
                        <img src="images/arrow-to.png">
                    </div>
                    <div class="to-someone">
                        <img v-if="info.sendee_headimgurl" :src="info.sendee_headimgurl | prefixImageUrl" class="avatar-thumb">
                        <img v-else src="./animations/common_img/all.png" class="avatar-thumb"/>
                    </div>
                  </template>
                  <!--点歌-->
                  <template v-if="info.msg_type == 1 || info.msg_type == 4">
                    <div class="rank-level">
                          <span class="rank-border" :class="'level-' + info.mc_level_id"></span>
                          <img :src="info.initiator_headimgurl | prefixImageUrl" class="avatar-thumb">   
                    </div>
                    <div class="to-arrow">
                        <img src="images/arrow-to.png">
                    </div>
                    <div class="to-someone">
                        <img v-if="info.sendee_headimgurl" :src="info.sendee_headimgurl | prefixImageUrl" class="avatar-thumb">
                        <img v-else src="./animations/common_img/all.png" class="avatar-thumb"/>
                    </div>
                  </template>
                </template>
                </div>
                <div class="bridge-info" :class="{'bp': info.msg_type == 2}">
                    <div class="bridge-main">
                        <div class="bridge-info-top">
                        <template v-if="info.msg_type == 0">
                            <div class="bridge-info-name ncolor">{{info.initiator_nickname}}</div>
                        </template>
                        <template v-if="info.msg_type == 1">
                            <div class="bridge-info-name bold ncolor">{{info.initiator_nickname}}送{{info.title}}给{{receiver}}</div>
                        </template>
                        <template v-if="info.msg_type == 2">
                            <div class="bridge-title ncolor bold">{{info.title}}
                            <span class="arrow arrow-left"></span>
                            <span class="arrow arrow-right"></span>
                            </div>
                        </template>
                        <template v-if="info.msg_type == 4">
                            <div class="bridge-info-name bold ncolor flex flex-align-center">
                              <div>
                              {{info.initiator_nickname}}给{{receiver}}点歌
                              </div>
                              <div class="bridge-title ncolor" style="transform: scale(0.7);"><img src="images/music-b-icon.png" class="music-icon"/>{{info.title}}
                              <span class="arrow arrow-left"></span>
                              <span class="arrow arrow-right"></span>
                              </div>
                            </div>
                        </template>
                        <!-- 专属1个人不显示金主2个字 -->
                        <template v-if="info.msg_type == 3">
                            <template v-if="info.msg_type == 3">
                            <div class="bridge-info-name bold ncolor">
                            <template v-if="info.special"></template>
                            <template v-else>金主 </template>
                            {{info.initiator_nickname}}发{{info.hb.money | filterHBText(info.hb.amount, info.hb.type)}}给{{receiverHb}}</div>
                            </template>
                            <template v-else>
                            <div class="bridge-info-name bold ncolor">{{info.initiator_nickname}}送{{info.title}}给{{receiver}}</div>
                            </template>
                        </template>
                        </div>
                        <div class="bridge-info-content">
                            <p v-html="$options.filters.filterFace(info.content, info.msg_type, info.initiator_nickname)"></p>
                        </div>
                    </div>
                    <div class="bridge-user-send-img" v-if="info.img">
                        <img :src="info.img | prefixImageUrl" :width="picWidth">
                    </div>
                    <div class="bridge-user-send-img pro-icon" v-if="info.msg_type == 1">
                        <img :src="info.pro_img | prefixImageUrl" :width="picWidth">
                    </div>
                    <!-- 小红包 -->
                    <div class="bridge-user-send-img pro-icon" v-if="info.msg_type == 3 && !info.big">
                        <img src="./images/hb-img-small.png" style="height: 0.94rem;">
                    </div>
                    <!-- 大红包 -->
                    <div class="bridge-user-send-img pro-icon" style="padding-right: 1.4rem;" v-if="info.msg_type == 3 && info.big">
                        <img src="./images/hb-img.png" style="height: 1.6rem;">
                    </div>
                    <!--<div class="bridge-user-send-img plus" v-if="info.msg_type == 1">
                        <img :src="plusImage">
                    </div>-->
                </div>   
            </div>`,
      data: function() {
        return {
          info: info,
          picWidth: picWidth
        }
      },
      computed: {
        receiver() {
          return this.info.sendee_nickname ? this.info.sendee_nickname : '全场观众'
        },
        receiverHb() {
          if (this.info.hb.type == 0) {
            return '全场'
          } else if (this.info.hb.type == 1) {
            return '全场女士'
          } else if (this.info.hb.type == 2) {
            return '全场男士'
          } else if (this.info.hb.type == 3 && this.info.hb.amount == 1) {
            return this.info.hb.user.nickname
          } else {
            return '朋友'
          }
        },
        plusImage() {
          return './images/plus' + info.odr_num + '.png'
        }
      },
      filters: {
        filterHBText: function(money, amount, type) {
          if (type == 3 && amount == 1) {
            if (Number(money) >= 20) {
              return '专属大红包'
            } else {
              return '专属小红包'
            }
          } else {
            if (Number(money) >= 20) {
              return '大红包'
            } else {
              return '小红包'
            }
          }    
        },
        filterFace: function(msg, type, fromName) {
          if (!msg) {
            return
          }
          if (type != 3) {
            faces.forEach(function(v) {
              var reg = new RegExp('\\[' + v.value + '\\]', 'g')
              msg = msg.replace(reg, '<img src="' + v.icon + '" class="face-icon"/>')
            })
            msg = type == 2 ? fromName + '：' + msg : msg
          }
          
          return msg
        }
      }
    })
    var component = new tpl().$mount()
    this.bridge.opts.dom.append(component.$el)
    this.el = $(component.$el)
    this.el[0].style.transform = 'translate3d(' + this.startWidth + 'px,' + this.randomTop + 'px,0)'
    //this.el[0].style.willChange = 'transform'
    this.elwidth = $(this.el).width() + this.avawidth
    this.flagId = parseInt(new Date().getTime() / 1000)
    this.bridge.damuProperty[this.channel].els.push({
      id: this.flagId,
      el: this.el[0],
      obj: this
    })
    var duration = parseInt(Math.ceil((this.bridge.damuProperty[this.channel].duration * (this.elwidth + window.innerWidth)) / window.innerWidth / 100) * 100)
    var setTimesecond = parseInt(Math.ceil((this.bridge.damuProperty[this.channel].duration * (this.elwidth)) / window.innerWidth / 100) * 100)
    this.el[0].style.transition = 'transform ' + duration + 'ms linear'
    this.el[0].style.transform = 'translate3d(' + -this.elwidth + 'px,' + this.randomTop + 'px,0)'
    this.timer = setTimeout(function() {
      clearTimeout(this.timer)
      if (!_self.bridge.opts.loop) {
        _self.bridge.datas.shift()
      }
      var next = _self.bridge.getNextData()
      if (next != null && next != undefined) {
        _self.bridge.add(next, _self.channel)
      }
    }, setTimesecond)
    this.transitionEnd = function() {
      _self.el[0].removeEventListener('webkitTransitionEnd', _self.transitionEnd)
      _self.destory()
    }
    this.el[0].addEventListener('webkitTransitionEnd', this.transitionEnd)
  }

  danmu.prototype.destory = function() {
    var _self = this
    var findIndex = this.bridge.damuProperty[this.channel].els.findIndex(function(v) {
      return v.id == _self.flagId
    })
    if (findIndex > -1) {
      this.bridge.damuProperty[this.channel].els.splice(findIndex, 1)
    }
    _self.el[0].removeEventListener('webkitTransitionEnd', _self.transitionEnd)
    this.el.remove()
  }

  danmu.prototype.stop = function() {
    anime.remove(this.el[0]);
  }

  danmu.prototype.setPostion = function(channel) {
    this.channel = channel
    return parseInt(this.bridge.maxP / (this.bridge.damuPosNum + 1) * (parseInt(channel) + 1)) - parseInt(this.bridge.elHeight / 2)
  }

  window.bridge = bridge

  /*上下滚动*/
  var mmarquee = function(options) {
    var _self = this
    this.settings = {
      space: '0.4', // rem单位
      duration: 3000,
      time: 500
    }
    $.extend(true, this.settings, options)
    this.settings.space = parseInt(parseInt(document.documentElement.style.fontSize) * this.settings.space)
    this.el = $('.marquee-scroller')
    this.isMove = false
    this.datas = options.datas

    this.curMsgIndex = 0
    this.add(this.datas)
    $('#marquee').show()
    // 把屏幕外的item清除 新发的消息可以快速显示
    var find = this.findNearWidnowBottomEl()
    if (find) {
      $(find.el).nextAll().remove()
      // 10
      if (find.index + 1 < 10) {
        this.curMsgIndex = find.index + 1
      } else {
        this.curMsgIndex = 0
      }
    }
    this.detectMove()
    this.bindTransition = function() {
      _self.el.css('transition', 'none')
      _self.el.find('.marquee-item').eq(0).remove()
      _self.el.find('.marquee-item').eq(0).addClass('active')
      _self.el.css('transform', 'translate3d(0, 0, 0)')
      var _next = _self.getNextData()
      if (_next) {
        _self.add(_next)
        _self.curMsgIndex += 1
      }
    }
    this.el[0].addEventListener('webkitTransitionEnd', this.bindTransition, false)
  }

  mmarquee.prototype.detectMove = function() {
    if (this.isMove) {
      return false
    }
    if (this.el.find('.marquee-item').length === 0)
      return false
    // 获取scroller里最后一个元素的top
    var lastElTop = this.el.find('.marquee-item').last()[0].getBoundingClientRect().top
    var wrapEl = $('#marquee')
    var scrollTop = wrapEl[0].getBoundingClientRect().top
    var wrapH = wrapEl.height()
    if (lastElTop - scrollTop > wrapH) {
      // 在视窗外可以开始滚动
      this.isMove = true
      this.move()
    }
  }
  mmarquee.prototype.addData = function(data) {
    this.datas = this.datas.concat(data)
  }

  mmarquee.prototype.add = function(data, push) {
    // msg_type 1 打赏 2霸屏 3红包 4点歌
    var _self = this
    var datas = []
    if (!isArray(data)) {
      datas.push(data)
    } else if (data.length > 0) {
      datas = data
    }
    if (push) {
      this.datas = this.datas.concat(data)
    }
    var limitHeight = parseInt(window.fontSize * 2)
    var tpl = Vue.extend({
      directives: {
        img: {
          // 指令的定义
          inserted: function(el, binding) {
            if (binding.value) {
              var size = binding.value.substring(binding.value.lastIndexOf('?') + 1).split('x')
              if (size.length == 2) {
                if (size[1] > limitHeight) {
                  el.height = limitHeight
                } else {
                  el.height = size[1]
                }
              }
            }
          }
        }
      },
      template: `
      <div>
        <div class="marquee-item" v-for="(v, i) in datas" :key="v.id" :style="{'margin-bottom': space + 'px'}">
            <div class="bp-show-name" :style="v.bg | filterBg(v.msg_type)" v-if="v.msg_type == 2">{{v.title}}{{v.odr_show_time}}秒</div>
            <div class="marquee-main" :class="{'ds': v.msg_type == 1, 'hb': v.msg_type == 3, 'dg': v.msg_type == 4}">
              <div class="text-show-wrap" v-if="v.msg_type == 1">
                <div class="hbDesc">送礼</div>
              </div>
              <div class="text-show-wrap" v-if="v.msg_type == 4">
                <div class="hbDesc">点歌</div>
              </div>
              <div class="text-show-wrap" v-if="v.msg_type == 3">
                <div class="hbDesc" v-if="v.hb">{{v.hb.money | filterHBText}}</div>
              </div>
              <img src="./images/hb-img-small.png" class="hb-icon" style="height: 0.94rem;" v-if="v.hb && Number(v.hb.money < 20)" />
              <img src="./images/hb-img.png" class="hb-icon" style="height: 1.6rem;" v-if="v.hb && Number(v.hb.money >= 20)" />
              <div class="marquee-avatar">
                <div class="marquee-rank-level">
                      <span class="marquee-rank-border" :class="'level-' + v.mc_level_id" ></span>
                      <img :src="v.initiator_headimgurl | prefixImageUrl" class="avatar-thumb">   
                </div>
              </div>
              <div class="marquee-content">
                <div class="marquee-content-top"><span>{{v.initiator_nickname}}</span><span class="marquee-time">{{v.create_time | filterTime}}</span></div>
                <p class="marquee-text" v-html="$options.filters.filterFace(v.content, v.msg_type, v.initiator_nickname, v.title, v.sendee_nickname, v.hb)"></p>
                <div class="marquee-imgPics">
                  <img :src="v.img | prefixImageUrl" v-img="v.img"/>
                </div>
                <div class="gift-content" v-if="v.msg_type == 1">
                  <div class="gift-img-place">
                    <img :src="v.pro_img | prefixImageUrl" class="avatar-thumb">
                  </div>
                  <img src="./images/arrow-to.png" class="arrow-to">
                  <img v-if="v.sendee_headimgurl" :src="v.sendee_headimgurl | prefixImageUrl" class="avatar-thumb" style="border-radius: 50%;">
                  <img v-else src="./animations/common_img/all.png" class="avatar-thumb"/>
                </div>
                <div class="gift-content" v-if="v.msg_type == 4">
                  <div class="dg-name-place">
                    <img src="images/music-b-icon.png" class="music-icon"/>{{v.title}}
                  </div>
                  <img src="./images/arrow-to.png" class="arrow-to">
                  <img v-if="v.sendee_headimgurl" :src="v.sendee_headimgurl | prefixImageUrl" class="avatar-thumb" style="border-radius: 50%;">
                  <img v-else src="./animations/common_img/all.png" class="avatar-thumb"/>
                </div>
                <div class="gift-content hb-content" v-if="v.msg_type == 3 && v.hb.amount == 1 && v.hb.type == 3">
                  <img src="./images/hb-img.png" class="avatar-thumb" style="height: 1.6rem;" v-if="Number(v.hb.money >= 20)">
                  <img src="./images/hb-img-small.png" class="avatar-thumb" style="height: 0.94rem;" v-else>
                  <img src="./images/arrow-to.png" class="arrow-to">
                  <img :src="v.hb.user.headimgurl | prefixImageUrl" class="avatar-thumb" style="border-radius: 50%;">
                </div>
              </div>
            </div>
            </div>
          </div>`,
      data: function() {
        return {
          datas: datas,
          space: _self.settings.space
        }
      },
      computed: {
        plusImage() {
          return './images/plus' + info.odr_num + '.png'
        }
      },
      filters: {
        filterHBText: function(money) {
          if (Number(money) >= 20) {
            return '大红包'
          } else {
            return '小红包'
          }  
        },
        receiverHb(hbdata) {
          if (hbdata.type == 0) {
            return '全场'
          } else if (hbdata.type == 1) {
            return '全场女士'
          } else if (hbdata.type == 2) {
            return '全场男士'
          } else if (hbdata.type == 3 && hbdata.amount == 1) {
            return hbdata.user.nickname
          } else {
            return '朋友'
          }
        },
        receiver: function(nickname) {
          return nickname ? nickname : '全场观众'
        },
        filterTime: function(time) {
          return time.toString().substring(5)
        },
        filterFace: function(msg, type, fromName, title, toWho, hbdata) {
          if (!msg) {
            return
          }
          if (type != 3) {
            // 打赏、霸屏消息转换
            toWho = toWho ? toWho : '全场观众'
            if (type == '1') {
              msg = '<span style="color:#fff500;">送' + title + '给' + toWho + '：</span>' + msg
            } else if (type == '4') {
              msg = '<span style="color:#fff500;">给' + toWho + '点歌：</span>' + msg
            }
            faces.forEach(function(v) {
              var reg = new RegExp('\\[' + v.value + '\\]', 'g')
              msg = msg.replace(reg, '<img src="' + v.icon + '" class="face-icon"/>')
            })
          } else {
            // 红包消息转转
            var hbText = ''
            var hbTo = ''
            if (Number(hbdata.money) >= 20) {
              hbText = '大红包'
            } else {
              hbText = '小红包'
            }
            if (hbdata.type == 0) {
              hbTo = '全场'
            } else if (hbdata.type == 1) {
              hbTo = '全场女士'
            } else if (hbdata.type == 2) {
              hbTo = '全场男士'
            } else if (hbdata.type == 3 && hbdata.amount == 1) {
              hbTo = hbdata.user.nickname
            } else {
              hbTo = '朋友'
            }
            msg = '<span style="color:#fff500;display:block;">发'+ hbText + '给' + hbTo + '</span>' + msg
          }
          return msg
        }
      }
    })

    var component = new tpl().$mount()
    $('.marquee-scroller').append(component.$el.childNodes)
  }

  mmarquee.prototype.findNearWidnowBottomEl = function(){
    var items = this.el.find('.marquee-item')
    var firstElH = $(items[0]).height() + this.settings.space
    var findEl = null
    var findIndex = -1
    for(var i=0; i<items.length; i++ ){
      if (items[i].getBoundingClientRect().top  >= window.innerHeight + firstElH) {
        findEl = items[i]
        findIndex = i
        break;
      }
    }
    return {el: findEl, index: findIndex}
  }

  mmarquee.prototype.move = function() {
    var _self = this
    this.timer = setInterval(function() {
      var t = _self.getScrollHeight()
      _self.el.css('transition', 'all ' + _self.settings.time + 'ms linear')
      _self.el.css('transform', 'translate3d(0, -' + t + 'px, 0)')
    }, this.settings.duration)

  }

  mmarquee.prototype.getScrollHeight = function() {
    if (this.el.find('.marquee-item').length > 0) {
      return Number(this.el.find('.marquee-item').eq(0).height()) + parseInt(this.settings.space)
    } else {
      return 0
    }
  }

  mmarquee.prototype.getNextData = function() {

    if (this.curMsgIndex + 1 > this.datas.length) {
      this.curMsgIndex = 0
    }
    //console.log('dangqian='+this.curMsgIndex)
    return this.datas[this.curMsgIndex]
  }

  mmarquee.prototype.updateData = function(data) {
    data.sort(function(a, b) {
      return b.id - a.id
    })
    var _this = this
    var maxId = data[0].id
    var params = [this.curMsgIndex + 1, 0].concat(data)
    spliceArray(this.datas, params)
    var ndata = Object.assign([], this.datas)
    var ids = []
    ndata.sort(function(a, b) {
      return b.id - a.id
    })
    ndata = ndata.slice(0, 10)
    ndata.forEach(function(v) {
      ids.push(v.id)
    })
    var f = []
    if (this.datas.length != 0) {
      this.datas.forEach(function(v) {
        if ($.inArray(v.id, ids) != -1) {
          f.push(v)
        }
      })
    }
    f.forEach(function(v, i) {
      if (v.id == maxId) {
        _this.curMsgIndex = i
      }
    })
    //console.log(f)
    //console.log(this.curMsgIndex, f[this.curMsgIndex].content)
    this.datas = f
  }

  mmarquee.prototype.getMaxId = function() {
    if (this.datas.length > 0) {
      var copy = Object.assign([], this.datas)
      copy.sort(function(a, b) {
        return b.id - a.id
      })
      return copy[0].id
    }
    return 0
  }

  mmarquee.prototype.replaceData = function(data) {
    this.datas = data
  }

  mmarquee.prototype.deleteByIds = function(ids) {
    var _self = this
    ids.forEach(function(v, i) {
      _self.datas.forEach(function(vv, ii) {
        if (vv.id == v.id) {
          _self.datas.splice(ii, 1)
        }
      })
    })
  }

  mmarquee.prototype.getDatas = function() {
    return this.datas
  }

  mmarquee.prototype.destory = function() {
    clearInterval(this.timer)
    this.el[0].removeEventListener('webkitTransitionEnd', this.bindTransition, false)
    this.el.empty()
    $('#marquee').hide()
  }

  window.mmarquee = mmarquee

})()