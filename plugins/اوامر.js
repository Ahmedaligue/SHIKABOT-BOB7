let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/7da34e04cce0bf91ab7a8.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([`‌‌‌‌‌‌  *╭──⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️──╮*
*⌬ اهـــلا بـكـ/ـي معــكـ/ـي*
> *『سينكو🔱 بـــوت』*
*⎊————————————⎊*
*⎔── ━ • معلــومـات البــوت 🪪* 
> *الاســم♦『SENKU BOT🌀』*
> *تـابـع لـ⚜️『SENKU DEVELOPER🔱』* 
> *المطــور 👨🏻‍💻『شيكــا🐥』『+212658594530』*
*⎊————————————⎊*
> *⌬ لطلــب اوامــر البـــوت اكتــب 『المهـ📜ـام』*
> *⌬ ضــع ( . ) قبــل كـل امـر🤝🏻*
*⎊————————————⎊*
> *⌬ ممنــوع سـب البـوت نهائيا🚫*
> *⌬ ممنــوع طلــب اشيــاء غيــر اخــلاقيـه مـن البــوت🚫*
*⎊————————————⎊*
‌         *⌬ توقيـــع الممـــلكه ✒️*
‌                     ┇✍🏻┇
‌‌         𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌       
*⎊————————————⎊*
*⎊————————————⎊*`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['menu' ,'اوامر', 'الاوامر'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
