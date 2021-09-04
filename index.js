const Discord = require('discord.js');
const client = new Discord.Client();
const { token, default_prefix } = require('./config.json');
const { readdirSync } = require('fs');
const { join } = require('path');
const config = require('./config.json');
client.config = config;
const db = require('quick.db');


client.on('ready', () => {
    console.log('I am ready');
    client.user.setActivity(`BlackDragon Community welcome`, { type: "WATCHING"})
});

client.on('guildMemberAdd', member => {
  if(member.guild.id != '436048224617365524') return;
  let ok = client.emojis.cache.get('772413073701076993')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${ok} ${member.user.username} 님께서 서버에 접속하셨습니다.`)
  .setColor("#00ff23")
  client.channels.cache.get("568371523468132362").send(embed)
})

client.on('guildMemberAdd', member => {
    if(member.guild.id != '436048224617365524') return;
    const channelId = '791604082665586690'
    let ok = client.emojis.cache.get('772413073701076993')
      let embed2 = new Discord.MessageEmbed()
  .setAuthor(`BlackDragon Community에 오신것을 환영합니다!`)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`${ok} ${member.user.username}님 서버에서 활동하시기 전\n${member.guild.channels.cache.get(channelId)}을 꼭 확인해 주시길 바랍니다!`)
  .setColor("#c994ff")
  .setFooter('서버 접속 시간', client.user.displayAvatarURL())
  .setTimestamp();
  member.send(embed2)
})


client.on('guildMemberRemove', member => {
  if(member.guild.id != '436048224617365524') return;
  let no = client.emojis.cache.get('772413095087570945')
  let embed = new Discord.MessageEmbed()
  .setDescription(`${no} ${member.user.username} 님께서 서버에서 나가셨습니다.`)
  .setColor("#ff0606")
  client.channels.cache.get("842021478420709387").send(embed)
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = default_prefix;

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);


    if(prefixRegex.test(message.content)){
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(token)