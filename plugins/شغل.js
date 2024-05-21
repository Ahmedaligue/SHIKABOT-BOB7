
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*${usedPrefix}${command} صااارت خمسـه صاارت خمسـه لبرشلـووونه🐥*`;

await conn.sendMessage(m.chat, { react: { text: '🎧', key: m.key } })  
  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) throw 'Video Not Found, Try Another Title';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = 'Downloading audio please wait';

  let captvid = `‌‌*╭──* ⚜️𝐖.𝐒.𝐙🔱𝐁𝐎𝐓⚜️ *──╮*
*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*
> ⚜️𝐖.𝐒.𝐙🎧𝐒𝐎𝐍𝐆⚜️
*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*
 *┇🪪┇ الاســم: 『 ${title} 』*
*——————————————*
*┇⏱️┇ الـمــد:『 ${timestamp} 』*
*——————————————*
*┇👁┇ الـمـشاهدات:  『 ${views} 』*
*——————————————*
*┇⏯️┇ مـنـذ:『  ${ago} 』*
*——————————————*
*┇🔗┇ الـــرابــط:『 ${url} 』*
*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*
> ‌       𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪`;

  conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author }, { quoted: m });


  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: wm,
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^شغل$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;
