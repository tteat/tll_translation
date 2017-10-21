

function logout(cookie){
$.ajax({ 
                'url':'http://localhost:8080/ustbTrans/logout', 
                'data':{"username":cookie}, 
                'success':function(data){
                    switch(data.type){ 
                        case 0: break; 
                        case 1: a.innerText == "登录";
                                b.style.display = "none";
                                break;
                            
                }}, 
                'error':function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(textStatus);
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(XMLHttpRequest.responseText);},
                    'type':'post',
                    'dataType':'json', 
                });
}

function callwordbook(cookie){
$.ajax({ 
                'url':'http://localhost:8080/ustbTrans/wordbook', 
                'data':{"username":cookie}, 
                'success':function(data){
                    switch(data.type){ 
                        case 0: return 0 ;break; 
                        case 1: return 1; break;
                        }
                }, 
                'error':function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(textStatus);
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(XMLHttpRequest.responseText);},
                    'type':'get',
                    'dataType':'json', 
                });
}

function delwordbook(cookie,word){
$.ajax({ 
                'url':'del_wordbook', 
                'data':{"username":cookie,"word":word}, 
                'success':function(data){
                    switch(data.type){ 
                        case 0:break; 
                        case 1:break;
                    }
                }, 
                'error':function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(textStatus);
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(XMLHttpRequest.responseText);},
                    'type':'get',
                    'dataType':'json', 
                });
}


function callapi(word){
    var trans;
    $.ajax({ 
        'url':'http://fanyi.youdao.com/openapi.do', 
        'data':{"keyfrom":"fadabvaa","key":522071532,"type":"data","doctype":"json","version":"1.1","q":word}, 
        'success':function(data){
 
             if(data == null)
             {
                trans = "查询失败！";
             }
             else
             {
                var content = data.basic.explains;
                for(j = 0;j<content.length;j++)
                {
                    trans = trans + content[j];
                }
            }

                
        }, 
        'error':function (XMLHttpRequest, textStatus, errorThrown) {
         alert(textStatus);
         alert(XMLHttpRequest.status);
         alert(XMLHttpRequest.readyState);
         alert(XMLHttpRequest.responseText);},
         'type':'post',
         'dataType':'json', 
     });
    return trans;
    
}