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
   }else if (/^ستورم$/i.test(m.text)) { 
     responses = [ 
'*قلـــبو🦦*', 
      '*عيــوني🌚*', 
     ]; 
 }else if (/^ستورم من عمك|ستورم عمك$/i.test(m.text)) { 
     responses = [ 
'*ميسي عم الكل🐐*'
     ]; 
   }else if (/^ستورم مرتبط؟|ستورم انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*وانا لو مرتبط كنت هقعد اكلم واحد زيك🗿*',
'*يعم انا لاقي كلبه🙃💔*', 
'*بلاش احراج بقا🙂*',
'*الحــاله ناشــفه🗿💔*', 
 
     ]; 
      }else if (/^ستورم تحبني؟|بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*جوزني تسونادي وهحبك🦦*',
'*احبك ليه كنت جورحينا؟🫠*',
'*اممم يعني🐤*',
'*اموت فيك🌚♥*', 
'*حــل عنــي انت كمــان🗿*', 

   ]; 
    }else if (/^ستورم تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*حصل🦦*',
'*مش اوي*',
'*لاياحب🌚♥*',  

  ]; 
   }else if (/^هالوووو|هالو$/i.test(m.text)) { 
     responses = [ 
       '*ادخلوووو🌚♥*',  

 ]; 
  }else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*اوف اعتراف🐤🔥*',  

]; 
 }else if (/^ستورم انت منين ؟$/i.test(m.text)) { 
     responses = [ 
'🗿مصر'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*اوف اعتراف🐤🔥*'
     ]; 
     }else if (/^عامل ايه|عامل اي|اخبارك|كيفك $/i.test(m.text)) { 
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
       }else if (/^المهام|مهام|الاوامر|اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال ( . )*',  

     ];
            }else if (/^ستورم$/i.test(m.text)) { 
     responses = [ 
       '*ايواااا ياعمر ياااحلاااق🦦*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*منور✨*',  
  
     ];
    }else if (/^بوت|البوت$/i.test(m.text)) { 
     responses = [ 
'*اسمــي مـش عجبــك يعنــي🗿*', 
     '*يسطــا ليــا اسـم يسطــا🗿💔*' 
      '*لا لا انا بــوت معنــديش مشــاعر انســو اسمــي عادي💔*', 
      '*اسمــي ستــورم ياحتــه🦦*'

    ];  
        }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
'*بالتيــكت بتــاعها🦦*', 
     '*احتيـين عل احتـك🐤*', 

     ];  
    }else if (/^كسمك|ياكسمك$/i.test(m.text)) { 
     responses = [ 
'*بس ياطفــل🗿*', 
     '*احا يسطــا عيـب🥲*', 
      '*نيكت امك ياشرموط خخخخخخ يالا ياعرص هتظيط*'
  
     ];
    }else if (/^عرص|خول$/i.test(m.text)) { 
     responses = [ 
'*عيييب🗿*', 
     '*يعم عييييب💔*', 
      '*بس ياوسخ🗿*'
     ];   

   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
