let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    let videoUrl = 'https://telegra.ph/file/18db853002c9bd7be317c.mp4';
    let tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let more = String.fromCharCode(8206);
    let teks = `${pickRandom([`*╭─⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️─╮*
*⎊———————————⎊*
‌    *📜قســـم🎮الالعـاب📜*
*⎊———————————⎊*
> *『كوره』┇🎮*
> *『سيارات』┇🎮*
> *『علم』┇🎮*
> *『احزر』┇🎮*
> *『عين』┇🎮*
> *『سؤال』┇🎮*
> *『خمن』┇🎮*
> *『كت』┇🎮*
> *『ايمو』┇🎮* 
> *『تفكيك』┇🎮* 
> *『رياضه』┇🎮*
> *『اكس او』┇🎮* 
> *『صداقه』┇🎮*
> *『جنيه』┇🎮*
> *『حب』┇🎮* 
> *『زواج』┇🎮* 
> *『طلاق』┇🎮* 
> *『زوجني』┇🎮*
> *『زوجي/زوجتي』┇🎮* 
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

handler.command = ['ق4','ق4'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
