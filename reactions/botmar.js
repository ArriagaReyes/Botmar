module.exports = {
    regexp: /botmar/gi,
    response: (message) => {

        if(message.author.id === '472270965196193793') {
            message.channel.send('AHHHHHHHHHHH PIGEON SCARY');
        }
        
        if(message.author.id === '211692903360233472') {
            message.channel.send('I will do anything for you master.')
        }

        if(message.author.id === '395057107008880643') {
            message.channel.send('YOOOOO CORBA KAI');
        }

        if(message.author.id === '417663140860264448') {
            message.channel.send('This is a panda free zone, thanks');
        }
    }
}