    var scroll_flag;
    var totle_temp;
$(function(){
	var city_flag=true;
    scroll_flag=true;
	
		
	/*监理师傅*/
	$(".Supervision_master ul li").hover(function(){
		$(this).children("div[name='master_hover']").css("display","block");
	},function(){
		$(this).children("div[name='master_hover']").css("display","none");
	});
	
	/*城市切换*/
	$(".cityChange_img").hover(function(){
        if(city_flag){
        	$(".cityChange_img").css({background:"url('http://www.weizhuangxiu.com/statics/images/wzx/pic_icon.png') no-repeat -26px 0px",height:"24px"});
        	$(".cityChange_text").css({borderTop:"1px solid #f86b13",borderLeft:"1px solid #f86b13",borderRight:"1px solid #f86b13",borderBottom:"0px",height:"24px"});
        	$(".cityChange_abso_detial").css("display","block");
        	city_flag=false;
        } 
	});
	$(".slogan_and_city").hover(function(){},function(){
		$(".cityChange_img").css({background:"url('http://www.weizhuangxiu.com/statics/images/wzx/pic_icon.png') no-repeat 0px 0px",height:"25px"});
        	$(".cityChange_text").css({border:"1px solid #dbdbdb",height:"23px"});
        	$(".cityChange_abso_detial").css("display","none");
        	city_flag=true;
	});

   
    /*导航条效果*/
    $.fn.lavaLamp = function(o) {
         o = $.extend({
             fx: "linear",
             speed: 500,
             click: function() {}
         }, o || {});
         return this.each(function() {
             var b = $(this),
                 $back = $('<li class="back"></li>').appendTo(b),
                 $li = $("li", this),
                 noop = function() {},
                 curr = $("li.current", this)[o.n] || $($li[o.n]).addClass("current")[0];
             $li.not(".back").hover(function() {
                 move(this);
             }, noop);
             $(this).hover(noop, function() {
                 move(curr)
             });

             $li.click(function(e) {
                 //setCurr(this);
                 //return o.click.apply(this,[e,this])
             });
             setCurr(curr);

             function setCurr(a) {
                 $back.css({
                     "left": a.offsetLeft + 10 + "px",
                     "width": a.offsetWidth - 70 + "px"
                 });

                 curr = a;
             };

             function move(a) {
                 $back.each(function() {
                     $(this).animate({
                         width: a.offsetWidth - 70,
                         left: a.offsetLeft + 10
                     }, "fast")
                 });
             }
         });
     }
        /*ending头部导航*/

        /*微装修监理鼠标*/
        $(".wzx_inside_nav_sq ul li:not(.nav_sq)").hover(function(){
            $(this).find("i").css("display","none");
            $(this).find("b").css("display","block");
        },function(){
            $(this).find("b").css("display","none");
            $(this).find("i").css("display","block");
        });
		/*箭头*/
		var index=$(".wzx_inside_nav_sq ul li.nav_sq").index();
		 $(".wzx_inside_nav_sq").find("em").animate({
			left:((index*170)+329)+'px'
		}, 100);
		
		
    var nav_sq_hei=0;
	if($(".wzx_inside_nav_sq").length>0){
		nav_sq_hei=$(".wzx_inside_nav_sq").position().top;
	}
    window.onscroll=function(){
        if(document.getElementsByTagName("body")[0].scrollTop>nav_sq_hei ||  document.documentElement.scrollTop>nav_sq_hei){
            $(".wzx_inside_nav_sq").css({"position":"fixed","top":"0px"});
        }
        else{
            $(".wzx_inside_nav_sq").css("position","relative");
        }
    }
	
	
	//报名
	
	$(".sub_button").click(function() {
         var bm_name = $("#name").val();
         var bm_phone = $("#tel").val();
         var size = $("#size").val(); 
         if(!bm_name){
            $(".wrong_name").show();
            $("#name").addClass("focus_wrong");
            return false;
         }else if(!checkMobile(bm_phone)){
            $(".wrong_tel").show();
            $("#tel").addClass("focus_wrong");
            return false;
         }else{
            $(".wrong_name").hide();
            $(".wrong_tel").hide();
         }
             $.post("../apply.php", {
                 name: bm_name,
                 phone: bm_phone,
                 act: 'zx'
             }, function(data) {
                 if (data == 1) {
                    alert('报名成功,请查收短信');
                 } else {
                     alert('400-8617-000');
                 }
             });
     });
	
	
 }); 




 
 /*申请验证*/
 $(function(){
 	$("#name").on({
 		focus:function(){
 			$(this).removeClass('focus_wrong');
 			$(this).addClass("focus");
 		},
 		blur: function(){
 			$(this).removeClass("focus");
 		}
 	});
 	$("#tel").on({
 		focus:function(){
 			$(this).removeClass('focus_wrong');
 			$(this).addClass("focus");
 		},
 		blur: function(){
 			$(this).removeClass("focus");
 		}
 	});
 });  
 function checkMobile(tel){
 	var str = /^1[3|4|5|8][0-9]\d{8}$/;
 	return str.test(tel);
 }

