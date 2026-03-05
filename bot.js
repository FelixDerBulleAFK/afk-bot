const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Windsmp.de', 
  port: 19132,             
  username: 'FelixDerBulleAFK',
  version: false           // Sucht sich automatisch die richtige Version
})

// Wenn der Bot den Server betritt
bot.on('spawn', () => {
  console.log('FelixDerBulleAFK ist jetzt auf Windsmp.de online!')
  
  // Kurze Pause zum Laden, dann zum Zielort (falls nötig)
  setTimeout(() => {
    // Falls du dich teleportieren musst, entferne die zwei Schrägstriche vorne:
    // bot.chat('/home farm') 
  }, 3000)
})

// Anti-AFK: Alle 30 Sekunden einmal zuschlagen
setInterval(() => {
  if (bot.entity) {
    bot.swingArm('right') // Schlägt in die Luft (oder auf ein Monster vor ihm)
    console.log('Schlag ausgeführt, um AFK-Kick zu verhindern.')
  }
}, 30000)

// Fehler abfangen, damit das Skript nicht abstürzt
bot.on('error', (err) => console.log('Fehler:', err))
bot.on('kicked', (reason) => console.log('Vom Server gekickt:', reason))
