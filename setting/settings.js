const fs = require('fs')

//~~~~~~~~~~~ Settings Owner ~~~~~~~~~~~//
global.owner = "50940938083"
global.developer = "50940938083"
global.bot = ""
global.devname = "Ds Primos"
global.ownername = "PRimis"
global.botname = "Nexi Mini Bot"
global.versisc = "1"
global.packname = "Nexi Mini Bot"
//~~~~~~~~~~~ Settings Sosmed ~~~~~~~~~~~//
global.linkwa = "https://wa.me/50940938083"
global.linkyt = "https://www.youtube.com"
global.linktt = "https://tiktok.com"
global.linktele = "https://t.me/dsprimis"

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.prefix = ["","!",".",",","#","/","🎭","〽️"]
global.autoRecording = false
global.autoTyping = false
global.autorecordtype = false
global.autoread = false
global.autobio = true
global.anti92 = false
global.owneroff = false
global.autoswview = true

//~~~~~~~~~~~ Settings Thumbnail ~~~~~~~~~~~//
global.thumbbot = "https://files.catbox.moe/jskkjl.jpg"
global.thumbown = "https://files.catbox.moe/jskkjl.jpg"

//~~~~~~~~~~~ Settings Channel ~~~~~~~~~~~//
global.idchannel = "120363419474272514@newsletter*"
global.channelname = "NEXI MINI BOT"
global.channel = "hatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44"

//~~~~~~~~~~~ Settings Message ~~~~~~~~~~~//
global.mess = {
  developer: " `[ *Developer Only!!* ]` \n This feature is for developers only!!",
  owner: " `[ *Owner Only!!* ]` \n This feature is for owners only!!",
  group: " `[ *Group Only!!* ]` \n This feature is for group chats only!!",
  private: " `[ *Private Only!*! ]` \n This feature is for private chats only!!",
  admin: " `[ *Admin Only!!* ]` \n This feature is for admins only!!",
  botadmin: " `[ *Bot Admin Only!!* ]` \n This feature is for bot admins only!!",
  wait: " `[ *Wait!!* ]` \n Please wait, loading...",
  error: " `[ *Error!!* ]` \n An error occurred!!",
  done: " `[ *Done!!* ]` \n Process completed!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
