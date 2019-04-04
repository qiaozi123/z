$(function(){

/*
***获取footer距离顶部的距离用来判断右侧浮动的效果
*/
var footer_top=$(".footer").position().top-580;

/*
***滚动实现头部导航与右侧导航浮动 
*/
var wid=document.body.clientWidth; 
window.onscroll=function(){
	var wid_r=(wid-1000)/2;
	//alert(wid_r);
	if((document.getElementsByTagName("body")[0].scrollTop>90 && document.getElementsByTagName("body")[0].scrollTop<footer_top) ||  (document.documentElement.scrollTop>90 && document.documentElement.scrollTop<footer_top)){
	   $(".menu").css("position","fixed").css("top","0px").css("left","0px");
	   if(wid>1000)
		{
			$(".con_right").css("position","fixed").css("top","100px").css("right",wid_r+"px");
		}
	}
	else{
	   $(".menu").css("position","").css("top","0px").css("left","0px");
	   $(".con_right").css("position","").css("top","0px").css("right","0px");
	}
}

/*
***头部导航选中状态
*/
var navChecked=$("#cur_menu").val();
$("#"+navChecked).parent().addClass("zxjy_nav_hover");



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
/*
***回到顶部
*/
function b(){
	t = $(document).scrollTop();
	if(t >300){
	   $('#returnTop').css("display","block"); 
		$('#returnTop').fadeIn();
	}else{
		$('#returnTop').fadeOut();
	}
}
$(document).ready(function(e) {
	b();
	$('#returnTop').click(function(){
		$(document).scrollTop(0);	
	})
});
$(window).scroll(function(e){
	b();		
})