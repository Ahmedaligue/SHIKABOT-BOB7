let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.math = conn.math ? conn.math : {}
    
    if (args.length < 1) throw `
  🧮 الصعوبات المتاحة : 
  
${Object.keys(modes).join(' | ')} 

_📌مثال : ${usedPrefix+command} عادي_
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
  🧮 الصعوبات المتاحة : 
  
 ${Object.keys(modes).join(' | ')}

_📌مثال : ${usedPrefix+command} عادي_
`.trim()
    
  let id = m.chat
    if (id in conn.math) return conn.reply(m.chat, '*في سؤال لسـه مجـاوبتش عليـه يافاشل🦦*', conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `احسب${math.str}*=\n\n_الوقت:_ ${(math.time / 1000).toFixed(2)} ثواني\n\n🪙 جائزة : ${math.bonus} XP`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.reply(m.chat, `⏳ وقتك خلص!\nالإجابة هي : *${math.result}*`, conn.math[id][0])
      delete conn.math[id]
        }, math.time)
    ]
}
handler.help = ['Maths <modes>']
handler.tags = ['game']
handler.command = ['maths', 'math', 'matemáticas', 'ganit','رياضيات','الرياضيات'] 
