const Discord = require("discord.js");

class SmartClient extends Discord.Client {
    constructor(settings, options = {}) {
        super(options);

        this.config = require("./clientconfig.js")(settings);
        this.messageFunction = require("./util/functions");
        this.handlers = require("./util/handlers");

        if (!this.config.token) throw Error("Smart+ Error: You must specify a token");
        if(!this.config.prefix) throw Error("Smart+ Error: You must specify a prefix");
        this.commands = this.handlers.loadCommands();

        this.on("ready", () => {
            this.user.setActivity(this.config.status, { type: this.config.statusType });
            console.log(`${this.user.username} is online and ready! Loaded ${this.commands.size} commands`);
        });

        const messageEvent = require(`./events/message.js`);
        this.on("message", messageEvent.bind(null, this));
    }

    async connect() {
        await super.login(this.config.token);
    }

    async disconnect() {
        return this.destroy();
    }
}

module.exports = SmartClient;