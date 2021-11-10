const fs = require('fs');

let reactions = [];

const initlize = () => {
    const reactionFiles = fs.readdirSync('./reactions');

    for(const file of reactionFiles) {
        reactions.push(require(`../reactions/${file}`))
    }
}

const interface = (message) => {
    const responses = [];
    let content = message.content.split(' ');

    for(let i = 0; i < content.length; i++) {
        for(let j = 0; j < reactions.length; j++) {
            if(!content[i].search(reactions[j].regexp)) {
                responses.push(reactions[j].response);
                console.log(`word "${content[i]}" works with expression "${reactions[j].regexp}"`);
            }
        }
    }

    for(const res of responses) {
        res(message);
    }
}

module.exports = { initlize, interface }