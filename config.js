require('dotenv').config();

const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD;
const CLIENT_ID = process.env.CLIENT_ID;

module.exports = {
    TOKEN, GUILD_ID, CLIENT_ID
}