# Smart+ || SmartPlus

# How to start? ❓

1. Download the package: `npm install smartplus`.
2. Create a index.js file.

# What to code? 💻

```
const SmartPlus = require("smartplus");
const bot = new SmartPlus.Client({
    token: "",
    prefix: ""
});

bot.online();
```

# How to add commands? 📡

1. Create a folder and name it `commands`.
2. Create a file in the `commands` folder and name it to your command name.

# What is the command basic? 💻

```
module.exports = {
    name: "Command Name",
    description: "Command Description",
    run: async (client, message, args) => {
        // The Command Code Here. ( SmartPlus, Discord.JS, NodeJS )
    },
};
```
# What are the client and command options? ⚙

# Client

```
SmartPlus.Client({
    token: "", 
    prefix: "",
    status: "",
    statusType: "",
    embedColor: "",
});
```

# Message & Command


- Success embed:
```if (args[0]) message.DiscordSend("This is a success embed!")```

- Send a automatic error
```if (!args[0]) return message.DiscordError("No args provided")```

- Embed:
```message.DiscordSend({title: "test", descriptions: "test", color: "#00ff00"})```

- Find a member:
```
let member = message.FindUser(args[0]);
if (!member) return message.error("No member found!");
```

- Find a channel:
```
let channel = message.FindChannel(args[0]);
if (!channel) return message.error("No channel found!");
```

- Find a role:
```
let role = message.FindRole(args[0]);
if (!role) return message.error("No role found!");
```

- Check user is guild owner:
```if(!message.member.CheckOwnership()) return message.error("User is no owner!");```

- Check user is admin:
```if(!message.member.CheckAdmin()) return message.error("User is no admin!");```

- Check user is moderator:
```if(!message.member.CheckModerator()) return message.error("User is no moderator!");```

