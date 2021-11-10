module.exports = {
    commandName: 'dab',
    description: 'dabmar',
    execute: (message, params) => {
        message.delete();
        message.channel.send('*dab*');
    }
}