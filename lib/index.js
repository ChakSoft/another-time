const Timer = require('./timer')

const createTimer = (options = {}, onTick = () => {}) => {
  const {
    secondsPerSecond : sps,
    minutePerSecond : mps,
    hourPerSecond : hps,
    hourPerMinute : hpm,
    dayPerSecond : dps,
    dayPerMinute : dpm,
    dayPerHour : dph,
    weekPerSecond : wps,
    weekPerMinute : wpm,
    weekPerHour : wph,
    weekPerDay : wpd,
    monthPerSecond : tps,
    monthPerMinute : tpm,
    monthPerHour : tph,
    monthPerDay : tpd,
    yearPerSecond : yps,
    yearPerMinute : ypm,
    yearPerHour : yph,
    yearPerDay : ypd,
    yearPerMonth : ypt,
    initialSecond : is,
    initialMinute : im,
    initialHour : ih,
    initialDay : id,
    initialWeek : iw,
    initialMonth : it,
    initialYear : iy,
    weekLength,
    monthDays,
  } = options

  const timer = new Timer({
    is,
    im,
    ih,
    id,
    iw,
    it,
    iy,
    weekLength,
    monthDays,
  })
  timer.on('tick', onTick)
  timer.start({
    sps,
    mps,
    hps,
    hpm,
    dps,
    dpm,
    dph,
    wps,
    wpm,
    wph,
    wpd,
    tps,
    tpm,
    tph,
    tpd,
    yps,
    ypm,
    yph,
    ypd,
    ypt,
  })
  return timer
}

module.exports = { createTimer }
