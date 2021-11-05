const { Client, Intents } = require('discord.js');
const { TOKEN } = require('./config.json');

const botmarex = /botmar/;
const dabex = /dab/;
const prefix = /^bm\$/i;

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
]});

client.once('ready', () => {
    console.log('Ready');
});

client.on('messageCreate', message => {
    if(message.author.bot) return;

    const prefixinfo = prefix.exec(message.content);
    const botmarinfo = botmarex.exec(message.content.toLowerCase());
    const dabinfo = dabex.exec(message.content.toLowerCase());

    if(prefixinfo){
        message.channel.send('Works');
    } else if(botmarinfo) {
        message.channel.send('Dum gay bitch\n*jejeje*');
    } else if (dabinfo) {
        message.channel.send('*dab*');
    }
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const { commandName } = interaction;

    if(commandName === 'hello') {
        await interaction.reply('Dum gay bitch\n*jejejeje*');
        await interaction.deleteReply();
    }
});

client.login(TOKEN);