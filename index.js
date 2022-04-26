const Discord = require('discord.js');
const client = new Discord.Client();
const message = [' ']
let current = 1;

client.login('TOKEN')

client.on('ready', () => {
    console.log('I am ready');
            client.user.setActivity(`커뮤니티에 오신것을 환영합니다!`, { type: "PLAYING"})
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
