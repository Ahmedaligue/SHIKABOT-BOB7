let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/SHIKA7777/2b87f74d475f66c38c345a4c8d4b6cfe/raw/5b4950608ba8a5fe65d3c95ab582a40614af8c22/gistfile1.txt.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*· • • ━━ ⌝⚜️⌞ ━━ • • ·*
*${command.toUpperCase()}*
*☬↫╎السـؤال ✍🏻⇜『من النادي ال بالصورة』*
  *☬↫╎الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ┇*
  *استخدم .انسحب للأنسحاب*
  *☬↫╎الـجـائزة💰↞ ${poin} نقاط┇*
∞┇━━━ •⚜️• ━━━┇∞
*✠ ~تــ✍︎ــوقــيــع ↯:~*
𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ *${json.name}* ┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['نادي']
handler.tags = ['fun']
handler.command = /^نادي/i

export default handler 