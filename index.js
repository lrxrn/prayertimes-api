require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Register routes
const healthRouter = require('./routes/health');
const todayPrayerRouter = require('./routes/today');
const nextPrayerRouter = require('./routes/next');

app.use('/health', healthRouter);
app.use('/today', todayPrayerRouter);
app.use('/next', nextPrayerRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
