const Discord = require ("discord.js");

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES              
    ]
});

const prefix = "-P";

Client.on("ready", async () => {
    console.log("bot opérationnel");
}); 

Client.login("OTc2NDQ0MzI2Nzg5OTE0NjM0.GY22n7.iq7YtfoZ8vS6uW8p_fW0Lo8qgxyuyeDnZPA5fg");

Client.on("messageCreate", message => {
    if (message.author.bot) return;
     
    if (message.content === prefix + " help"){ 
        const embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setTitle("**🚨Command Liste🚨**")
             .setDescription("Voisi les commands du bot!")
             .addField("__-P minage__", "Affiche que tu est en minage sur paladium")
             .addField("__-P faction__", "Affiche que tu est en faction sur palaium")
             .addField("__-P farmland__", "Affiche que tu est en farmland sur palaium")
        message.channel.send({ embeds: [embed]});    
    }
    if (message.content === prefix + " minage"){ 
        const embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setTitle("**Cette utilisateur est en minage sur Paladium**")
             .setDescription("Command Paladium -P minage")
             .addField("Si vous voulait le rejoindre venez en Vocal ou MP", "_______")
        message.channel.send({ embeds: [embed]});    
    }
    if (message.content === prefix + " faction"){ 
        const embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setTitle("**Cette utilisateur est en faction sur Paladium**")
             .setDescription("Command Paladium -P faction")
             .addField("Si vous voulait le rejoindre venez en Vocal ou MP", "_______")
        message.channel.send({ embeds: [embed]});    
    }
    if (message.content === prefix + " farmland"){ 
        const embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setTitle("**Cette utilisateur est en farmland sur Paladium**")
             .setDescription("Command Paladium -P farmland")
             .addField("Si vous voulait le rejoindre venez en Vocal ou MP", "_______")
        message.channel.send({ embeds: [embed]});    
    }
});

Client.on("messageCreate", message => {
    if(message.content === prefix + " help"){
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bouton11")
                .setLabel("Supporter le Bot")
                .setStyle("SUCCESS")
                .setEmoji("💪")
            ).addComponents(new Discord.MessageButton()
                .setCustomId("bouton12")
                .setLabel("appuye")
                .setStyle("DANGER")
                .setEmoji("📝")
            );
        message.channel.send({content: " ", components: [row]});        
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton11"){
            interaction.reply("Merci de supporter le Bot: Héliasium crée par Matt_Begisse#4609");
            console.log("1 personne a suporter le bot");
       }
        if(interaction.customId === "bouton12"){
                             
       }
    }
}); 
