const Discord = require ("discord.js");

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES              
    ]
});

const prefix = "-";

Client.on("ready", async () => {
    /*var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("open-ticket")
                .setLabel("ouvrir un ticket🎟️")
                .setStyle("PRIMARY") 
            );


    Client.channels.cache.get("975830865689071616").send({content: "Appuyer sur le bouton pour ouvrir un ticket!", components: [row]});
        */
    console.log("bot opérationnel");
}); 

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "open-ticket"){
            nbTicket++;

            interaction.guild.channels.create("ticket-" + nbTicket, {
                parent: "975469471936438352"
            }).then(channel =>{
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                    );

                channel.send({content:  "<@" + interaction.user.id + ">voici votre ticket merci de marquer votre message est de l'envoyer puis fermer le ticket🎟️", components: [row]});

                interaction.reply({content: "ticket correctement crée mreci de vous rendre dans le salon attitrée!", ephemeral: true});
            });
        }
        else if(interaction.customId === "close-ticket"){
            interaction.channel.setParent("975469469952532480");

            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("delete-ticket")
                        .setLabel("supprimer le ticket")
                        .setStyle("DANGER")
                    );

            interaction.message.delete();

            interaction.channel.send({content: "supprimer le ticket :", components: [row]});

            interaction.reply({content: "ticket archivé", ephemeral: true});
        }
        else if(interaction.customId === "delete-ticket"){
            interaction.channel.delete();
        }
    }
});

var nbTicket = 0;

Client.login("process.env.TOKEN");

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    if (message.content === prefix + "tr"){
        message.reply("Une personne contact @everyone pour faire un tournois🎉!")
    }
    if (message.content === prefix + "bienvenue"){
        message.reply("Bonjour je suis Héliasium Bot je vien de rejoindre votre serveur pour plus en savoir sur moi faire -help")
    }
    //-help 
    if (message.content === prefix + "help"){ 
        const embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setTitle("**🚨Command Liste🚨**")
             .setDescription("Voisi les commands du bot!")
             .addField("__-help__", "Affiche la liste des command du bot")
             .addField("__-P help__", "Affiche la liste des command de Paladium")
             .addField("__-tr__", "Permet de lancer un tournois")
             .addField("__ticket__", "ticket est implémenter sur votre sreveur")
        message.channel.send({ embeds: [embed]});    
    }  
});

Client.on("messageCreate", message => {
    if(message.content === prefix + "help"){
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bouton1")
                .setLabel("Supporter le Bot")
                .setStyle("SUCCESS")
                .setEmoji("💪")
            ).addComponents(new Discord.MessageButton()
                .setCustomId("bouton2")
                .setLabel("Bientôt")
                .setStyle("DANGER")
                .setEmoji("📝")
            );
        message.channel.send({content: " ", components: [row]});        
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton1"){
            interaction.reply("Merci de supporter le Bot: Héliasium crée par Matt_Begisse#4609");
            console.log("1 personne a suporter le bot");
       }
        if(interaction.customId === "bouton2"){
                             
       }
    }
}); 






