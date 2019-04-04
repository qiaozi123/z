//实现报名人数的异步刷新
setTimeout("getcount()",1000)

    function getcount(){
        $.ajax({
            url:"http://www.weizhuangxiu.com/index.php?m=formguide&c=form_sign_up&a=get_signup_count",
            async:false,
			type:'GET',
            dataType:"jsonp",
			jsonp: "callback",
			cache:false,
            success:function(result){
                //alert(result.total);
                $("#mycount").html(result.total);
				//console.log(result.total);
            },
            error:function(){
            //alert("getcount  error");
            }
        });
}
