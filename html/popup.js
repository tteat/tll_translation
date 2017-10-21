window.onload = function() {
	
	var a = document.getElementById('login');
	var cookie = null;

	
	//登录成功后改变popup的内容
	//var bgPage = chrome.extension.getBackgroundPage();
	//cookie = bgPage.call()；
	/*
	if(cookie&&a.innerText =="登录")
	{
		a.innerText = "修改密码";
		var logout = document.createElement("div");
		var reforeNode = document.getElementById("wordbook");
		logout.id = "logout";
		logout.innertext = "登出";
		document.body.insertBefore(logout,reforeNode.nextSibling);
	}

*/
	a.onclick = function() {
	
		
		if(a.innerText == "登录")
		{

			window.open("http://localhost:8080/ustbTrans/translation/html/login.html"); 
	  
		}
		else
		{
			window.open("http://localhost:8080/ustbTrans/translation/html/modify.html");
		} 
	};
/*
	var b = document.getElementById('logout');
	
	b.onclick = function(){
		var flag = bgPage.logout(cookie);
		if(flag == 1)
		{
			a.innerText == "登录";
            b.style.display = "none";
		}
	}
	
*/
	function addRow(word,trans) {  
       var tableObj = document.getElementById('tb_wordbook');  
       var rowNums = tableObj.rows.length;  
       var rowObj = tableObj.insertRow(rowNums);   
         
       var cellObj0 = rowObj.insertCell(0);  
       cellObj0.innerHTML = rowNums - 1;  
         
       var cellObj1 = rowObj.insertCell(1);   
       cellObj1.innerHTML = word;  
       
       var cellObj2 = rowObj.insertCell(2);    
       cellObj0.innerHTML = trans;  

       var cellObj3 = rowObj.insertCell(3);  
       cellObj3.innerHTML = '<a>delete</a>'; 
       cellObj3.firstChild.href = "javascript:;";
       cellObj3.className = "del_row";
    
   }  
        
	
	jQuery(document).ready(function($){
		//打开窗口
		$('#wordbook').on('click', function(event){


			if(1)										//这里要改成if(cookie)
			{
				/*var flag1 = bgPage.callwordbook(cookie);
				if(flag1 ==0)
				{
					$('#tb_wordbook').innerText = "查询单词本失败";
				}
				else
				{
					var tableObj = document.getElementById('tb_wordbook');
                            var childs = f.childNodes;
                            if(childs.length > 1)
                            {
                                for(var i = childs.length - 1; i > 0; i--) 
                                { 
                     
                                     f.removeChild(childs[i]); 
                                 }
                             }
                            var Wordlist = data.wordlist;
                            for(var i = 0;i < Wordlist.length;i++)
                            {
                                Word = Wordlist[i];
                                Trans = bgPage.callapi(Wordlist[i]);
                                addRow(Word,Trans);
                            }
				}
*/
				event.preventDefault();
				document.body.style.height = 500+'px';
				document.body.style.width = 650+'px';
				$('.cd-popup3').addClass('is-visible3');

			}
			else
			{
				window.open("http://localhost:8080/ustbTrans/translation/html/login.html"); 
			}
		});
        //关闭窗口
        $('.cd-popup3').on('click', function(event){
        	if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup3') ) {
        		event.preventDefault();
        		$(this).removeClass('is-visible3');
        	}
        });
        //ESC关闭
        $(document).keyup(function(event){
        	if(event.which=='27'){
        		$('.cd-popup3').removeClass('is-visible3');
        	}
        });
    });

//删除单词
 var tableObj = document.getElementById('tb_wordbook'); 
       var aa = document.getElementsByClassName("del_row");
       if(aa)
       {
			for (var i = 0; i <aa.length; i++) {
				aa[i].onclick = function(){
				var rowIndex = this.parentNode.parentNode.rowIndex;//获得行下标
				var vocabu = this.parentNode.parentNode.cells[1].innerText;
		        tableObj.deleteRow(rowIndex);//删除当前行

		        //告诉数据库删除了单词
		        bgPage.delwordbook(cookie,vocabu);
		       }
			} 
       
  		}  
}

