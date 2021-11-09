module.exports = {
    commandName: 'tell',
    description: 'Its a secret',
    execute: (message, params) => {
        const id = params[0];
        let content = '';

        for(let i = 1; i < params.length; i++) {
            content += params[i] + ' ';
        }

        message.delete();
        message.channel.send(`<@${id}> ${content}`);
    }
}