var Timeline = function() {
  this.events = []
  this.timer = null
}
Timeline.prototype.add = function(params) {
  this.events.push({ event: params.event, delay: params.delay })
  return this
}
Timeline.prototype.remove = function() {
  if (this.events.length != 0)
    this.events.shift()
}
Timeline.prototype.do = function() {
  if (this.events.length != 0) {
    if (this.events[0].delay) {
      clearTimeout(this.timer)
      this.timer = setTimeout(function() {
        this.events[0].event()
        this.remove()
        this.do()
      }.bind(this), this.events[0].delay)
    } else {
      this.events[0].event()
      this.remove()
      this.do()
    }
  }
}

function getCss(length, typed) {
  var type = typed != undefined ? typed : 1
  var css = {}
  switch (length) {
    case 1:
      if (type == 1) {
        css = {
          'font-size': '3.6rem'
        }
      } else {
        css = {
          'font-size': '3.2rem'
        }
      }

      break;
    case 2:
      if (type == 1) {
        css = {
          'font-size': '2rem'
        }
      } else {
        css = {
          'font-size': '3.2rem'
        }
      }
      break;
    case 3:
      if (type == 1) {
        css = {
          'font-size': '2rem',
          'line-height': '2rem'
        }
      } else {
        css = {
          'font-size': '3rem'
        }
      }
      break;
    case 4:
      if (type == 1) {
        css = {
          'font-size': '2rem',
          'line-height': '2rem'
        }
      } else {
        css = {
          'font-size': '2.2rem'
        }
      }
      break;
    case 5:
      if (type == 1) {
        css = {
          'font-size': '1.4rem'
        }
      } else {
        css = {
          'font-size': '1.9rem'
        }
      }
      break;
    case 6:
      if (type == 1) {
        css = {
          'font-size': '1.4rem'
        }
      } else {
        css = {
          'font-size': '1.75rem'
        }
      }
      break;
    case 7:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.75rem'
        }
      }
      break;
    case 8:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.75rem'
        }
      }
      break;
    case 9:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.75rem'
        }
      }
      break;
    case 10:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.75rem'
        }
      }
      break;
    case 11:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.5rem'
        }
      }
      break;
    case 12:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.5rem'
        }
      }
      break;
    case 13:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.3rem'
        }
      }
      break;
    case 14:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.3rem'
        }
      }
      break;
    case 15:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 16:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 17:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 18:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 19:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 20:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 21:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 22:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 23:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 24:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.15rem'
        }
      }
      break;
    case 25:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 26:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 27:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 28:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '0.95rem'
        }
      }
      break;
    case 29:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '0.95rem'
        }
      }
      break;
    case 30:
      if (type == 1) {
        css = {
          'font-size': '0.7rem'
        }
      } else {
        css = {
          'font-size': '0.95rem'
        }
      }
      break;
    default:
      if (type == 1) {
        css = {
          'font-size': '0.5rem'
        }
      } else {
        css = {
          'font-size': '0.8rem'
        }
      }
      break;
  }
  return css;
}


