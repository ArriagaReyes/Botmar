const fs = require('fs');
const { Client, Intents, Message, MessageEmbed } = require('discord.js');
const { TOKEN } = require('./config.json');

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
]});

//load in commands
let commands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    commands.push(require(`./commands/${file}`));
}

//command line interface
const cli = (message) => {
    if(!/^bm\$ /.test(message.content)) return;

    const args = message.content.match(/\w+/g);
    console.log(args);
    const name = args[1];

    const params = [];

    for (let i = 2; i < args.length; i++) {
        params.push(args[i]);
    }

    const command = commands.find(({ commandName }) => commandName === name);

    if(!command) {
        message.channel.send('Botmar no understando...');
        return false;
    }

    command.execute(message, params);
    return true;
}

//events

client.once('ready', () => {
    console.log('Ready');
});

client.on('messageCreate', message => {
    if(message.author == client.user) return;

    cli(message);
    //react(message);
});

client.login(TOKEN);