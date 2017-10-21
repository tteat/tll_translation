$('#modify').click(function(){

    if($('#newpwd1').val() == $('#newpwd2').val())
    {
        chrome.cookies.get({
            url:'http://localhost:8080/ustbTrans',
            name:'username'
        },function(cookie){
            cookie = cookie.value;
        });

        $.ajax({ 'url':'change_PWD', 
            'data':{"username":cookie,"password":$('#newpwd1').val(),"oldpassword":$('#oldpwd').val()}, 
            'success':function(data){
                switch(data.type){ 
                    case 0:alert('修改失败！');break; 
                    case 1:
                           alert('修改成功！');
                           window。close();
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
    }
    else
    {
        alert("两次密码设置不同！");
    }
});