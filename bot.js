const bedrock = require('bedrock-protocol')

const client = bedrock.createClient({
  host: 'Windsmp.de',
  port: 19132,
  username: 'FelixDerBulleAFK',
  offline: true // Versucht den Login ohne Microsoft-Konto (für Cracking-Server)
})

client.on('spawn', () => {
  console.log('Bot ist erfolgreich auf Windsmp.de (Bedrock) gespawnt!');
  
  // TPA-Anfrage nach 10 Sekunden senden
  setTimeout(() => {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: client.username,
      xuid: '',
      platform_chat_id: '',
      filtered_message: '',
      message: '/tpa FelixDerBulle'
    });
    console.log('TPA-Anfrage gesendet!');
  }, 10000);
});

// Anti-AFK: Alle 30 Sek eine Nachricht an sich selbst (um Chat-Spam zu vermeiden)
setInterval(() => {
    client.queue('text', {
      type: 'chat', needs_translation: false, source_name: client.username,
      xuid: '', platform_chat_id: '', filtered_message: '',
      message: '/msg FelixDerBulle .' 
    });
    console.log('Anti-AFK Signal gesendet');
}, 30000);

client.on('error', (err) => console.log('Fehler:', err));
