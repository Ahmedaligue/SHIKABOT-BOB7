let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/9c0cc8983a7d605d664f3.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([` *‌‌╮───⚜️المــ📜ـهــام⚜️──╭*
*⎊————————————⎊*
‌         ⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️
*⎊————————————⎊*
> *⎔── ━ •قسـم الاعضــاء『ق1』🧑‍🧑‍🧒‍🧒*
> *⎔── ━ •قسـم الجـروب『ق2』🔮*
> *⎔── ━ •قـســـم الـــــAI『ق3』🖲️*
> *⎔── ━ • قسـم الالعـاب『ق4』🎮*
> *⎔── ━ • قسـم التـرفيـه『ق5』🕹*
> *⎔── ━ •قسـم التحميل『ق6』📥*
> *⎔── ━ •قسـم الملصقـات『ق7』🃏*
> *⎔── ━ •  قسـم الانمــي『ق8』🎌*
> *⎔── ━ •قســم  الديـــن『ق9』🕌*
> *⎔── ━ •قسـم البنـك『ق10』🏦*
*⎊————————————⎊*
*⎊————————————⎊*

*⎔─ ━ • توقيـــع الممـــلكه ✒️*
*⎔─* ━ • 𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌 `])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['مهام','المهام'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
                   }