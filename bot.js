const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Windsmp.de', // Hier die IP deines Servers eintragen
  port: 19132,             // Meistens 19132 bei Bedrock
  username: 'MeinAFKBot',
  version: false           // 'false' lässt den Bot die Version automatisch raten
})

bot.on('spawn', () => {
  console.log('Erfolg! Der Bot ist auf dem Server.')
})

bot.on('error', (err) => {
  console.log('Fehler aufgetreten: ' + err)
})
