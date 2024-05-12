const express = require('express');
const router = express.Router();
const { MVPrayerTimes } = require("mv-prayertimes");

function addMinutesToTime(minutesToAdd) {
  const time = new Date(`1970-01-01T24:00:00`); // Set base date to avoid irrelevant parts
  time.setMinutes(time.getMinutes() + minutesToAdd);
  
  const hours = time.getHours().toString().padStart(2, '0'); // Add leading zero for single digits
  const minutes = time.getMinutes().toString().padStart(2, '0');
  
  return `${hours}:${minutes}`;
}

function addDaysToDate(daysToAdd) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  
  // Set the date to January 1st of the current year
  const baseDate = new Date(year, 0, 1);
  
  // Add the specified number of days
  baseDate.setDate(baseDate.getDate() + daysToAdd);
  
  // Format the date string (YYYY-MM-DD)
  const formattedDate = baseDate.toISOString().slice(0, 10);
  
  return formattedDate;
}

router.get('/', (req, res) => {
    const { location } = req.query; // Access query parameter

    if (!location) {
      return res.json({ status: 'error', message: 'Provide a location in the "location" query. (Ex. "?location=K.Male"'})
    }

    try {
      const PrayerTimes = new MVPrayerTimes(location);
    
      const times = PrayerTimes.today
      const island = PrayerTimes.island

      const formatDate = addDaysToDate(times.day)
      const formatedTimes = {
        fajr: addMinutesToTime(times.fajr),
        sunrise: addMinutesToTime(times.sunrise),
        dhuhr: addMinutesToTime(times.dhuhr),
        asr: addMinutesToTime(times.asr),
        maghrib: addMinutesToTime(times.maghrib),
        isha: addMinutesToTime(times.isha)
      }
    
      res.json({ status: 'success', message: `Prayer times for ${PrayerTimes.island.atoll}${PrayerTimes.island.island} for today`, island: island, times: JSON.stringify(formatedTimes), date: formatDate });

    } catch(err) {
      console.log(err);
      return res.json({ status: 'error', message: `Provide a valid location in the "location" query. (Ex. "?location=K.Male"`})
    }

});
  
module.exports = router;