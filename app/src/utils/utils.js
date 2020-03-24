export default {
  formateDate(time) {
    if(!time) return ""
    let data = new Date(time)
    return data.getFullYear() + "-" + data.getMonth() + "-" + data.getDate() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
  }
}