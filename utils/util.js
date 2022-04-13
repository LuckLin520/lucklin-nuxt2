export const throttling = (fn, wait, maxTimelong) => {
  var timeout = null,
    startTime = Date.parse(new Date())
  return function () {
    if (timeout !== null) clearTimeout(timeout)
    var curTime = Date.parse(new Date())
    if (curTime - startTime >= maxTimelong) {
      fn(...arguments)
      startTime = curTime
    } else {
      timeout = setTimeout(() => fn(...arguments), wait)
    }
  }
}
export const pattern = {
  phone: /^1[3456789]\d{9}$/,
  password: /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,20}$/,
  email: /^\w+((.\w+)|(-\w+))?@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
  websit: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,
  qq: /^\d{6,10}$/,
  wx: /^.{0,20}$/,
  tell: /^(\d{3,4}[ |-]?)?[1-9]\d{6,7}$/
}

export const jsonp = (src, callback) => {
  var el = document.createElement('script')
  el.src = src
  document.body.appendChild(el)
  if (callback) window.jsonpCallback = callback
  else return new Promise((r, j) => (window.jsonpCallback = res => r(res)))
}
