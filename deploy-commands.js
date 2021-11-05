const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CLIENT_ID, GUILD_ID, TOKEN } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('hello').setDescription('Hello :)')
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
    .then(() => console.log('Commands ready'))
    .catch(console.error);