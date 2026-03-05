const bedrock = require("bedrock-protocol");

const client = bedrock.createClient({
  host: "SERVERIP",   // hier kommt später die Server-IP rein
  port: 19132,        // Standard Bedrock-Port
  username: "AFKBot"  // Name vom Bot
});

client.on("join", () => {
  console.log("Bot ist auf dem Server!");
});
