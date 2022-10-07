var cron = require('node-cron');

console.log('Starting cron container');

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});
