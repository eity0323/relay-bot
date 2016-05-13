'use strict';

const Command = require('../command');
const feed = require('../helpers/feeds');
const calendar = require('../helpers/calendar');

class YouTubeCommand extends Command {
    constructor() {
        super({
            command: 'innyt',
            description: 'Subscribe to the Imperial News Network on YouTube!',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        resolve('You can find and subscribe to INN on YouTube here: ' +
                'https://www.youtube.com/channel/UCCNuWjBJHxtwMCQosW-zicQ');
    }
}

class TwitterCommand extends Command {
    constructor() {
        super({
            command: 'inntwitter',
            description: 'Follow INN on Twitter!',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        resolve('You can find and follow INN on Twitter at ' +
                'https://twitter.com/inn_starcitizen');
    }
}

class FacebookCommand extends Command {
    constructor() {
        super({
            command: 'innfb',
            description: 'Like INN on Facebook!',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        resolve('You can find and like INN on Facebook at ' +
                'https://www.facebook.com/ImperialNewsNetworkSC');
    }
}

class TwitchCommand extends Command {
    constructor() {
        super({
            command: 'rsitwitch',
            description: 'Follow INN on Twitch!',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        resolve('You can find and follow INN on Twitch here: ' +
                'https://twitch.tv/innlive');
    }
}

class INNCommand extends Command {
    constructor() {
        super({
            command: 'inn',
            description: 'Get the latest INN posts.',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        let extraMessage = '\n**Check out the rest of INN\'s content at:** ' +
                           'http://imperialnews.network/';
        feed('http://imperialnews.network/feed/', feedMessage => {
            calendar('kbvcdsv2n7ro54s0cgdh48c7k8@group.calendar.google.com',
             calendarMessage => { resolve(feedMessage + calendarMessage + extraMessage); });
        });
    }
}

class OrgCommand extends Command {
    constructor() {
        super({
            command: 'org',
            description: 'Get a link to the INN organization.',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        resolve('You can check out the INN Organization on RSI here: ' +
                'https://robertsspaceindustries.com/orgs/INN');
    }
}

class GitHubCommand extends Command {
    constructor() {
        super({
            command: 'github',
            description: 'Check out INN\'s open source projects.',
            hidden: false
        });
    }
    
    respond(message, bot, config, resolve, reject) {
        resolve('You can check out the INN\'s open source projects here: ' +
                'https://github.com/ImperialNewsNetwork/inn-bot');
    }
}

module.exports = [YouTubeCommand, FacebookCommand, TwitchCommand,
                  TwitterCommand, INNCommand, OrgCommand, GitHubCommand];