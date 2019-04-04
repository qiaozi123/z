(function(){
	var res = GetRequest();
	var par = res['index'];
	if(par!='gfan'){
		var ua=navigator.userAgent.toLowerCase();
		var contains=function (a, b){
			if(a.indexOf(b)!=-1){return true;}
		};		   
		

		var url = window.location.host;
		var murl = makeMobileUrl(url);
		
		// if(url == "sh.tugou.com")
		// {
			// var toMobileVertion = function(){
				// window.location.href = "http://m.sh.tugou.com/";
			// }	
		// }
		
		if (url == "www.tugou.com" || url == "tugou.citytogo.com.cn"){
			var toMobileVertion = function(){
				window.location.href = "http://m.tugou.com"
			}
		}else{
			var toMobileVertion = function(){
				window.location.href = murl
			}
		}
		if(contains(ua,"ipad")||(contains(ua,"rv:1.2.3.4"))||(contains(ua,"0.0.0.0"))||(contains(ua,"8.0.552.237"))){return false}
		if((contains(ua,"android") && contains(ua,"mobile"))||(contains(ua,"android") && contains(ua,"mozilla")) ||(contains(ua,"android") && contains(ua,"opera"))
	||contains(ua,"ucweb7")||contains(ua,"iphone")){toMobileVertion();}
	}
})();
function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}
function makeMobileUrl(url){
		var mUrl = url.replace(url, "http://m." + url);
		return mUrl;
}