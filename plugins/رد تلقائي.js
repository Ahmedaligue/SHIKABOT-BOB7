let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا وغلا نورت ياحب🦦*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^شيكامارو|شيكاا$/i.test(m.text)) { 
     responses = [ 
'*حل عن مطوري مش ناقصاك🐤*'
     ]; 
 }else if (/^شيكا من عمك|شيكا عمك$/i.test(m.text)) { 
     responses = [ 
'*ميسي عم الكل🐐*'
     ]; 
   }else if (/^شيكا هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*وانا لو مرتبط كنت هقعد اكلم واحد زيك🗿*',
'*يعم انا لاقي كلبه🙃💔*', 
'*بلاش احراج بقا🙂*',   
   ]; 
   }else if (/^شيكا تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*جوزني تسونادي وهحبك🦦*',
'*احبك ليه كنت جورحينا؟🫠*',
'*اممم يعني🐤*',
'*اموت فيك🌚♥*', 
]; 
   }else if (/^شيكا تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*حصل🦦*',
'*مش اوي*',
'*لاياحب🌚♥*',   ]; 
     
     }else if (/^هالوووو|هالو$/i.test(m.text)) { 
     responses = [ 
       '*ادخلوووو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*اوف اعتراف🐤🔥*',  

     ]; 
   }else if (/^شيكا انت منين ؟$/i.test(m.text)) { 
     responses = [ 
'🗿مصر'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*اوف اعتراف🐤🔥*'
     ]; 
     }else if (/^عامل ايه|عامل اي|كيفك $/i.test(m.text)) { 
     responses = [ 
       'الحمدالله وانت؟',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اموت فيك', 
       '*لا انجلع🦦*', 

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام🐤',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*لمين القلوب دي ياواد ها😉ها😉*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*وسهلا🤝🏻*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       '*مساء النور*',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الخير🦦♥*', 
       '*صبح صبح🦦*', 
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^SHIKA$/i.test(m.text)) { 
     responses = [ 
       '*ايواااا ياعمر ياااحلاااق🦦*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*منور✨*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
