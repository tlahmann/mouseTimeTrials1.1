let timeStart = null
let started = null

function start () {
  timeStart = new Date().getTime()

  started = setInterval(clockRunning, 10)
}

function stop () {
  clearInterval(started)
}

function reset() {
  clearInterval(started);
  document.getElementById("display-area").innerHTML = "00:00:00.000";
}

function clockRunning () {
  let timeElapsed = new Date().getTime() - timeStart
  let ms = Math.floor(timeElapsed % 1000).toFixed(0)
  let sec = Math.floor((timeElapsed / 1000) % 60).toFixed(0)
  let min = Math.floor((timeElapsed / (1000 * 60)) % 60).toFixed(0)
  let hour = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24).toFixed(0)

  document.getElementById('display-area').innerHTML =
    hour.padStart(2, '0') + ':' + min.padStart(2, '0') + ':' + sec.padStart(2, '0') + ':' + ms.padStart(3, '0')
}
