import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 اهـلا يا , ${conn.getName(m.sender)}!
│يـاريت تخلـي عنـدك دم ومتصـدهنيـش عايـز شويـة هـدوء 
|اكتـب (.اوامر) للاستخـدام🗿
╰────────────────────
*─[𓆩⚜️𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌⚜️𓆪]*
`.trim()
  m.reply(caption)
}
handler.help = ['تست']
handler.tags = ['infobot']
handler.command = /^(حي)$/i


export default handler
