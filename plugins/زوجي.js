let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`▣──────────────────
> ‌ ‌‌       *『زوجك♥زوجتك』*
*بـــارك اللــه لكمــا وبــارك عليكـمــا وجمــع بينكمـــا فـي خيــر🙄♥*
*▣──────────────────*
*▣─⎊ زوجــك مـز/زوجتــك مـزه🦦 ${toM(a)}*
*▣──────────────────*
> 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪
*▣──────────────────*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['زوجي|زوجتي']
handler.group = true
export default handler
