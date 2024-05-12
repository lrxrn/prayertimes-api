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

router.get('/', (req, res) => {
    const { location } = req.query; // Access query parameter

    if (!location) {
      return res.json({ status: 'error', message: 'Provide a location in the "location" query. (Ex. "?location=K.Male"'})
    }

    try {
      const PrayerTimes = new MVPrayerTimes(location);
    
      const times = PrayerTimes.nextPrayer
      const island = PrayerTimes.island
    
      res.json({ status: 'success', message: `Next prayer time for ${PrayerTimes.island.atoll}${PrayerTimes.island.island}`, island: island, data: JSON.stringify(times), date: new Date().toISOString().slice(0, 10) });

    } catch(err) {
      console.log(err);
      return res.json({ status: 'error', message: `Provide a valid location in the "location" query. (Ex. "?location=K.Male"`})
    }

});
  
module.exports = router;