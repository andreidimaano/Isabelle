import { MessageEmbed } from 'discord.js'

let createStartEmbed = (timer: string) => {
    return new MessageEmbed()
        .setColor('#dc2f02')
        .setTitle('Pomodoro')
        .setTimestamp()
        .addFields(
            { name: `:tomato: Your timer is set to ${timer} minutes :tomato:`, value: ':blush: Happy Studying! :blush:'},
        )
}
let createEndEmbed = (timer: string) => {
    return new MessageEmbed()
    .setColor('#dc2f02')
    .setTitle('Pomodoro')
    .setTimestamp()
    .addFields(
        { name: `:tomato: Congrats on finishing a pomodoro session :tomato:`, value: `:blush: enjoy your ${timer} minute break! :blush:`}
    ) 
}

export {
    createStartEmbed,
    createEndEmbed
}
