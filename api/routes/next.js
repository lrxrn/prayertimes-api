const express = require('express');
const router = express.Router();
const { mapAtoll } = require('../../utils')
const { MVPrayerTimes } = require("mv-prayertimes");

router.get('/', (req, res) => {
    const { location } = req.query; // Access query parameter

    if (!location) {
      return res.json({ status: 'error', message: 'Provide a location in the "location" query. (Ex. "?location=K.Male"'})
    }

    try {
      const PrayerTimes = new MVPrayerTimes(location);
    
      const times = PrayerTimes.nextPrayer
      const island = PrayerTimes.island
      const atoll = island.atoll
      const namedAtoll = mapAtoll(atoll.slice(0, atoll.length - 1))
    
      res.json({ status: 'OK', message: `Next prayer for ${namedAtoll} ${PrayerTimes.island.island}`, island: island, data: JSON.stringify(times), date: new Date().toISOString().slice(0, 10) });

    } catch(err) {
      console.log(err);
      return res.json({ status: 'ERROR', message: `Provide a valid location in the "location" query. (Ex. "?location=K.Male"`})
    }

});
  
module.exports = router;