function getCssMobile(length, typed) {
  var type = typed != undefined ? typed : 1
  var css = {}
  switch (length) {
    case 1:
      if (type == 1) {
        css = {
          'font-size': '3.6rem'
        }
      } else {
        css = {
          'font-size': '3rem'
        }
      }

      break;
    case 2:
      if (type == 1) {
        css = {
          'font-size': '2rem'
        }
      } else {
        css = {
          'font-size': '2.8rem'
        }
      }
      break;
    case 3:
      if (type == 1) {
        css = {
          'font-size': '1.6rem'
        }
      } else {
        css = {
          'font-size': '2.4rem'
        }
      }
      break;
    case 4:
      if (type == 1) {
        css = {
          'font-size': '1.5rem'
        }
      } else {
        css = {
          'font-size': '2.2rem'
        }
      }
      break;
    case 5:
      if (type == 1) {
        css = {
          'font-size': '1.3rem'
        }
      } else {
        css = {
          'font-size': '1.8rem'
        }
      }
      break;
    case 6:
      if (type == 1) {
        css = {
          'font-size': '1.3rem'
        }
      } else {
        css = {
          'font-size': '1.5rem'
        }
      }
      break;
    case 7:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.5rem'
        }
      }
      break;
    case 8:
      if (type == 1) {
        css = {
          'font-size': '1.1rem'
        }
      } else {
        css = {
          'font-size': '1.5rem'
        }
      }
      break;
    case 9:
      if (type == 1) {
        css = {
          'font-size': '1rem'
        }
      } else {
        css = {
          'font-size': '1.5rem'
        }
      }
      break;
    case 10:
      if (type == 1) {
        css = {
          'font-size': '1rem'
        }
      } else {
        css = {
          'font-size': '1.4rem'
        }
      }
      break;
    case 11:
      if (type == 1) {
        css = {
          'font-size': '0.95rem'
        }
      } else {
        css = {
          'font-size': '1.3rem'
        }
      }
      break;
    case 12:
      if (type == 1) {
        css = {
          'font-size': '0.95rem'
        }
      } else {
        css = {
          'font-size': '1.2rem'
        }
      }
      break;
    case 13:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.1rem'
        }
      }
      break;
    case 14:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.1rem'
        }
      }
      break;
    case 15:
      if (type == 1) {
        css = {
          'font-size': '0.85rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 16:
      if (type == 1) {
        css = {
          'font-size': '0.75rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 17:
      if (type == 1) {
        css = {
          'font-size': '0.75rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 18:
      if (type == 1) {
        css = {
          'font-size': '0.75rem'
        }
      } else {
        css = {
          'font-size': '1.05rem'
        }
      }
      break;
    case 19:
      if (type == 1) {
        css = {
          'font-size': '0.75rem'
        }
      } else {
        css = {
          'font-size': '1rem'
        }
      }
      break;
    case 20:
      if (type == 1) {
        css = {
          'font-size': '0.75rem'
        }
      } else {
        css = {
          'font-size': '1rem'
        }
      }
      break;
    case 21:
      if (type == 1) {
        css = {
          'font-size': '0.72rem'
        }
      } else {
        css = {
          'font-size': '1rem'
        }
      }
      break;
    case 22:
      if (type == 1) {
        css = {
          'font-size': '0.72rem'
        }
      } else {
        css = {
          'font-size': '1rem'
        }
      }
      break;
    case 23:
      if (type == 1) {
        css = {
          'font-size': '0.72rem'
        }
      } else {
        css = {
          'font-size': '1rem'
        }
      }
      break;
    case 24:
      if (type == 1) {
        css = {
          'font-size': '0.72rem'
        }
      } else {
        css = {
          'font-size': '0.95rem'
        }
      }
      break;
    case 25:
      if (type == 1) {
        css = {
          'font-size': '0.68rem'
        }
      } else {
        css = {
          'font-size': '0.95rem'
        }
      }
      break;
    case 26:
      if (type == 1) {
        css = {
          'font-size': '0.68rem'
        }
      } else {
        css = {
          'font-size': '0.95rem'
        }
      }
      break;
    case 27:
      if (type == 1) {
        css = {
          'font-size': '0.68rem'
        }
      } else {
        css = {
          'font-size': '0.9rem'
        }
      }
      break;
    case 28:
      if (type == 1) {
        css = {
          'font-size': '0.68rem'
        }
      } else {
        css = {
          'font-size': '0.9rem'
        }
      }
      break;
    case 29:
      if (type == 1) {
        css = {
          'font-size': '0.64rem'
        }
      } else {
        css = {
          'font-size': '0.9rem'
        }
      }
      break;
    case 30:
      if (type == 1) {
        css = {
          'font-size': '0.6rem'
        }
      } else {
        css = {
          'font-size': '0.9rem'
        }
      }
      break;
    default:
      if (type == 1) {
        css = {
          'font-size': '0.5rem'
        }
      } else {
        css = {
          'font-size': '0.8rem'
        }
      }
      break;
  }
  return css;
}


function Template(tpl) {
    var
        fn,
        match,
        code = ['var r=[];\nvar _html = function (str) { return str.replace(/&/g, \'&amp;\').replace(/"/g, \'&quot;\').replace(/\'/g, \'&#39;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\'); };'],
        re = /\{\s*([a-zA-Z\.\_0-9()]+)(\s*\|\s*safe)?\s*\}/m,
        addLine = function (text) {
            code.push('r.push(\'' + text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\');');
        };
    while (match = re.exec(tpl)) {
        if (match.index > 0) {
            addLine(tpl.slice(0, match.index));
        }
        if (match[2]) {
            code.push('r.push(String(this.' + match[1] + '));');
        }
        else {
            code.push('r.push(_html(String(this.' + match[1] + ')));');
        }
        tpl = tpl.substring(match.index + match[0].length);
    }
    addLine(tpl);
    code.push('return r.join(\'\');');
    fn = new Function(code.join('\n'));
    this.render = function (model) {
        return fn.apply(model);
    };
}


function URLToJson(url) {
  console.log(url)
  var arr = url.split('&')
  var obj = {}
  for(var i = 0; i < arr.length; i++) {
    var v = arr[i].split('=')
    obj[v[0]] = decodeURI(v[1])
  }
  return obj
}