//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://alex:#2289853736t@cluster0.2lbxwwy.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/dambulla";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://wa.me/message/ZKO3VHTPUFMGJ1";
global.website = process.env.GURL || "https://wa.me/message/ZKO3VHTPUFMGJ1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0806cb239fc9cab308327.png";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225";
global.owner = process.env.OWNER_NUMBER || "94723279957,94764152622";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d82228a82b1d443d3060c.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dpbU1GdHpsVHpwc1JBWFhjeGdLTTY2YjdkdU0zMno1SU92a3dodW5Vaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMy9zalVjZUxLOUwrREpQS3ZKaWt1akdFSld0MGRrSmN6T2lJckdNZU5qOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSHR4bDM0NWRCdG8vV0RnU1lGQ0p1WW8vdlF1Zy93LzBBblNSN3FIcmt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYlVZZGE0S3FYa0MvQUc0U2pseU8vNDA0SVIzTnBKMDdibXh3MExLd1VjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQSWV6MENCcGFVMU1pTkpaZ2Z5VC96VGlJclhpT3l2aDdwZ1pNaDMwMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU2ZVZPbFRobS80UUpvTVVEQ1U5QW9uTWFRTFRzWVlmUWxmWHFYTDd5QVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0p0SCtSZ01Ubk9reW8rTlQvbVpTOXgzRDNOMkVmeUk1NzVTdTlUQVlVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjYreG13Q095MkdwMW1UZHNLc0ZwVWVKNVcreWdiT0FFVjcrdTlqQUpSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks0MTVhTUhhS3lLSGp6SHRQM0lGRVdyTXJNWXd3Q1A1emJjdTVqd1FSSTA2UWNBakNZdzFqTGJLMVUxMlg4Q2dWRXpqSDlJcEtiOWZBRzJJdGpQNkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6IkZPbHp6RVVBZzR0bC9SNWR2S3BOdENOUWNkQ28wNzU4ZEJCRXVWakx4RHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MjMyNzk5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTY0MjA3NjQ4NEMxQjk4OUJBNENFRjhENTVEMDc5MjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODE3MzQ5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibDVVampUaXlSMlM1VE1Ycng3NVBxQSIsInBob25lSWQiOiI0ZjNiODI0NS0wNjc0LTQ3ZGMtYTU1ZC0yYTcyZTdhZTljOWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGlYTWtPQUd3T09aVk5ReUNHYkc5cW1icG5NPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVScWszOVZNUGR4QTh0TzlmbkVyNDVzWEc4cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4Sk40TllWNCIsIm1lIjp7ImlkIjoiOTQ3MjMyNzk5NTc6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIvPlxuXG7iiJFcblxuyoBcblxu4bSAXG5cblxuXG7htI9cblxu8J2Wi1xuXG5cblxu8J2asiDwnZqqIPCdmrUg8J2aviJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3JrcnFBRkVLbitwTE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidnNVVVRVTmk1Wm5oRzh2czJvaHhwdTNSN2V6KytXQlFoaVdQNUYzSVpUZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK083OWFUQXByU2pEeWF3MXJsTStBbUlidHpBeWFna3FOWk44ZlBaVUNEMFJBQzRVR3Iyc0xVVVF6NzhnaGtCV25Cc3E0N2EvNjZjZVRKdndiME5CQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InhrRFhkcHBNSGFyYWU4cDVFTEljV2VxNEZaYTRRcWpiN3MxOG9oRkN3d3cyQkNaai9Mc2h0QUkxQlRFb1dEcHZaL0VqQml2WVYzRzRVSS9NTXI1SkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMyNzk5NTc6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiN0ZGRTFEWXVXWjRSdkw3TnFJY2FidDBlM3MvdmxnVUlZbGorUmR5R1U0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MTczNDk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNmUiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "9.9.9",
  caption: process.env.CAPTION || "ΔLΣX MD",
  author: process.env.PACK_AUTHER || "ΔLΣX ID",
  packname: process.env.PACK_NAME || "ꪶ𝕬ꫂ",
  botname: process.env.BOT_NAME || "ΔLΣX MD",
  ownername: process.env.OWNER_NAME || "𝐀𝐋𝐄𝐗,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
