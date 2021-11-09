module.exports = {
    commandName: 'hello',
    description: 'A nice hello message.',
    execute: (message, params) => {
        message.author.send(`<@${message.author.id}> you smell like farts`);
    }
}