var controls = function() {

}

controls.prototype.init = function() {
  this.initBg()
  this.initDrag()
  this.initQrcodeSetting()
}

controls.prototype.initBg = function() {
  var _self = this
  this.controlContent = $('.control-content')
  var flag = false
  var checkTimer = null
  $('body').mousemove(throttle(function(event) {
    if (!flag && event.pageX < 100) {
      flag = true
      $('#controls').addClass('show')
    }
    return false;
  }, 100))

  $(document).mouseleave(function(event) {
    setTimeout(function(){
      $('.control').removeClass('active')
      _self.controlContent.hide()
      $('#controls').removeClass('show')
      setTimeout(function() {
        flag = false
      }, 300)
    }, 150)
  });

  $('#controls').mouseleave(function(event) {
    if ($(event.target).hasClass('click')) {
      return false;
    }
    $('.control').removeClass('active')
    _self.controlContent.hide()
    $('#controls').removeClass('show')
    setTimeout(function() {
      flag = false
    }, 300)
    return false;
  });

  $('.control').hover(function() {
    $('.control').removeClass('active')
    _self.controlContent.hide()
    $(this).addClass('active')
    $(this).find('.control-content').show()
    return false;
  }, function(event) {
    if (!$(this).hasClass('hoverout'))
      return false
  });

  $('.control-content').hover(function() {
    return false
  }, function(event) {
    if ($(event.target).parents('.control-content').hasClass('click')) {
      var parent = $(event.target).parents('.control-content')[0].getBoundingClientRect()
      var parentPos = {
        top: parent.top,
        left: parent.left,
        right: parent.right,
        bottom: parent.bottom
      }
      if (event.pageX > parentPos.right || (event.pageX > parentPos.left && (event.pageY < parentPos.top || event.pageY > parentPos.bottom))) {
        // hide
        $('.control').removeClass('active')
        _self.controlContent.hide()
        if (event.pageX > 200) {
          $('#controls').removeClass('show')
          setTimeout(function() {
            flag = false
          }, 300)
        }
      }
      return false;
    }
    $('.control').removeClass('active')
    _self.controlContent.hide()
    if (event.pageX > 200) {
      $('#controls').removeClass('show')
      setTimeout(function() {
        flag = false
      }, 300)
    }
    return false
  });
}

controls.prototype.initDrag = function() {
  // 查看有没有设置过大小
  var scale = 1
  var inlineStyle = window.customGet('qrcodeStyle')
  if (inlineStyle) {
    var m1 = inlineStyle.match(/scale\(\d+(\.\d+)?\)/g)
    if (m1 && m1.length> 0) {
      var m2 = m1[0].match(/\d+(\.\d+)?/g)
      if (m2 && m2.length>0) {
        scale = Number(m2[0])
      }
    }
  }
  $("#qrcode-wrap").attr('style', inlineStyle).show()
  // init drag qrcode-wrap
  $("#qrcode-wrap").Tdrag({
    cbEnd: debounce(function() {
      var style = $('#qrcode-wrap').attr('style')
      window.customSet('qrcodeStyle', style)
      updateSettingRecord()
    }, 2000)
  });
  var timerUpdate = null
  $('#qrcode-wrap').on('mousewheel DOMMouseScroll', function(e) {
    if (timerUpdate) {
      clearTimeout(timerUpdate)
    }
    timerUpdate = setTimeout(function() {
      timerUpdate = null
      updateSettingRecord()
    }, 2000)
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
      (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1))
    if (delta > 0) {
      // 向上滚
      scale =  scale + 0.2 > 4 ? 4 : scale + 0.2
      //$('#qrcode-wrap').css({'transform': 'scale('+scale+')', 'transform-origin': '50% 50% 0px'})
      anime({
        targets: '#qrcode-wrap',
        scale: scale
      })
      inlineStyle = window.customGet('qrcodeStyle')
      if (inlineStyle) {
        if (inlineStyle.indexOf('scale') == -1) {
          inlineStyle += 'transform:scale('+scale+')'
        } else {
          inlineStyle = inlineStyle.replace(/scale\((.*)\)/g, 'scale('+scale+')')
        }
      } else {
        inlineStyle = 'transform: scale('+ scale+')'
      }
      window.customSet('qrcodeStyle', inlineStyle)
    } else if (delta < 0) {
      // 向下滚
      scale = scale - 0.2 <= 0.2 ? 0.2 : scale - 0.2
      anime({
        targets: '#qrcode-wrap',
        scale: scale
      })
      //var inlineStyle = localStorage.getItem('inlineStyle')
      if (inlineStyle) {
        if (inlineStyle.indexOf('scale') == -1) {
          inlineStyle += 'transform:scale('+scale+')'
        } else {
          inlineStyle = inlineStyle.replace(/scale\((.*)\)/g, 'scale('+scale+')')
        }
      } else {
        inlineStyle = 'transform: scale('+ scale+')'
      }
      window.customSet('qrcodeStyle', inlineStyle)
    }
  })
}

