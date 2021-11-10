const { Client, Intents, Message, MessageEmbed } = require('discord.js');
const { TOKEN } = require('./config.json');
const command = require('./src/interface');
const react = require('./src/reactions');

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
]});

//events
client.once('ready', () => {
    command.initlize();
    react.initlize();
    console.log('Ready');
});

client.on('messageCreate', message => {
    if(message.author == client.user) return;

    if(!command.interface(message)) {
        react.interface(message);
    };
});

client.login(TOKEN);