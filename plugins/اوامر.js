let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/18db853002c9bd7be317c.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([`‌ *╭─⚜️𝐒𝐓𝐎𝐑𝐌🔱𝐁𝐎𝐓⚜️──╮*
*⌬ اهـــلا بـكـ/ـي معــكـ/ـي*
> 『ستــورم🔱 بـــوت』
*⎊————————————⎊*
*⎔── ━ • معلــومـات البــوت 🪪*
> الاســم♦『ستــورم 🌀』
> تــابــع لـ ⚜️『مملكــة ستــورم🔱』
> المطــور 👨🏻‍💻『شيكــا🐥』『+201005603546』
*⎊————————————⎊*
> ⌬ لطلــب اوامــر البـــوت اكتــب 『المهـ📜ـام』
*⎊————————————⎊*
> ⌬ ممنــوع ســب البـــوت نهــائيــا🚫
> ⌬ ممنــوع طلــب اشيــاء غيــر اخــلاقيـه مـن البــوت🚫
*⎊————————————⎊*
          *⌬ توقيـــع الممـــلكه ✒️*
‌                     ┇✍🏻┇
‌              𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌       
*⎊————————————⎊*
*⎊————————————⎊*`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['menu', 'help', 'h', 'اوامر', 'مهام', 'الاوامر', 'المهام'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
