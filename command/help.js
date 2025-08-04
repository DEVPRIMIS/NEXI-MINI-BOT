const settings = require('../settings');
const fs = require('fs');
const path = require('path');
const os = require('os');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function helpCommand(sock, chatId, message) {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: '_NEXI ..._' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);
    const helpMessage = `
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ɴᴇxɪ ᴍɪɴɪ ʙᴏᴛ )
┃│ ➣ ᴏᴡɴᴇʀ: ${settings.botOwner}
┃│ ➣ ᴜᴘᴛɪᴍᴇ: ${uptimeFormatted}
┃│ ➣ ᴛɪᴍᴇ: ${new Date().toLocaleString()}
┃│ ➣ sᴘᴇᴇᴅ: ${ping} ms
┃│ ➣ ᴠᴇʀsɪᴏɴ: ${settings.version}
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴍᴀɪɴ ᴍᴇɴᴜ )
┃│ ➣ ᴍᴇɴᴜ
┃│ ➣ ᴘɪɴɢ
┃│ ➣ ᴀʟɪᴠᴇ
┃│ ➣ ᴏᴡɴᴇʀ
┃│ ➣ ʀᴜɴᴛɪᴍᴇ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴏᴡɴᴇʀ ᴍᴇɴᴜ )
┃│ ➣ ᴘᴜʙʟɪᴄ
┃│ ➣ ᴘʀɪᴠᴀᴛᴇ
┃│ ➣ ᴀᴜᴛᴏsᴛᴀᴛᴜs
┃│ ➣ ᴀᴜᴛᴏʀᴇᴀᴅ
┃│ ➣ ᴄʟᴇᴀʀsᴇssɪᴏɴ
┃│ ➣ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
┃│ ➣ ᴄʟᴇᴀʀᴛᴍᴘ
┃│ ➣ ᴀᴜᴛᴏʀᴇᴀᴄᴛ
┃│ ➣ ɢᴇᴛᴘᴘ
┃│ ➣ sᴇᴛᴘᴘ
┃│ ➣ ᴀᴜᴛᴏʙɪᴏ
┃│ ➣ ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┃│ ➣ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ )
┃│ ➣ ᴘʟᴀʏ
┃│ ➣ sᴏɴɢ
┃│ ➣ ɪɴsᴛᴀɢʀᴀᴍ
┃│ ➣ ғᴀᴄᴇʙᴏᴏᴋ
┃│ ➣ ᴛɪᴋᴛᴏᴋ
┃│ ➣ ᴠɪᴅᴇᴏ
┃│ ➣ ʏᴛᴍᴘ4
┃│ ➣ ᴛʀᴛ
┃│ ➣ ᴛᴛs
┃│ ➣ ʟʏʀɪᴄs
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ )
┃│ ➣ ᴠᴠ
┃│ ➣ ss
┃│ ➣ ʙʟᴜʀ
┃│ ➣ sɪᴍᴀɢᴇ
┃│ ➣ sᴛɪᴄᴋᴇʀ
┃│ ➣ ᴛɢsᴛɪᴄᴋᴇʀ
┃│ ➣ ᴍᴇᴍᴇ
┃│ ➣ ᴛᴀᴋᴇ
┃│ ➣ ᴇᴍᴏᴊɪᴍɪx
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴀɪ ᴍᴇɴᴜ )
┃│ ➣ ɢᴘᴛ
┃│ ➣ ɢᴘᴛɢᴏ
┃│ ➣ ɢᴇᴍɪɴɪ
┃│ ➣ ɪᴍᴀɢɪɴᴇ
┃│ ➣ ғʟᴜx
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ɢɪᴛʜᴜʙ ᴍᴇɴᴜ )
┃│ ➣ ɢɪᴛ
┃│ ➣ ɢɪᴛʜᴜʙ
┃│ ➣ sᴄ
┃│ ➣ ʀᴇᴘᴏ
┃│ ➣ ɢɪᴛᴄʟᴏɴᴇ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ɢᴀᴍᴇ ᴍᴇɴᴜ )
┃│ ➣ ᴛɪᴄᴛᴀᴛᴏᴇ
┃│ ➣ ʜᴀɴɢᴍᴀɴ
┃│ ➣ ɢᴜᴇss
┃│ ➣ ᴛʀɪᴠɪᴀ
┃│ ➣ ᴀɴsᴡᴇʀ
┃│ ➣ ᴛʀᴜᴛʜ
┃│ ➣ ᴅᴀʀᴇ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴏᴛʜᴇʀ ᴍᴇɴᴜ )
┃│ ➣ ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
┃│ ➣ ɪɴsᴜʟᴛ
┃│ ➣ ғʟɪʀᴛ
┃│ ➣ sʜᴀʏᴀʀɪ
┃│ ➣ ɢᴏᴏᴅɴɪɢʜᴛ
┃│ ➣ ʀᴏsᴇᴅᴀʏ
┃│ ➣ ᴄʜᴀʀᴀᴄᴛᴇʀ
┃│ ➣ ᴡᴀsᴛᴇᴅ
┃│ ➣ sʜɪᴘ
┃│ ➣ sɪᴍᴘ
┃│ ➣ sᴛᴜᴘɪᴅ
┃│ ➣ ᴊᴏᴋᴇ
┃│ ➣ ғᴀᴄᴛ
┃│ ➣ ᴡᴇᴀᴛʜᴇʀ
┃│ ➣ ɴᴇᴡs
┃│ ➣ 8ʙᴀʟʟ
┃│ ➣ ᴊɪᴅ
┃│ ➣ ᴀᴛᴛᴘ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ᴏᴛʜᴇʀ ᴍᴇɴᴜ )
┃│ ➣ ᴍᴇᴛᴀʟʟɪᴄ
┃│ ➣ ɪᴄᴇ
┃│ ➣ sɴᴏᴡ
┃│ ➣ ɪᴍᴘʀᴇssɪᴠᴇ
┃│ ➣ ᴍᴀᴛʀɪx
┃│ ➣ ʟɪɢʜᴛ
┃│ ➣ ɴᴇᴏɴ
┃│ ➣ ᴅᴇᴠɪʟ
┃│ ➣ ᴘᴜʀᴘʟᴇ
┃│ ➣ ᴛʜᴜɴᴅᴇʀ
┃│ ➣ ʟᴇᴀᴠᴇs
┃│ ➣ 1917
┃│ ➣ ᴀʀᴇɴᴀ
┃│ ➣ ʜᴀᴄᴋᴇʀ
┃│ ➣ sᴀɴᴅ
┃│ ➣ ʙʟᴀᴄᴋᴘɪɴᴋ
┃│ ➣ ɢʟɪᴛᴄʜ
┃│ ➣ ғɪʀᴇ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───
┏━━━━━━━━━━━━━━❐
┃╭────•
┃│──────( ɢʀᴏᴜᴘ ᴍᴇɴᴜ )
┃│ ➣ ʙᴀɴ
┃│ ➣ ᴜɴʙᴀɴ
┃│ ➣ ᴘʀᴏᴍᴏᴛᴇ
┃│ ➣ ᴅᴇᴍᴏᴛᴇ
┃│ ➣ ᴍᴜᴛᴇ
┃│ ➣ ᴜɴᴍᴜᴛᴇ
┃│ ➣ ɢʀᴏᴜᴘɪɴғᴏ
┃│ ➣ ᴀᴅᴍɪɴs
┃│ ➣ ᴅᴇʟᴇᴛᴇ
┃│ ➣ ᴋɪᴄᴋ
┃│ ➣ ᴡᴀʀɴɪɴɢ
┃│ ➣ ᴡᴀʀɴ
┃│ ➣ ᴀɴᴛɪʟɪɴᴋ
┃│ ➣ ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
┃│ ➣ ᴄʟᴇᴀʀ
┃│ ➣ ᴛᴀɢ
┃│ ➣ ᴛᴀɢᴀʟʟ
┃│ ➣ ᴄʜᴀᴛʙᴏᴛ
┃│ ➣ ʀᴇsᴇᴛʟɪɴᴋ
┃│ ➣ ᴡᴇʟᴄᴏᴍᴇ
┃│ ➣ ɢᴏᴏᴅʙʏᴇ
┃╰────•
┗━━━━━━━━━━━━━━❐
─── *2024-2025* ───

> © *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*`;
    try {
        const imagePath = path.join(__dirname, '../assets/nexi.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: '',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: 'Nexi',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