controls.prototype.initQrcodeSetting = function() {
  var isUpload = false
  //二维码设置
  $('#fileupload').fileupload({
    url: baseURL + '/weixin/screen/uploadScreenImg',
    dataType: 'json',
    add: function(e, data) {
      if (isUpload) {
        return false
      }
      var uploadErrors = [];
      var acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;

      //文件类型判断
      if (data.originalFiles[0]['type'].length && !acceptFileTypes.test(data.originalFiles[0]['type'])) {
        layer.msg('文件类型错误', { icon: 2, time: 1500 })
        return false
      }

      //文件大小判断
      if (data.originalFiles[0]['size'] && data.originalFiles[0]['size'] > 1024 * 200) {
        layer.msg('文件不能大于200K', { icon: 2, time: 1500 })
        return false
      }
      isUpload = true
      $('#fileupload-item p').html('正在上传中')
      data.submit()
    },
    fail: function(e, data) {
      isUpload = false
      console.log(data)
    },
    done: function(e, data) {
      var url = data.result.result
      isUpload = false
      if (data.result.code == '306000' || data.result.code == '303000' || data.result.code == '301000') {
        ajax(baseURL + '/weixin/screen/createQrCode', 'POST', { ht_id: barConfig.ht_id, img_url: url }).then((res) => {
          var data = {
            id: res.result,
            img_url: url,
            is_default: 0,
            name: '未定义'
          }
          $('#fileupload-item p').html('点击上传图片')
          app.customeQrcodes.push(data)
        })
      } else {
        $('#fileupload-item p').html('点击上传图片')
        layer && layer.msg(url, {icon: 0, time: 1500})
      }
      /*$.each(data.result.files, function(index, file) {
        $('<p/>').text(file.name).appendTo(document.body);
      });*/
      // 如果大于等于2 隐藏上传
      // $('#fileupload-item').hide()
    }
  });

  /*$('#qrcode-setting').on('click', '.edit-qrcode', function() {
    var v = $(this).prev().html()
    var input = $('<input type="text" class="input-qrcode" />')
    $(this).parent().html(input)
    input.val(v).focus()
  })*/
  /*$('#qrcode-setting').on('blur', '.input-qrcode', function() {
    var v = $(this).val()
    $(this).parent().html('<span>' + v + '</span><i class="iconfont pointer edit-qrcode">&#xe603;</i>')
  })*/
  /*$('#qrcode-setting').on('click', '.delete-qrcode', function() {
    var index = layer.confirm('确定要删除该二维码吗？', {
    btn: ['确定','取消'] //按钮
  }, function(){
    layer.close(index)
      layer.msg('删除成功', {icon: 1})
      // 修改二维码
      // window.app.basicInfo.qrcode
  }, function(){
  });
  })*/
}