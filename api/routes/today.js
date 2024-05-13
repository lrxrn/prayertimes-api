const express = require('express');
const router = express.Router();
const { mapAtoll, addMinutesToTime, addDaysToDate } = require('../../utils')
const { MVPrayerTimes } = require("mv-prayertimes");

router.get('/', (req, res) => {
    const { location } = req.query;

    if (!location) {
      return res.json({ status: 'error', message: 'Provide a location in the "location" query. (Ex. "?location=K.Male"'})
    }

    try {
      const PrayerTimes = new MVPrayerTimes(location);
    
      const times = PrayerTimes.today
      const island = PrayerTimes.island
      const atoll = island.atoll
      const namedAtoll = mapAtoll(atoll.slice(0, atoll.length - 1))

      const formatDate = addDaysToDate(times.day)
      const formatedTimes = {
        fajr: addMinutesToTime(times.fajr),
        sunrise: addMinutesToTime(times.sunrise),
        dhuhr: addMinutesToTime(times.dhuhr),
        asr: addMinutesToTime(times.asr),
        maghrib: addMinutesToTime(times.maghrib),
        isha: addMinutesToTime(times.isha)
      }
    
      res.json({ status: 'OK', message: `Prayer times for ${namedAtoll} ${PrayerTimes.island.island} for today`, island: island, timings: JSON.stringify(formatedTimes), date: formatDate });

    } catch(err) {
      console.log(err);
      return res.json({ status: 'ERROR', message: `Provide a valid location in the "location" query. (Ex. "?location=K.Male"`})
    }

});
  
module.exports = router;