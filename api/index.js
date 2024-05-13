process.env.TZ = 'Indian/Maldives';

const express = require('express');
const path = require('path');
const app = express();
const staticPath = path.join(__dirname, 'public'); 


app.use(express.static(staticPath));

// Register routes
const healthRouter = require('./routes/health');
const todayPrayerRouter = require('./routes/today');
const nextPrayerRouter = require('./routes/next');

app.use('/api/health', healthRouter);
app.use('/api/today', todayPrayerRouter);
app.use('/api/next', nextPrayerRouter)


app.listen(80, () => {
    console.log(`Server listening on port 80.`);
});

module.exports = app;