require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  MessageEmbed,
  PermissionsBitField,
  Permissions,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", (x) => {
  console.log(`${x.user.tag} sudah aktif`);
});

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase() === "hai") {
    message.reply("Hai Sayang!");
  }
});

client.login(process.env.TOKEN);
