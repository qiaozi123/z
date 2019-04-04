var url="?cat=";
var str="";
var temp="";
var id=new Array();
var nowUrl = window.location.href;
if(nowUrl.indexOf("?")>0)
{
	nowUrl=nowUrl.substring(0,nowUrl.indexOf('?'))
}	
$(function(){ 	
	/*友言的样式*/
	$("#uyan-copyright").css("display","none");
    $(".info_left>a").hover(function (){
	   $(this).parent().css("backgroundColor","#ed3b59");
	},function(){
	   $(this).parent().css("backgroundColor","#fff");
	});
	
	/*内容翻页效果*/
	var a_href=window.location.href;
	if(a_href.indexOf("paged")>0 )
	{
		 a_href=a_href.substring(a_href.lastIndexOf('paged=')+6);//获取到cat=后的参数
		 $(".pagenavi a").each(function(){
			var a_num=$(this).attr("title")
			if(a_href==a_num)
			{
			  $(this).css("border","1px solid #ed3b59").css("color","#fff").css("backgroundColor","#ed3b59");
			}
		 });
	}
	else{
		$($(".pagenavi a").get(0)).css("border","1px solid #ed3b59").css("color","#fff").css("backgroundColor","#ed3b59");
	} 
	
	/*风格居室跳转之后,页面加载时的选中效果*/
	var w_href=window.location.href;
	if(w_href.lastIndexOf('?')>0)
	{
	    if(w_href.lastIndexOf('&')>0)
		{
			w_href=w_href.substring(w_href.lastIndexOf('cat=')+4,w_href.lastIndexOf('&'));//获取到cat=后的参数
		}
		else{
			w_href=w_href.substring(w_href.lastIndexOf('cat=')+4);//获取到cat=后的参数
		}
	}
	if(w_href.indexOf('-')>0){//如果参数超过1个，边有-，则用数组存储
		 id=w_href.split("-");
	 }
	else
	{
		id[0]=w_href; //如果只有一个参数，则直接赋值给数组
	}

	for(var i=0; i<id.length; i++)
	{
		$(".yc_xuanze>ul>li>a").each(function(){
			if(id[i]==$(this).attr("name"))		  //如果参数和循环的a的name相同，则对其父li赋予li_hover样式
			{
				$(this).parent().attr('class','li_hover');		
				var $parent_ul=$(this).parent().parent().attr("class");
				var $lable_html="<label name='"+$parent_ul+"' abc='"+$(this).attr('name')+"'><span style='color:#999'>"+$(this).text()+"</span>×</label>";//对选中的类型在xz_content中动态添加label
				$("#xz_content").append($lable_html);
			}
		});
	}
		
	/*绑定点击事件，实现跳转页面*/ 
  $(".yc_xuanze>ul>li").bind("click",function(){
		var $parent_ul=$(this).parent().attr("class");
		$(this).addClass("li_hover").siblings().removeClass("li_hover");
		str="";url="?cat=";//初始化
		$(".yc_xuanze .li_hover").each(function(){
			str+=$(this).children('a').attr("name")+"-";//设置穿参格式以及追加参数
		});
		url+=str;
		url=nowUrl+url.substring(0,url.lastIndexOf('-'));
		window.location.href=url;
	});
	
	
	/*风格居室，鼠标略过效果*/
	 $(".yc_xuanze>ul>li").hover(function(){
		$(this).addClass("test_hover");
	 },function(){
		$(this).removeClass("test_hover");
	 });
	 
	 
	/*点击label，减少选择，跳转页面*/
	$("#xz_content>label").bind("click",function(){
		str="";url="?cat=";
		$(".yc_xuanze .li_hover").each(function(){
			str+=$(this).children('a').attr("name")+"-";//设置穿参格式以及追加参数
		});		
		$(this).remove();//选择的则删除
		str=str.replace($(this).attr("abc")+"-","");//替换原来参数为空
		url+=str;
		url=nowUrl+url.substring(0,url.lastIndexOf('-'));
		location.href=url;
	});
	
	/*点击风格，类型标题时跳转到页面首页*/
	$(".yc_title").click(function(){
		str="";url="?cat=";
		$(".yc_xuanze .li_hover").each(function(){
			str+=$(this).children('a').attr("name")+"-";//设置穿参格式以及追加参数
		});	
		var $cla=$(this).next().children("ul").attr("class");	
		$("."+$cla).find('li').removeClass('li_hover');
		$("#xz_content>label").each(function(){
			if($(this).attr("name")==$cla)
			{
				$(this).remove();
				str=str.replace($(this).attr("abc")+"-","");//替换原来参数为空
				url+=str;
				url=nowUrl+url.substring(0,url.lastIndexOf('-'));
				if(url=="list.html?")
					location.href="index.html"
				else
					location.href=url;	
			}
		});
	});
 
   /*$('.zc_dl dd img').hover(function(){											
	   $(this).attr("class", "img_hover");	 
	},function(){
	   $(this).removeClass("img_hover");
   });*/
   
   /*二维码略过显示*/
   $("#mt_erm").hover(function(){
		$(this).css("backgroundPosition","-79px -156px");
		$(".mt_ewm").fadeIn();
   },function(){
		$(this).css("backgroundPosition","-2px -156px ");
		$(".mt_ewm").fadeOut();
   });
	
	/*页面滚动时触发的事件*/
	var wd=document.documentElement.clientWidth;
    window.onscroll=function(){
		b();
		if(document.getElementsByTagName("body")[0].scrollTop>100 ||  document.documentElement.scrollTop>100){
			 if(wd>900)
			 {
				$("#fudong").css({position:"fixed",top:"0px",right:((wd-1000)/2)+"px"});
			 }
			  else{
				$("#fudong").css({position:"",top:"0px",right:"0px"});
			 }
		}
		else{
			$("#fudong").css({position:"",top:"0px",right:"0px"});
		}
	}

    window.onresize=function(){
    	wd=document.documentElement.clientWidth;
		if(document.getElementsByTagName("body")[0].scrollTop>100 ||  document.documentElement.scrollTop>100){
			 if(wd>800)
			 {
				 $("#fudong").css({position:"fixed",top:"0px",right:((wd-1000)/2)+"px"});
			 }
			 else{
				 $("#fudong").css({position:"",top:"0px",right:"0px"});
			 }
		}
		else{
			$("#fudong").css({position:"",top:"0px",right:"0px"});
		}
    }
	
	/*回到顶部*/
	b();
	$('#gotop').click(function(){
		//$(document).scrollTop(0);	
		$('body,html').animate({scrollTop:0},250);
	})
	
	
	/*
	***头部导航条
	*/
	$.fn.lavaLamp=function(o){
	 o=$.extend(
	 {
			fx:"linear",
			speed:500,
			click:function(){}
	 },o||{});
	 return this.each(function(){
			var b=$(this),
			$back=$('<li class="back"></li>').appendTo(b),
			$li=$("li",this),
			noop=function(){}, 
			curr=$("li.current",this)[o.n]||$($li[o.n]).addClass("current")[0];
			$li.not(".back").hover(function(){move(this);},noop);
			$(this).hover(noop,function(){move(curr)});

			$li.click(function(e){
					 //setCurr(this);
					 //return o.click.apply(this,[e,this])
			});
			setCurr(curr);
			function setCurr(a){
					$back.css({"left":a.offsetLeft+10+"px","width":a.offsetWidth-70+"px"});

					curr=a;
			};
			 function move(a){
				$back.each(function(){$(this).animate({width:a.offsetWidth-70,left:a.offsetLeft+10},"fast")});
			}
	});}
});
function b(){
	t = $(document).scrollTop();
	if(t >500){
	   $('#gotop').css("display","block"); 
		$('#gotop').fadeIn();
	}else{
		$('#gotop').fadeOut();
	}
}


