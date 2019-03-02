// definition variable
const Discord = require('discord.js');
const bot = new Discord.Client();
//code
bot.on('ready', function(){
  bot.user.setGame('Bot | Groupe VV').catch(console.error);
});

bot.on('guildMemberAdd', function(member){
  member.createDM().then(function(channel) {
    return channel.send('Bonjour ' + member.displayName + ' , Bienvenue sur Groupe VV - World of Warcraft . Si tu es un membre de la guilde, fais le savoir à Chaxel (Chamanaxel#2916). Si tu n\'es pas de la guilde mais que tu es là pour le raid ou tout autre activité, connecte toi dans le salon "Uldir connect here" et tu seras déplacé.');
  }).catch(console.error);
});
//login
bot.login(process.env.TOKEN);
