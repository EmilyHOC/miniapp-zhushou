const debug = require('./debug.js')
const util = require('./util.js')
const http = require('./http.js')

class Feathers {
  constructor(url, options) {
    this.url = url
    this.options = options
  }

  filter(res) {
    if (res.ok) {
      return res.data
    } else {
      throw res
    }
  }

  find(club,params) {
    return http.get(`/${club}/${this.url}`, params).then(this.filter)
  }

  get(club,id, params) {
    return http.get(`/${club}/${this.url}/${id}`, params).then(this.filter)
  }

  create(club,data, params) {
    return http.post(`/${club}/${this.url}`, data, params).then(this.filter)
  }

  patch(club,id, data, params) {
    return http.put(`/${club}/${this.url}/${id}`, data, params).then(this.filter)
  }

  remove(club,id, params) {
    return http.remove(`/${club}/${this.url}/${id}`, params).then(this.filter)
  }
}

const Club = new Feathers('clubs')


module.exports = {

}
