/*
$('#login').click(function(){
    $.ajax({ 'url':'login', 
        'data':{"username":$('#user').val(),"password":$('#password').val(),}, 
        'success':function(data){
            switch(data.type){ 
                case 0:alert('用户名或密码错误！');break; 
                case 1:
                       alert('登录成功！');
                       window.close();
                       break;
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
});
*/

$('#login').click(function(){
    alert('登录成功！');
    
    //window.close();
    //window.location.href='help.html';
});
