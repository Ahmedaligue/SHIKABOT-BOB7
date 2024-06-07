//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *معلومات المجموعة* 」
▢ *♻️المعرف:* ${groupMetadata.id}
▢ *🔖الاسم* : ${groupMetadata.subject}
▢ *👥الأعضاء* : ${participants.length}
▢ *🤿مالك المجموعة:* @${owner.split('@')[0]}

▢ *🕵🏻‍♂️المشرفون:*
${listAdmin}

▢ *🪢إعدادات المجموعة:*
• ${isBanned ? '✅' : '❎'} محظور
• ${welcome ? '✅' : '❎'} الترحيب
• ${detect ? '✅' : '❎'} الكشف
• ${del ? '❎' : '✅'} منع الحذف
• ${antiLink ? '✅' : '❎'} منع روابط واتساب

*▢  📬إعدادات الرسائل:*
• الترحيب: ${sWelcome}
• وداعاً: ${sBye}
• ترقية: ${sPromote}
• تخفيض: ${sDemote}

▢ *📌الوصف* :
   • ${groupMetadata.desc?.toString() || 'غير معروف'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: tradutor.texto1[0],
      body: '© ♕𝙎𝙃𝙄𝙆𝘼🐥♕',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://whatsapp.com/channel/0029Vag9bvrLSmbRE2I5Oj2h`}}});
};

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogroup', 'groupinfo', 'infogp','جروبي'] 
handler.group = true
handler.admin = true

export default handler
