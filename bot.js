const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'DEINE_SERVER_IP', // Hier die IP des Bedrock-Servers eintragen
  port: 19132,             // Standard-Port für Bedrock
  username: 'AFK_Bot',
  version: '1.20.10'       // WICHTIG: Muss zur Serverversion passen
})

bot.on('spawn', () => console.log('Bot ist online!'))
bot.on('error', (err) => console.log('Fehler:', err))
