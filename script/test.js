
window.onload =function(){
	
	var oDiv = document.createElement("div");
	oDiv.id = "tra_show";
	var oDiv1 = document.createElement("div");
	oDiv1.id = "tra_header";
	var oDiv2 = document.createElement("div");
	oDiv2.id = "tra_box";
	var oDiv3 = document.createElement("div");
	oDiv3.id = "tra_footer";
	oDiv.appendChild(oDiv1);
	oDiv.appendChild(oDiv2);
	oDiv.appendChild(oDiv3);
	var oDiv_word = document.createElement("div");
	oDiv_word.id = "head_word";
	var oDiv_last = document.createElement("div");
	oDiv_last.id = "head_last";
	oDiv_last.innerText = "last choice：";
	var last_choose = document.createElement("span");
	last_choose.id = "lastChoice";
//last_choose.innerText = "高兴";
var oDiv_API = document.createElement("div");
oDiv_API.id = "head_API";

for(k = 0;k<3;k++)
{
	var oDiv7 = document.createElement("div");
	oDiv7.className = "perAPI";
	var nominal = document.createElement("span");
	nominal.className = "nominal";
	oDiv_API.appendChild(oDiv7);
	oDiv7.appendChild(nominal);
	for(j = 0;j<2;j++)
	{
		var readyselect = document.createElement("span");
		readyselect.className = "span_API";
		readyselect.onclick=function(){
			console.log(this);
		}
		oDiv7.appendChild(readyselect);
	}
}
var oWord = document.createElement("span");
oWord.id = "trans_word";
//oWord.innerText = "happy";
var oWordBook = document.createElement("a");
oWordBook.innerText = "+wordbook";
oWordBook.id = "wordbook";
oWordBook.href="javascript:void(0)";
oDiv1.appendChild(oDiv_word);
oDiv1.appendChild(oDiv_last);
oDiv1.appendChild(oDiv_API);

oDiv_word.appendChild(oWord);
oDiv_word.appendChild(oWordBook);
oDiv_last.appendChild(last_choose);
var oDivNotice = document.createElement("div");
oDiv2.appendChild(oDivNotice);
oDivNotice.className = "tra_notice";
oDivNotice.innerText = "网友提供的翻译";
for(i = 0;i < 3;i++)
{
	var oDivCus = document.createElement("div");
	oDivCus.className = "per_cus";
	oDiv2.appendChild(oDivCus);
	var boxSpan = document.createElement("span");
	boxSpan.className = "span_style";
		//随便填的自定义翻译
		//boxSpan1.innerText = "开心";
		oDivCus.appendChild(boxSpan);
		var scoreSpan = document.createElement("span");
		scoreSpan.className = "score";
		oDivCus.appendChild(scoreSpan);
		var star = document.createElement("div");
		star.className = "xzw_starBox";
		var ul = document.createElement("ul");
		ul.className = "star";
		oDivCus.appendChild(star);
		star.appendChild(ul);
		for(k = 1;k < 6;k++)
		{
			var starLi = document.createElement("li");
			ul.appendChild(starLi);
			var star_a = document.createElement("a");
			star_a.className = "star"+ k;
			starLi.appendChild(star_a);
			star_a.href="javascript:void(0)"
		}
		
	}
	var cus_content = document.createElement("input");
	cus_content.id = "cus_content";
	cus_content.type = "text";
	oDiv2.appendChild(cus_content);
	var change_button = document.createElement("input");
	change_button.id = "change_trans";
	change_button.type = "submit";
	change_button.value = "下一页";
	oDiv2.appendChild(change_button);
	var cus_button = document.createElement("input");
	cus_button.id = "cus_trans";
	cus_button.type = "submit";
	cus_button.value = "自定义翻译";
	oDiv2.appendChild(cus_button);
	oDiv.style.display = "none";
	document.body.appendChild(oDiv);


/*API调用的翻译释义个数不确定，所以要根据个数来生成span个数，最多显示三个？
*/


var txt;
var a = 0;
var count = 1;
	var cus_no = 0; //记录有多少个自定义释义显示的页数（除以3向上取整）
	var tb1 = [];
	var tb2 = [];
	var cusTrans = [];
	var scoreTrans = [];
	var select = 0;
	var selectt;
	var offsetXX;
	var select_content = 0;
	var offsetX = 0;
	var offsetY = 0;

	function getChildrenIndex(ele){  

		var i=0;  
		while(ele = ele.previousElementSibling){  
			i++;  
		}  
		return i;  
	}  


	document.onmouseup = function(ev){
		if(document.selection){
			txt = document.selection.createRange().text;

		}else{
			txt = window.getSelection()+'';

		}
		if(txt){

			var direct = (document.selection && document.selection.createRange) 
			? document.selection.createRange().parentElement() 
			: window.getSelection().focusNode.parentNode; 

			select = window.getSelection().focusNode.parentNode;
			select_content = select.innerText;

			offsetX = window.getSelection().anchorOffset;
			offsetY = window.getSelection().focusOffset; 


			do
			{
				tb1.push(direct.tagName);
				tb2.push(getChildrenIndex(direct));
			}
			while((direct = direct.parentNode) && (direct !== document.documentElement));
/*
			var state;
			if(/[a-zA-Z]/.test(txt) ==true)  		//判断划的词是英文还是中文
			{
				state = 0;
			}
			else
			{
				state = 1;
			}
												//译文原文替换
			$.ajax({ 
				'url':'switch', 
				'data':{"username":cookie,"url":url,"dom":tb1,"sequence":tb2,"offsetx":offsetX,"offsety":offsetY,"state":state}, 
				'success':function(data){
					switch(data.type){ 
						case 0: break; 
						case 1:select.innerText = select_content.substring(0,offsetX) + data.trans + select_content.substring(offsetY,select_content.length); break; 
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
*/

			//显示单词和API释义
			if(txt.length<20)
			{
				oWord.innerText = txt;
				callAPI(txt);
			}
			
			var oEvent=ev||event;

			oDiv.style.display = "block";

			a = 1;
			oDiv.style.left=oEvent.clientX+'px';    
			oDiv.style.top=oEvent.clientY+'px'; 
			
			
			
/*			

			var url = window.location.href;
			var cookie;
			
			chrome.cookies.get({
				url:'http://localhost:8080/ustbTrans',
				name:'username'
			},function(cookie){
				cookie = cookie.value;
			})
*/


			//显示用户上次的选择
/*			$.ajax({ 
				'url':'last_select', 
				'data':{"username":cookie,"word":txt,"url":url,"dom":tb1,"sequence":tb2,"offsetx":offsetX,"offsety":offsetY}, 
				'success':function(data){
					switch(data.type){ 
						case 0:last_choose.style.display = "none";break; 
						case 1:last_choose.innerText = "data.trans"; break; 
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

			
			var oCus = document.getElementsByClassName("span_style");
			var oScore = document.getElementsByClassName("score");
			

			//显示自定义释义内容
			$.ajax({ 
				'url':'show_cus', 
				'data':{"word":txt}, 
				'success':function(data){
					switch(data.type){ 
						case 0: oCus[1].innerText = "无法获取";break; 
						case 1:
						var trans1 = data.trans;
						var score1 = data.score;
						cus_no = Math.ceil(trans1.length/3);
						for(var i = 0;i < trans1.length;i++)
						{
							cusTrans[i] = data.trans[i];   //把按分数排好序的释义存进数组
							scoreTrans[i] = data.score[i];
						}
						for(var j = 0;j < oCus.length;j++)
						{
							oCus[j].innerText = data.trans[j];
							oScore[j].innerText = data.score[j];
						}
						break;            	
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


/*

			for (var i = 0; i < oScore.length; i++) {
				oScore[i].innerText = "4.0";

			}
			*/
			
			
		}
	}

	var Readyselect = document.getElementsByClassName("span_API");
	
	
	for(i = 0;i < Readyselect.length;i++)
	{
		Readyselect[i].onclick = function(){
			
					//var oEvent=ev||window.event;
					//oEvent.stopPropagation();
					selectt = select;
					offsetXX = offsetX;
					var select_content1 = select_content;
					var new_select = select_content1.substring(0,offsetX) + this.innerText + select_content1.substring(offsetY,select_content.length);
					//var regexp = new RegExp("(\\w+)\\s(\\w+)"); 
					//var reg = new RegExp("^(\\w{"+ offsetX +"})\\w{"+(offsetY-offsetX+1)+"}(.*)$");
					select.innerHTML = new_select;
					$.ajax({ 
						'url':'choose', 
						'data':{"username":cookie,"word":txt,"url":url,"dom":tb1,"sequence":tb2,"offsetx":offsetX,"offsety":offsetY,"trans":this.innerText}, 
						'success':function(data){
							switch(data.type){ 
								case 0: break; 
								case 1: break; 
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
			}
				//打分
				var star_score = document.getElementsByTagName("a");
				for(i = 1;i < star_score.length;i++)
				{
					star_score.index = i;
					star_score[i].onclick = function(){
						var trans;
						var g;
						num = (this.index)%5;
						var each_cus = document.getElementsByClassName("span_style");
						var each_score = document.getElementsByClassName("score");
						if(this.index<=5)
						{
							g = 0;
						}
						else if(this.index>10)
						{
							g = 2;
						}
						else
						{
							g = 1;
						}
						trans = each_cus[g].innerText;
						each_score[g] = mark(txt,trans,num);
					}
				}


		//添加单词到单词本
		oWordBook.onclick = function(ev){
			var oEvent=ev||window.event;

	//	alert("success");

	
	
	if(cookie)
	{
		$.ajax({ 
			'url':'add_wordbook', 
			'data':{"username":cookie,"word":txt}, 
			'success':function(data){
				switch(data.type){ 
					case 0: alert("添加失败！");break; 
					case 1: alert("添加成功");break;
					case 2: alert("已在单词本中");break;
					
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
	else
	{
			window.open("login.html");//未登录时无法打开生词本
		}

		oEvent.stopPropagation();
	}



	cus_button.onclick = function(ev){
		var oEvent=ev||window.event;
		if(cus_button.value == "自定义翻译")
		{
			cus_content.style.display = "block";
			cus_button.value = "提交";
		}
		else
		{
			if(add_cus(txt,cus_content.value))
			{
				var cus_first = document.getElementsByClassName("span_style")[0];
				cus_first.innerText = "";
				cus_first.innerText = cus_content.value;
				var score_first = document.getElementsByClassName("score")[0];
				score_first.innerText = ""
				score_first.innerText = "0";
				cus_first.innerText = "";
				cus_content.style.display = "none";
				cus_button.value = "自定义翻译";
			}
			else
			{
				alert("已存在释义！");
				cus_first.innerText = "";
				cus_content.style.display = "none";
				cus_button.value = "自定义翻译";
			}
		}
		oEvent.stopPropagation();
	}

//鼠标点击下一页，循环
/*
	change_button.onclick = function(ev){
		var oEvent=ev||window.event;
		var style_span = document.getElementsByClassName("span_style");
		var score_next = document.getElementsByClassName("score");
		for(var j = 0;j < 3;j++)
		{
			style_span[j].innerText = cusTrans[j+3*count];
			score_next[j].innerText = scoreTrans[j+3*count];
		}
		if(count < cus_no-1)
		{
			count++;
		}
		else
		{
			count = 0;
		}
		
		oEvent.stopPropagation();
	}
	*/

	oDiv.onmousedown=function (ev)
	{
		var disx=0;
		var disy=0;

		var oEvent=ev||event;
		disx=oEvent.clientX-oDiv.offsetLeft;
		disy=oEvent.clientY-oDiv.offsetTop;


		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;

			oDiv.style.left=oEvent.clientX-disx+'px';
			oDiv.style.top=oEvent.clientY-disy+'px';
		}

		oDiv.onmouseup=function (ev)
		{
			var oEvent=ev||window.event;
			oEvent.stopPropagation();
			document.onmousemove=null;
			oDiv.onmouseup=null;
		}   
	}  
	oDiv.onmouseout = function(){
		a = 0;
	}
	document.onclick = function(){
		if(a == 0){
			
			oDiv.style.display = "none";
		}
	}
	oDiv.onclick = function(ev){
		var oEvent=ev||window.event;
		oEvent.stopPropagation();
		a = 0;
	}    


}







