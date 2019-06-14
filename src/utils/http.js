
function getHeader(params) {
  const app = getApp()
  const header = {
    'Content-Type': 'application/json',
    'Authorization': wx.getStorageSync('customToken')||app.globalData.customToken
  }
  return Object.assign(header, params.header)
}

function getUrl(url, params) {
  const app = getApp()

  const { query, host } = params
  if (query) {
    url = [url, getQueryString(query)].join('?')
  }
  return /^https?:\/\//.test(url) ? url : (host || app.globalData.url + url)

}

function getQueryString(query) {
  const keys = Object.keys(query),
    queryStringArr = []
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i],
      value = query[key]
    if (typeof value === 'object') {
      const subKeys = Object.keys(value)
      for (let j = 0, sLen = subKeys.length; j < sLen; j++) {
        const subKey = subKeys[j],
          subValue = value[subKey]
        const k = encodeURIComponent(`${key}[${subKey}]`)
        const v = encodeURIComponent(subValue)
        queryStringArr.push(`${k}=${v}`)
      }
    } else {
      const k = encodeURIComponent(key)
      const v = encodeURIComponent(query[key])
      queryStringArr.push(`${k}=${v}`)
    }
  }
  return queryStringArr.join('&')
}

/**
 * 返回参数对形式的对象
 * @param url 地址
 */
function parseQueryString(url) {
  let arr
  let res = {}
  //#符号之后的值称为hash，都不会加到request请求中去
  url = url.split('#')[0]
  //获取queryString 第一个？号后面的全是查询字符串
  arr = url.split('?')
  arr.shift()
  let queryStr = arr.join('?')
  //查询字符串为空直接返回 避免出现这样的返回值{"":""}
  if (queryStr.trim().length === 0) {
    return res
  }

  //获取参数
  arr = queryStr.split('&')
  for (let i = 0; i < arr.length; i++) {
    let itemArr = arr[i].split('=')
    //第一个=号之前的是name 后面的全是值
    let name = itemArr.shift()
    res[name] = decodeURIComponent(itemArr.join('='))
  }
  return res
}


function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url, params),
      method: 'GET',
      header: getHeader(params),
      success: function(res) {
        resolve(wrap(res))
        // debug.log(res)
      },
      fail: function(err) {
        reject(err)
        debug.log(err)
      }
    })
  })
}

function post(url, data, params = {}) {
  //debug.log(url, data, params)
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url, params),
      method: 'POST',
      data,
      header: getHeader(params),
      success: function(res) {
        resolve(wrap(res))
        debug.log(res)
      },
      fail: function(err) {
        reject(err)
        debug.log(err)
      }
    })
  })
}

function put(url, data, params = {}) {
  //debug.log(url, data, params)
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url, params),
      method: 'PUT',
      data,
      header: getHeader(params),
      success: function(res) {
        resolve(wrap(res))
        debug.log(res)
      },
      fail: function(err) {
        reject(err)
        debug.log(err)
      }
    })
  })
}

function remove(url, params = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url, params),
      method: 'DELETE',
      header: getHeader(params),
      success: function(res) {
        resolve(wrap(res))
        debug.log(res)
      },
      fail: function(err) {
        reject(err)
        debug.log(err)
      }
    })
  })
}

function wrap(res) {
  wx.hideLoading()
  const status = res.statusCode
  if (status >= 200 && status < 300) {
    res.ok = true
  }
  else if (status === 401) {
    const app = getApp()
    wx.showToast({
      title: '登录过期，请重新登录',
      icon:'none'
    })
    wx.clearStorage()

    app.globalData.customToken = null
    app.globalData.choosedClub = null
    app.globalData.currentLatent = null
    app.globalData.userId = null
    app.globalData.visitorInfo = null
    app.globalData.visitorToken = null
    app.globalData.visitorId = null

    wx.reLaunch({
      url: '/pages/index/index'
    })
  } else {
    let message = res.data.message || '系统错误'
    wx.showModal({
      title: '提示',
      content: message,
      showCancel: false,
      confirmColor: '#f26604'
    })
  }
  return res
}


module.exports = {
  get,
  post,
  put,
  remove
}
