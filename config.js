var config = {
  // Accounts to read the last tweet from. The first one in the list will be
  // spoken by the party mario.
  twitter: (process.env.TTC_BOTS || 'tinycarebot,selfcare_bot,magicrealismbot').toLowerCase().split(','),

  // Use this to have a different animal say a message in the big box.
  say: (process.env.TTC_SAY_BOX || 'mario').toLowerCase(),

  // Set this to false if you want to scrape twitter.com instead of using
  // API keys. The tweets may include RTs in this case :(
  apiKeys: (process.env.TTC_APIKEYS || 'true') === 'true',

  // Directories in which to run git-standup on for a list of your recent commits.
  repos: (process.env.TTC_REPOS || '~/Code').split(','),

  // Directory-depth to look for git repositories.
  depth: (process.env.TTC_REPOS_DEPTH || 1),

  // Where to check the weather for.
  // It's using weather.service.msn.com behind the curtains.
  weather: process.env.TTC_WEATHER || 'Lima',

  // Set to false if you're an imperial savage. <3
  celsius: (process.env.TTC_CELSIUS || 'true') === 'true',

  terminal_title: (process.env.TTC_TERMINAL_TITLE === 'false' ? null : '✨💖 tiny care terminal 💖✨'),

  updateInterval: parseFloat(process.env.TTC_UPDATE_INTERVAL) || 20,

  keys: {
    consumer_key:        process.env.TTC_CONSUMER_KEY || process.env.CONSUMER_KEY || 'none',
    consumer_secret:     process.env.TTC_CONSUMER_SECRET || process.env.CONSUMER_SECRET || 'none',
    access_token:        process.env.TTC_ACCESS_TOKEN || process.env.ACCESS_TOKEN || 'none',
    access_token_secret: process.env.TTC_ACCESS_TOKEN_SECRET || process.env.ACCESS_TOKEN_SECRET || 'none',
  },

  // Pomodoro Settings
  runningDuration: process.env.TTC_POMODORO || 20,
  breakDuration: process.env.TTC_BREAK || 5,

};

module.exports = config;
