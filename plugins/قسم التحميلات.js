let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/37250e4f38ccb777ac2fa.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([`*╭─⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️─╮*
*⎊———————————⎊*
‌    *📜قســـم📥التحميـل📜*
*⎊———————————⎊*
> *『يوتيوب』┇📥*
> *『ايديت』┇📥*
> *『تطبيق』┇📥*
> *『اغنيه』┇📥*
> *『شغل』┇📥*
> *『صوره』┇📥*
> *『صوره2』┇📥*
> *『فيد-فيس』┇📥*
> *『طقيم』┇📥* 
> *『طقم-اولاد』┇📥* 
> *『طقم-بنات』┇📥* 
> *『ميسي』┇📥*
> *『رونالدو』┇📥* 
*⎊———————————⎊*
*⎊———————————⎊*
*⎔ • توقيـــع الممـــلكه ✒️*
*⎔* • 𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['ق6','ق6'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
