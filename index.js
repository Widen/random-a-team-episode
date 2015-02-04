var util = require('util'),
    data = require('./a-team_episode-list.json'),
    random = require('random-to');

var episodes = data;
if (process.argv[2]) {
    episodes = data.filter(function(episode) {
        return episode["Season Number"] == process.argv[2];
    });
}

var index = random.from0upto(episodes.length),
    episode = episodes[index],
    formatString = "s%de%d - %s";

var displayString = util.format(formatString, episode["Season Number"], episode["Episode Number"], episode.Title);
console.log(displayString);

