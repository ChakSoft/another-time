# Another Time

Another time is a little library which generates a fake date timer.

## Installation

```shell
$ npm install another-time
```

## Usage

```javascript
const { createTimer } = require('another-time')

createTimer().start()
```

## Options Reference

### `createTimer([options], [onTick = function () {}])`

#### `options.secondsPerSecond : Number`

Number of seconds that are computed every real second.

#### `options.minutePerSecond : Number`

Number of minutes that are computed every real second.

#### `options.hourPerSecond : Number`

Number of hours that are computed every real second.

#### `options.hourPerMinute : Number`

Number of hours that are computed every real minute.

#### `options.dayPerSecond : Number`

Number of days that are computed every real second.

#### `options.dayPerMinute : Number`

Number of days that are computed every real minute.

#### `options.dayPerHour : Number`

Number of days that are computed every real hour.

#### `options.weekPerSecond : Number`

Number of weeks that are computed every real second.

#### `options.weekPerMinute : Number`

Number of weeks that are computed every real minute.

#### `options.weekPerHour : Number`

Number of weeks that are computed every real hour.

#### `options.weekPerDay : Number`

Number of weeks that are computed every real day.

#### `options.monthPerSecond : Number`

Number of months that are computed every real second.

#### `options.monthPerMinute : Number`

Number of months that are computed every real minute.

#### `options.monthPerHour : Number`

Number of months that are computed every real hour.

#### `options.monthPerDay : Number`

Number of months that are computed every real day.

#### `options.yearPerSecond : Number`

Number of years that are computed every real second.

#### `options.yearPerMinute : Number`

Number of years that are computed every real minute.

#### `options.yearPerHour : Number`

Number of years that are computed every real hour.

#### `options.yearPerDay : Number`

Number of years that are computed every real day.

#### `options.yearPerMonth : Number`

Number of years that are computed every real month.

#### `options.initialSecond : Number`

Seconds of the initial fake date time.

#### `options.initialMinute : Number`

Minutes of the initial fake date time.

#### `options.initialHour : Number`

Hour of the initial fake date time.

#### `options.initialDay : Number`

Day of the initial fake date time.

#### `options.initialMonth : Number`

Month of the initial fake date time.

#### `options.initialYear : Number`

Year of the initial fake date time.

#### `options.weekLength : Number`

Number of fake days in a fake week.

#### `options.monthDays : Array<Number>`

List of number of fake days inside fake months. Each item is a number of fake days, fake months don't have names, they are just represented by the index in the array.

#### `onTick : function (FakeDate)`

Callback to call each real second, the first and only argument is the fake date object containing the structure of the fake date, for example :

```json
{
  "second": 2,
  "minute": 10,
  "hour": 5,
  "day": 1,
  "month": 12,
  "year": 2020
}
```

## License

This software is released under the GPL-v3.0 License. See [LICENSE](/LICENSE)
