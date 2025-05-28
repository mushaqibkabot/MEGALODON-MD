// Powered by DybyTech

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~fRgXgJ5b#HmlAj3VT-jktzJBvXF53T44LaOEkXJpJPsgIffzygUI",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/rful77.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MEGALODON-MD",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "G O S T A V O:(",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2519664222462",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "G O S T A V O:(",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*",
// bot description    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/rful77.jpg",
// image for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *MEGALODON-MD*⚡",
// alive msg content
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// anti bad words  
MODE: process.env.MODE || "private",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// kick user if share link 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// auto voice messages
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// auto stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "241966422462",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// anti view once 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// path to save deleted messages
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// auto recording status 
};
