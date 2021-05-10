const Discord = require('discord.js'); 

module.exports = async (client, message) => {

    message = client.messageFunction(message, client);
    if (message.author.bot) return; 
    if(message.channel.type === "dm") return; 

    var prefix = client.config.prefix; 

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);

    if (!prefixRegex.test(message.content.toLowerCase())) return;
    var [, matchedPrefix] = message.content.toLowerCase().match(prefixRegex);

    this.args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    this.command = this.args.shift().toLowerCase();

    const commands = client.commands.get(this.command) || client.commands.find(commands => commands.aliases && commands.aliases.includes(this.command));

    if (commands) {
        commands.run(client, message, this.args).catch(e => {
            return message.error(e);
        })
    }
}