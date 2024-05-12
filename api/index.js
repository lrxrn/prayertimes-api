process.env.TZ = 'Indian/Maldives';

const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

// Register routes
const healthRouter = require('./routes/health');
const todayPrayerRouter = require('./routes/today');
const nextPrayerRouter = require('./routes/next');

app.use('/health', healthRouter);
app.use('/today', todayPrayerRouter);
app.use('/next', nextPrayerRouter)


app.listen(80, () => {
    console.log(`Server listening on port 80.`);
});

module.exports = app;