let handler = async (m, { conn }) => {
await conn.sendMessage(m.chat, { react: { text: '🦦', key: m.key } })
m.reply(`*المطـور ♕SENKU DEVLOPER 🐥♕:*\n
*『 https://www.instagram.com/irin_yeger1?igsh=OGQ5ZDc2ODk2ZA==... 』*
*اعمــل فولـو ياحـب رونالـدو بينـافسني في عدد الفلـورز🦦* `)
}
handler.help = ['انستا-المطور']
handler.tags = ['infobot']
handler.command = /^(انستا-المطور)$/i

export default handler;
