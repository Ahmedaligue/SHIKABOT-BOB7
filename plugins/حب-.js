let handler = async (m, { conn, command, text }) => {
let love = `*✨💜 نسبه الحب 💜✨*
*نسبة الحب ${text} ليك ✨💜* *${Math.floor(Math.random() * 100)}%* *من 100%*
*اممم خليكم اصحـاب او اتجوزو المهم حلو عني انا كيميتش🦦 *
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['حب']
handler.tags = ['fun']
handler.command = /^(حب)$/i
export default handler
