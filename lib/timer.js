const { EventEmitter } = require('events')

const { fsub } = require('./factor')

module.exports = class extends EventEmitter {
  constructor (options = {}) {
    super()
    this.second = options.is || 0
    this.minute = options.im || 0
    this.hour = options.ih || 0
    this.day = options.id || 1
    this.month = options.it || 1
    this.year = options.iy || 1
    this.interval = -1
    this.monthDays = options.monthDays || [
      31, // January
      28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31, // December
    ]
    this.weekLength = options.weekLength || 7
  }

  addSecond (value = 1) {
    // console.log('adding', value, 'sec')
    this.second += Math.floor(value)
    while (this.second >= 60) {
      this.second -= 60
      this.addMinute()
    }
  }

  addMinute (value = 1) {
    // console.log('adding', value, 'min')
    const iValue = Math.floor(value)
    if (iValue !== value) {
      this.addSecond(fsub(value, iValue) * 60)
    }
    this.minute += iValue
    while (this.minute >= 60) {
      this.minute -= 60
      this.addHour()
    }
  }

  addHour (value = 1) {
    // console.log('adding', value, 'hr')
    const iValue = Math.floor(value)
    if (iValue !== value) {
      this.addMinute(fsub(value, iValue) * 60)
    }
    this.hour += iValue
    while (this.hour >= 24) {
      this.hour -= 24
      this.addDay()
    }
  }

  addDay (value = 1) {
    // console.log('adding', value, 'day')
    const iValue = Math.floor(value)
    if (iValue !== value) {
      this.addHour(fsub(value, iValue) * 24)
    }
    this.day += iValue
    while (this.day > this.monthDays[this.month - 1]) {
      this.day -= this.monthDays[this.month - 1]
      // console.log('removing', this.monthDays[this.month - 1], 'days')
      this.addMonth()
    }
  }

  addMonth (value = 1) {
    // console.log('adding', value, 'mth')
    const iValue = Math.floor(value)
    if (iValue !== value) {
      this.addDay(fsub(value, iValue) * this.monthDays[(this.month + iValue - 1) % this.monthDays.length])
    }
    this.month += iValue
    while (this.month >= this.monthDays.length + 1) {
      this.month -= this.monthDays.length
      this.addYear()
    }
  }

  addYear (value = 1) {
    // console.log('adding', value, 'yr')
    const iValue = Math.floor(value)
    if (iValue !== value) {
      this.addMonth(fsub(value, iValue) * this.monthDays.length)
    }
    this.year += iValue
  }

  stop () {
    clearInterval(this.interval)
  }

  start ({
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
  }) {
    this.interval = setInterval(() => {
      if (sps) {
        this.addSecond(sps)
      }
      if (mps) {
        this.addMinute(mps)
      }
      if (hps) {
        this.addHour(hps)
      }
      if (hpm) {
        this.addHour(hpm / 60)
      }
      if (dps) {
        this.addDay(dps)
      }
      if (dpm) {
        this.addDay(dpm / 60)
      }
      if (dph) {
        this.addDay(dph / 3600)
      }
      if (wps) {
        this.addDay(this.weekLength * wps)
      }
      if (wpm) {
        this.addDay(this.weekLength * (wpm / 60))
      }
      if (wph) {
        this.addDay(this.weekLength * (wph / 3600))
      }
      if (wpd) {
        this.addDay(this.weekLength * (wpd / 86400))
      }
      if (tps) {
        this.addMonth(tps)
      }
      if (tpm) {
        this.addMonth(tpm / 60)
      }
      if (tph) {
        this.addMonth(tph / 3600)
      }
      if (tpd) {
        this.addMonth(tpd / 86400)
      }
      if (yps) {
        this.addYear(yps)
      }
      if (ypm) {
        this.addYear(yps / 60)
      }
      if (yph) {
        this.addYear(yph / 3600)
      }
      if (ypd) {
        this.addYear(ypd / 86400)
      }
      if (ypt) {
        this.addYear(ypd / (86400 * 30))
      }
      this.emit('tick', {
        second : this.second,
        minute : this.minute,
        hour : this.hour,
        day : this.day,
        month : this.month,
        year : this.year,
      })
    }, 1000)
  }
}
