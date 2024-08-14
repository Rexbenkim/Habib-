//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "254739937062,254710772666";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElOOXQwakhPbXNDL0VhVXVIdWtwQVk0eVdvbGpJSDZBKy9YSlFiQUUyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjkzK1dCRDd1LzJ2cjV2S0ZaSkJXeWNVT1pJR25UMGFRc0I2Wm05QkxUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q3R5ZmUzdGUrUG9LL0V4NlBpbG81RFlmYUNWcDVwK1prT3crQWJPYlZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiVmt5T0drTk1RNm10WDNqcmZXN3RCQjg4UWRxTEo0Qm1FaVUzNlA4R1FzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHaGVQZk41WnZUQkpDSGFCUHNZL1F1cjJVbjF4K0ltTUl4bjB5eC95MGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLcGswSDVBTEllVWRiYVlHRXM1a3BOSUZ3Ykc5RFFCZmtjYmMrRjBVREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVGQTZDbDdzZEorOVdPWkNmbEdNRUxLUjczM1JacGwrVE5DN0FoakFIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9FY2RMbjY4RjB3ai9ZdkpsbWxhVFV4Q2FRNkZ3RUdPNWJJTzVIN3ZCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVWNUdVbHkzUDFnZUZtUG0zamlSK2xOUkt1clppZmxLalpuNXpCaE9BOFJCNWEwMzc5N1NKbkUrSUlUODhKVUFTcUMveHBiTGpPdWE4M1J1eldWd2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJlOWgwT2dxTFpzS2FpYjZUZzlYS1BOaXdaTExCdzlXOTlVUUVCY0VBTThBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXNjZPRk9ERFJyS0Fod3VDYnVuSzJ3IiwicGhvbmVJZCI6Ijk1M2Q4YWExLTNjZjctNGNjYS05ZTEyLWZlMjI3YzA2NWU2MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkOWZNc2M4NmZ0QkdXdjdsQUlqbHJramVDaE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWStBWWExakxwalpySUFESlM1V2M0TS9UOGY0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlcxVFE2Q1FOIiwibWUiOnsiaWQiOiIyNTQ3NjI4MDQ5MjI6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1hyeS9VSEVPaUY4clVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVA0MGlyNHI2UDNIbFh1a3FOMDZjb1RPc3M2VXZSL2UwV1VwVHlNb3VGOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZUY4bkRWb0RPdXBTS1FtWDdpNDQzMDRndzY1Z08zalJPYm1hLzZIVnk1WnhjaEkwNXN1cytMMHhYK0Y4VGpTMVk5bERKUWxialFrSDZPRHR2bDg0Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlBkVXpYdUFweFdwdFl6ZVlid2Mzamk0aEk2UlNKSEg0VnI0bWFCWkY0bHpMT0UyV2tnVTVnekVEeTRPMmRsVkIrTVBKNGVJeWRjNFlxOVJtZ1YycGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzYyODA0OTIyOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWorTklxK0srajl4NVY3cEtqZE9uS0V6ckxPbEwwZjN0RmxLVThqS0xoZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzYzMDMzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLSHIifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


