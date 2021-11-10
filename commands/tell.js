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

        if(/<@!\d+>/g.test(id) || /<@\d+>/g.test(id)) {
            message.channel.send(`${id} ${content}`);
        }
        else {
            message.channel.send(`<@${id}> ${content}`);
        }
    }
}