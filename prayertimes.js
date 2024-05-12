const { MVPrayerTimes } = require("mv-prayertimes");

const PrayerTimes = new MVPrayerTimes("K.Male"); // atoll and island

// get island id using
console.log(PrayerTimes.island); // 102

// prayer times for today
console.log(PrayerTimes.today); // [{call: 'fajr', ...}, ...]

// next prayer time
console.log(PrayerTimes.nextPrayer); // {call: 'fajr', timeInMinutes: 301, string: '' ...}

// events for every prayer time

PrayerTimes.on("prayer", (details) => {
  console.log(
    `[${details.string /* 5:30 */}] It's ${details.call /* fajr */} time!`
  );

  console.log(
    `Next prayer: ${PrayerTimes.nextPrayer.call /* dhuhr */} at ${
      PrayerTimes.nextPrayer.string /* 12:11 */
    }`
  );
});