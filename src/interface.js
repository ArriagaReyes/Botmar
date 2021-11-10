const fs = require('fs');

//command array
let commands = [];

//Initlize commands
const initlize = () => {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    
    for(const file of commandFiles) {
        commands.push(require(`../commands/${file}`));
    }
}

//command interface
const interface = (message) => {
    if(!/^bm\$ /i.test(message.content)) return;

    const args = message.content.match(/[^ ]+/g);
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

module.exports = { initlize, interface }