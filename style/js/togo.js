/*统计各个模块距离顶部的距离,推入top_height数组*/
var top_height = [];
var li_describe = [];
var strHei = 0;
var top_bm = 0;
var case_top;
var case_flag = true;
var float_right = 0,
    wid = 0;
$(function() {
	

	//新增处理首页右侧滚动
	/*
	if($("#customer").length > 0 )
	{
		$.post("apply.php", {
             act: 'index_data'
         }, function(data) {
             $(".roll").html(data);
         });	
	}*/
	
	
	
	
    /*banenr切换点*/
    $(".rslides_tabs").css("right", ($(window).width() - 1180) / 2 + "px");

    /*togo优势最后一个边框*/
    $(".togo_advantage li:last-child div").css("border", "0px");
    for (var i = 0; i < $(".togo_advantage li").length; i++) {
        $(".togo_advantage li:eq(" + i + ")").animate({
            bottom: "0px",
            opacity: "1",
            method: "easeInOutQuint"
        }, 500 + i * 160);
    }

    /*优选方案*/
    $(".Optimization li").hover(function() {
        $(this).find("em").css("display", "block");
        $(this).find(".border_white").css("display", "block");
    }, function() {
        $(this).find("em").css("display", "none");
        $(this).find(".border_white").css("display", "none");
    });
    /*$(".border_white").hover(function(){
    	$(this).siblings("img").addClass("img_small").removeClass("imgSnormall");
    },function(){
    	$(this).siblings("img").removeClass("img_small").addClass("imgSnormall");
    });*/
    $(".border_white").hover(function() {
        $(this).siblings("img").addClass("img_hover");
    }, function() {
        $(this).siblings("img").removeClass("img_hover");
    });

    /*关闭底部浮动*/
    $(".togo_askFree_close").click(function() {
        $(".togo_askFree").animate({
            bottom: "-80px"
        });
        $(".footer").css("margin", "60px auto 20px auto");
    });

    /*真实案例*/
    $(".case li").each(function() {
        if (($(this).index() + 1) % 3 == 0) {
            $(this).css("marginRight", "0px");
        }
    });
    $(".case li").hover(function() {
        $(this).children().children(".grey_bg").animate({
            height: "130px"
        }, 300);
    }, function() {
        $(this).children().children(".grey_bg").animate({
            height: "0px"
        }, 50);
    });

    /*真实案例上下两排动画初始化*/
    $(".case li:lt(2)").css("left", "-1000px");
    $(".case li:gt(3)").css("right", "-1000px");


    if ($(".case").length > 0) {
        case_top = $(".case").position().top - $(".case").height();
    }

    /*服务流程*/
    $(".process li").each(function() {
        if (($(this).index() + 1) % 4 == 0) {
            $(this).css("marginRight", "0px");
        }
    });
    $(".process li").hover(function() {
        $(this).children(".grey_bg").animate({
            height: "100px"
        }, 300);
    }, function() {
        $(this).children(".grey_bg").animate({
            height: "0px"
        }, 80);
    });

    /*首页报名入口*/
    $(".togo_bm_success").css("marginTop", -($(".togo_bm_success").height() / 2) + 'px');
    /*$(".askFree_button,.float_right_bm").click(function() {
        var sign = $(".sellout").attr("state");
        if (sign == "true") {
            $(".sellout").css({
                "display": "block"
            });
            $(".sellout_box").css({
                "display": "block"
            });
            $(".sellout_box").funShowDivCenter();
            $(".togo_float_right").css({
                "z-index": "152"
            });
            $(".askFree_button,.float_right_bm").unbind();
        } else {
            $(".togo_bm_success,.togo_bm_content,.mask").css("display", "block");
            //$(".measureName").val('姓名');
		//$(".measurePhone").val('手机');
		//$(".measureSize").val('面积');
		//$(".empty_name,.empty_phone").css("display","none");
            $("input.measurePhone,input.measureName").css("border", "1px solid #cacdb8");
        }
    });
    $.fn.funShowDivCenter = function() {
        var top = ($(window).height() - $(".sellout_box").height()) / 2;
        var left = ($(window).width() - $(".sellout_box").width()) / 2;
        $(".sellout_box").css({
            'top': top + 'px',
            left: left + 'px'
        }).show();
    };*/
    $(".close").click(function() {
        $(".togo_bm_success,.mask,.info_success").css("display", "none");
        $(".measureName").val('姓名');
        $(".measurePhone").val('手机');
        $(".measureSize").val('面积');
        $(".empty_name,.empty_phone").css("display", "none");
        $("input.measurePhone,input.measureName").css("border", "1px solid #cacdb8");
    });
/*
    $("input,select").focus(function() {
        $(this).css("border", "1px solid #009973");
    }).blur(function() {
        $(this).css("border", "1px solid #cacdb8");
    });*/

    /*弹出框以及底部浮动*/
    /*$(".togo_bm_detail input.measureName").focus(function() {
        $(this).val('');
        $(".togo_bm_detail .empty_name").css("display", "none");
    }).blur(function() {
        if ($(this).val() == "") {
            $(this).val('姓名');
            $(".togo_bm_detail .empty_name").css("display", "block");
            $(this).css("border", "1px solid #e7691e");
        }
    });
    $(".togo_bm_detail input.measurePhone").focus(function() {
        $(this).val('');
        $(".togo_bm_detail .empty_phone").css("display", "none");
    }).blur(function() {
        if (!checkPhone_mask()) {
            $(".togo_bm_detail .empty_phone").css("display", "block");
            $(this).val('手机');
            $(this).css("border", "1px solid #e7691e");
        }
    });*/
    /*弹出模块提交*/
    /*$(".togo_bm_detail .sub_button").click(function() {
        var bm_name = $(".togo_bm_detail .measureName").val();
        var bm_phone = $(".togo_bm_detail .measurePhone").val();
        var bm_size = $(".togo_bm_detail .measureSize").val();
        var goods_id = $("#goods_id").val();
        var city_id = $("#city_id").val();
        if (bm_name == "姓名" || bm_name == "") {
            $(".togo_bm_detail .empty_name").css("display", "block");
            $(".togo_bm_detail input.measureName").css("border", "1px solid #e7691e");
        } else if (!checkPhone_mask()) {
            $(".togo_bm_detail .empty_phone").css("display", "block");
            $(".togo_bm_detail input.measurePhone").css("border", "1px solid #e7691e");
        } else {
            _czc.push(["_trackPageview", '/报名弹出框/', document.referrer]);

            $.post("apply.php", {
                name: bm_name,
                phone: bm_phone,
                size: bm_size,
                goods_id: goods_id,
                city_id: city_id,
                act: 'zx'
            }, function(data) {

                if (data == 1) {
                    $(".togo_bm_content").css("display", "none");
                    $(".info_success").css("display", "block");
                } else {
                    alert('请联系装修管家：400-8617-000');
                }
            });

        }
    });*/

    /*详情页*/
    $(".togo_bm_detail_content input.measureName").focus(function() {
        $(this).val('');
        $(".togo_bm_detail_content .empty_name").css("display", "none");
    }).blur(function() {
        if ($(this).val() == "") {
            $(this).val('姓名');
            $(".togo_bm_detail_content .empty_name").css("display", "block");
            $(".togo_bm_detail_content input.measureName").css("border", "1px solid #e7691e");
        }
    });
    $(".togo_bm_detail_content input.measurePhone").focus(function() {
        $(this).val('');
        $(".togo_bm_detail_content .empty_phone").css("display", "none");
    }).blur(function() {
        if (!checkPhone_xq()) {
            $(".togo_bm_detail_content .empty_phone").css("display", "block");
            $(this).val('手机');
            $(".togo_bm_detail_content input.measurePhone").css("border", "1px solid #e7691e");
        }
    });

    /*详情页模块提交*/
    $(".togo_bm_detail_content .sub_button").click(function() {
        var bm_name = $(".togo_bm_detail_content .measureName").val();
        var bm_phone = $(".togo_bm_detail_content .measurePhone").val();
        var bm_size = $(".togo_bm_detail_content .measureSize").val();
        var goods_id = $("#goods_id").val();
        var city_id = $("#city_id").val();


        if (bm_name == "姓名" || bm_name == "") {
            $(".togo_bm_detail_content .empty_name").css("display", "block");
            $(".togo_bm_detail input.measureName").css("border", "1px solid #e7691e");
        } else if (!checkPhone_xq()) {
            $(".togo_bm_detail_content .empty_phone").css("display", "block");
            $(".togo_bm_detail_content input.measurePhone").css("border", "1px solid #e7691e");
        } else {
            $.post("apply.php", {
                name: bm_name,
                phone: bm_phone,
                size: bm_size,
                goods_id: goods_id,
                city_id: city_id,
                act: 'zx'
            }, function(data) {

                if (data == 1) {
										
                    //$(".togo_bm_content").css("display","none");
                    //console.log("成功" + goods_id);
                    $(".togo_bm_success,.info_success,.mask").css("display", "block");
					tongji();
					
                } else {
                    alert('请联系装修管家：400-8617-000');
                }
            });
        }
    });
	

    /*右侧浮动*/
    wid = ($(window).width() - 1180) / 4 - 20;
    float_right = $(".togo_float_right").height();
    $(".togo_float_right").css({
        right: wid + "px",
        marginTop: -float_right / 2 + "px"
    })
    $(".togo_float_right li:eq(1)").hover(function() {
        $(".float_right_ewm_div").css("display", "block");
    }, function() {
        $(".float_right_ewm_div").css("display", "none");
    });
    $(".return_top").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
    });



    /*详情页*/
    /*主材*/
    $(".cailiao_logo ul:not(.cailiao_fu_4) li,.togo_service ul li").each(function() {
        if (($(this).index() + 1) % 5 == 0) {
            $(this).css("marginRight", "0px");
        }
    });

    /*主材鼠标略过同品类高亮  此效果用于主材logo部分，暂时取消*/
    /*if($(".cailiao_zc").length>0){
    	$(".cailiao_zc ul li").hover(function(){
    		var cl_data=$(this).children('img').attr("data");
    		$(".cailiao_zc ul li").each(function(){
    			if($(this).children('img').attr("data")!=cl_data){
    				$(this).children('i').css("display","block");
    			}
    		});
    	},function(){
    		$('.hover_mask').css("display","none");
    	});
    }*/

    /**悬浮框鼠标效果**/
    $(".togo_float_right li i").hover(function() {

        $(".togo_float_right li i").css({
            color: '#009973'
        });
    }, function() {


    });

    $(".cailiao_logo ul li:last-child").css("marginRight", "0px");
    $(".cailiao_logo ul.cailiao_fu_4 li").each(function() {
        if (($(this).index() + 1) % 4 == 0) {
            $(this).css("marginRight", "0px");
        }
    });

    /*样板房设置*/
    $(".ybf_tab li:last-child").css("marginRight", "0px");
    $(".ybf_tab_index:eq(0)").css("display", "block");


    /*报名条浮动*/
    if ($(".detail_floating").length > 0) {
        top_bm = $(".detail_floating").position().top;
    }






    /* 导航条效果*/
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

    /*首页装修案例*/
    if ($(".ind_anli").length > 0) {
        var ind_anli_grade = $("#ind_anli_id").val();
        var ind_anli_str = '<img src="images/index_anli/' + ind_anli_grade + '_al_01.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_02.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_03.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_04.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_05.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_06.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_07.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_08.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_09.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_10.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_11.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_12.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_13.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_14.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_15.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_16.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_17.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_18.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_19.jpg" border="0"/><img src="images/index_anli/' + ind_anli_grade + '_al_20.jpg" border="0"/>';
        $(".ind_anli").html(ind_anli_str);
    }

});

/*页面加载完之后，处理页面定位滚动*/
window.onload = function() {
    if ($(".common_bz").length > 0) {
        $(".common_bz").each(function() {
            top_height.push($(this).position().top);
            if ($(this).find(".detail_common_title").text() != "") {
                li_describe.push($(this).find(".detail_common_title").text());
            } else {
                li_describe.push("报名");
            }
        });
        top_height.push($(".xq_wrapper div.common_bz:last-child").height() + top_height[top_height.length - 1]);
    }
    /*左侧小圆圈 根据页面中实际的模块算出圆圈的个数，追加到页面中*/
    var left_wid = ($(window).width() - 1180) / 4 - 7; /*初始化位置*/
    var str = "<li class='current' title='" + li_describe[0] + "'></li>";
    for (var i = 1; i < $(".common_bz").length + 1; i++) {
        if (i == $(".common_bz").length) {
            $(".sroll_left_circle").html(str);
        }
        str += "<li title=" + li_describe[i] + "></li>";
    }
    $(".sroll_left_circle").css({
        marginTop: -$(".sroll_left_circle").height() / 2 + "px",
        left: left_wid + "px"
    });

    /*点击圆点页面滚动到相应页面*/
    $(".sroll_left_circle li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $('body,html').animate({
            scrollTop: (top_height[$(this).index()] - 50)
        }, 400); /*减50，因为顶部有浮动部分遮住*/
    });

    if ($(".case").length > 0) {
        if ($(window).scrollTop() > case_top && case_flag) {
            $(".case li:lt(3)").animate({
                left: "0px",
                method: "easeInOutQuint"
            }, 800);
            $(".case li:gt(2)").animate({
                right: "0px",
                method: "easeInOutQuint"
            }, 800);
            case_flag = false;
        }
    }
    window.onscroll = function() {
        /*滚动到真实案例处*/
        if ($(".case").length > 0) {
            if ($(window).scrollTop() > case_top && case_flag) {
                $(".case li:lt(3)").animate({
                    left: "0px",
                    method: "easeInOutQuint"
                }, 800);
                $(".case li:gt(2)").animate({
                    right: "0px",
                    method: "easeInOutQuint"
                }, 800);
                case_flag = false;
            }
        }
        /*报名条浮动*/
        if ($(".detail_floating").length > 0) {
            if ($(window).scrollTop() > top_bm) {
                $(".detail_floating").css({
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    height: "50px"
                });
                $(".askFree_describe").css({
                    fontSize: "20px",
                    marginTop: "-27px"
                }).children("span").css({
                    fontSize: "22px"
                });
                $(".askFree_button").css({
                    width: "200px",
                    height: "30px",
                    lineHeight: "30px",
                    fontSize: "20px"
                });
                $(".sroll_left_circle").css("display", "block"); /*滚到banner下开始显示左侧圆点*/
            } else if ($(window).scrollTop() < top_bm) {
                $(".detail_floating").css({
                    position: "",
                    top: "",
                    left: "",
                    height: "70"
                });
                $(".askFree_describe").css({
                    fontSize: "",
                    marginTop: ""
                }).children("span").css({
                    fontSize: ""
                });
                $(".askFree_button").css({
                    width: "",
                    height: "",
                    lineHeight: "",
                    fontSize: ""
                });
                $(".sroll_left_circle").css("display", "none");
            }
        }

        /*判断滚动条滚动位置*/
        if ($(".white_wrap,.grey_wrap").length > 0) {
            /*这里第一屏时第一个圆圈默认为绿，故从1开始*/
            for (var i = 1; i < top_height.length; i++) {

                if ($(window).scrollTop() > top_height[i - 1] - 50 * i && $(window).scrollTop() < top_height[i] - 50 * i) {
                    $(".sroll_left_circle li:eq(" + (i - 1) + ")").addClass("current").siblings().removeClass("current");
                }

            }
        }

        /*回到顶部*/
        if (document.getElementsByTagName("body")[0].scrollTop > 450 || document.documentElement.scrollTop > 450) {
            $(".return_top").fadeIn();
            float_right = $(".togo_float_right").height();
        } else {
            $(".return_top").fadeOut();
            float_right = $(".togo_float_right").height();
        }
        $(".togo_float_right").css({
            right: wid + "px",
            marginTop: -float_right / 2 + "px"
        });
    }
}

/*调用qq*/
function myEvent(obj, ev, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + ev, fn);
    } else {
        obj.addEventListener(ev, fn, false);
    };
};

function getByClass(obj, sClass) {
    var array = [];
    var elements = obj.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == sClass) {
            array.push(elements[i]);
        };
    };
    return array;
};
var cs_box = {
    set: function(json) {
        this.box = document.getElementById('cs_box');
        //this.setimg(json);
        this.qqfn(json);
    },
    qqfn: function(json) {
        this.btn = getByClass(this.box, 'cs_img')[0];
        var link = 'http://wpa.qq.com/msgrd?v=3&uin=' + json.qq + '&site=qq&menu=yes';
        this.btn.onclick = function() {
            window.open(link, '_blank');
        };
    }
};

/*手机号检验*/
function checkPhone_mask(tel) {
    //var phone_val = $(".togo_bm_detail .measurePhone").val();
    var myreg = /^(((1[0-9]{1}[0-9]{1}))+\d{8})$/;
    if (!myreg.test(tel)) {
        return false;
    } else {
        return true;
    }
}

function checkPhone_xq() {
    var phone_val = $(".togo_bm_detail_content .measurePhone").val();
    var myreg = /^(((1[0-9]{1}[0-9]{1}))+\d{8})$/;
    if (!myreg.test(phone_val)) {
        return false;
    } else {
        return true;
    }
}

/*解决ie中indexOf不兼容*/
if (!Array.indexOf) {
    Array.prototype.indexOf = function(obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    }
}

/*城市切换js 17:01 2015-04-27*/
/*<!--城市悬浮效果-->*/
$(function() {
    var city_flag = true;
    $("#city").hover(function() {
        if (city_flag) {
            $(".city-box").css({
                borderTop: "1px solid #019973",
                borderLeft: "1px solid #019973",
                borderRight: "1px solid #019973"
            });
            $(".cityChange_abso_detial").css({
                display: "block",
                "border": "1px solid #019973"
            });
            $("#city").attr("src", "themes/default/images/city_h.jpg");
            $("#city").css({
                border: "1px solid #019973",
                "border-left": "none"
            });
            city_flag = false;
        }
    });
    $(".city-change").hover(function() {}, function() {
        $(".city-box").css({
            border: "1px solid #dbdbdb"
        });
        $(".cityChange_abso_detial").css({
            display: "none"
        });
        $("#city").attr("src", "themes/default/images/city.jpg");
        $("#city").css({
            "border": "1px solid #dbdbdb",
            "border-left": "none"
        });
        city_flag = true;
    });
});
/*免费服务切换*/
$(function(){
	$(".serve_container").changeServe();
});
$.fn.changeServe = function(){
	$(".serve_left_li ul li").click(function(){
		var id = $(this).attr("id");

		switch(id){
			case "freelf":
						$(".content_container").animate({top: "0"});
						$(this).find("span").addClass('ilf_a');
						$(this).siblings("li").find("span").removeClass('isj_a ibj_a ijl_a')
						$(this).siblings("li").removeClass("lifocus ifocus");
						$(this).addClass('lifocus ifocus')
						break;
			case "freesj":
						$(".content_container").animate({top: "-400px"});
						$(this).find("span").addClass('isj_a');
						$(this).siblings("li").find("span").removeClass('ilf_a ibj_a ijl_a')
						$(this).siblings("li").removeClass("lifocus ifocus");
						$(this).addClass('lifocus ifocus')
						break;
			case "freebj":
						$(".content_container").animate({top: "-800px"});
						$(this).find("span").addClass('ibj_a');
						$(this).siblings("li").find("span").removeClass('isj_a ilf_a ijl_a')
						$(this).siblings("li").removeClass("lifocus ifocus");
						$(this).addClass('lifocus ifocus')
						break;
			case "freejl":
						$(".content_container").animate({top: "-1200px"});
						$(this).find("span").addClass('ijl_a');
						$(this).siblings("li").find("span").removeClass('isj_a ibj_a ilf_a')
						$(this).siblings("li").removeClass("lifocus ifocus");
						$(this).addClass('lifocus ifocus')
						break;
		}
	});
	
	$(".serve_left_li ul li").bind({
		mouseover: function(){
			var id = $(this).attr("id");

			switch(id){
				case "freelf":
						$(this).find("span").addClass('ilf_a');
						$(this).addClass('ifocus')
						break;
				case "freesj":
						$(this).find("span").addClass('isj_a');
						$(this).addClass('ifocus')
						break;
				case "freebj":
						$(this).find("span").addClass('ibj_a');
						$(this).addClass('ifocus')
						break;
				case "freejl":
						$(this).find("span").addClass('ijl_a');
						$(this).addClass('ifocus');
						break;
			}
		},
		mouseout: function(){
			var i =/lifocus/;
			if (!i.test($(this).attr("class"))){
				$(this).removeClass("ifocus");
				$(this).find("span").removeClass("ilf_a isj_a ibj_a ijl_a ");
			}
		}
	})
};
/*申请信息滚动*/
$(function(){
	startmarquee('customer', 33, 1, 400, 1500);
})
 function startmarquee(elementID, h, n, speed, delay) {
     var t = null;
     var box = '#' + elementID;
     $(box).hover(function() {
         clearInterval(t);
     }, function() {
         t = setInterval(start, delay);
     }).trigger('mouseout');

     function start() {
         $(box).children(".roll").animate({
             marginTop: '-=' + h
         }, speed, function() {
             $(this).css({
                 marginTop: '0'
             }).find('li').slice(0, n).appendTo(this);
         });
     }
 }
 //表单验证
/*$(function(){
	//banner
	var _banner = $("#banner_tel");
	_banner.bind({
		focus: function(){

		},
		blur: function(){
			if(!checkMobile(_banner.val())){
				$(".banner_wrong").show();
				_banner.css({border:"1px solid #ff7777"});
			}else{
				$(".banner_wrong").hide();
				_banner.css({border:""});
			}
		}
	});
	var _lf = $("#lf_tel");
	_lf.bind({
		focus: function(){

		},
		blur: function(){
			if(!checkMobile(_lf.val())){
				$(".serve_wrong_lf").show();
				_lf.css({border:"1px solid #ff7777"});
			}else{
				$(".serve_wrong_lf").hide();
				_lf.css({border:""});
			}
		}
	});
	var _sj = $("#sj_tel");
	_sj.bind({
		focus: function(){

		},
		blur: function(){
			if(!checkMobile(_sj.val())){
				$(".serve_wrong_sj").show();
				_sj.css({border:"1px solid #ff7777"});
			}else{
				$(".serve_wrong_sj").hide();
				_sj.css({border:""});
			}
		}
	});
	var _bj = $("#bj_tel");
	_bj.bind({
		focus: function(){

		},
		blur: function(){
			if(!checkMobile(_bj.val())){
				$(".serve_wrong_bj").show();
				_bj.css({border:"1px solid #ff7777"});
			}else{
				$(".serve_wrong_bj").hide();
				_bj.css({border:""});
			}
		}
	});
	var _jl = $("#jl_tel");
	_jl.bind({
		focus: function(){

		},
		blur: function(){
			if(!checkMobile(_jl.val())){
                $(".serve_wrong_jl").show();
				_jl.css({border:"1px solid #ff7777"});
			}else{
				$(".serve_wrong_jl").hide();
				_jl.css({border:""});
			}
		}
	})
	
})*/
function checkMobile(tel){
 	var str = /^1[3|4|5|8][0-9]\d{8}$/;
 	return str.test(tel);
}
function checkSelect(sel){
	var str = /建筑面积/
	return str.test(sel);
}



//新版首页报名
$(function(){
	
	var city_id = $("#city_id").val();
	//banner报名
	$("#banner_b").click(function(){
		var sel = $("#banner_sel").val();
		var tel = $("#banner_tel").val();
		if (!checkPhone_mask(tel)) {
			$(".banner_wrong").show();
            document.getElementById("banner_tel").focus();
            $("#banner_tel").css({border:"1px solid #ff7777"});
			return false;	
		}
		$.post("apply.php", {
			act : 'zx',
            phone:tel,
			city_id:city_id,
			size:sel	
            }, function(data) {
                if (data == 1 ) {
                    $(".banner_wrong").hide();
                    showSuccess();
					tongji();
                }else if(data == 'error')
				{
                    $(".banner_wrong").hide();
					alert('您已经报过名啦，请注意查收短信')
				} 
				else 
				{
                    alert('请联系装修管家：400-8617-000');
                }
            });
	});
	//量房报名
	$("#lf_b").click(function(){
		var sel = $("#lf_sel").val();
		var tel = $("#lf_tel").val();
		
		if (!checkPhone_mask(tel)) {
			$(".serve_wrong_lf").show();
            $("#lf_tel").css({border:"1px solid #ff7777"});
            document.getElementById("lf_tel").focus();
			return false;	
		}
		
		$.post("apply.php", {
             act : 'zx',
            phone:tel,
			city_id:city_id,
			size:sel   
            }, function(data) {
                if (data == 1 ) {
                    showSuccess();
					tongji();
                    $(".serve_wrong_lf").hide();
                }
				else if(data == 'error')
				{
                    $(".serve_wrong_lf").hide();
					alert('您已经报过名啦，请注意查收短信')
				}
				else {
                    alert('请联系装修管家：400-8617-000');
                }
            });
	});
	//设计报名
	$("#sj_b").click(function(){
		var sel = $("#sj_sel").val();
		var tel = $("#sj_tel").val();
		
		if (!checkPhone_mask(tel)) {
			$(".serve_wrong_sj").show();
            document.getElementById("sj_tel").focus();
            $("#sj_tel").css({border:"1px solid #ff7777"});
			return false;	
		}
		
		$.post("apply.php", {
              act : 'zx',
            phone:tel,
			city_id:city_id,
			size:sel  
            }, function(data) {
                if (data == 1 ) {
                    $(".serve_wrong_sj").hide();
                    showSuccess();
					tongji();
                }
				else if(data == 'error')
				{
                    $(".serve_wrong_sj").hide();
					alert('您已经报过名啦，请注意查收短信')
				}
				else {
                    alert('请联系装修管家：400-8617-000');
                }
            });
	});
	//报价报名
	$("#bj_b").click(function(){
		var sel = $("#bj_sel").val();
		var tel = $("#bj_tel").val();
		
		if (!checkPhone_mask(tel)) {
			$(".serve_wrong_bj").show();
            document.getElementById("bj_tel").focus();
            $("#bj_tel").css({border:"1px solid #ff7777"});
			return false;	
		}
		
		$.post("apply.php", {
             act : 'zx',
            phone:tel,
			city_id:city_id,
			size:sel   
            }, function(data) {
                if (data == 1 ) {
                    $(".serve_wrong_bj").hide();
                    showSuccess();
					tongji();
                }
				else if(data == 'error')
				{
                    $(".serve_wrong_bj").hide();
					alert('您已经报过名啦，请注意查收短信')
				}
				else {
                    alert('请联系装修管家：400-8617-000');
                }
            });
	});
	//监理报名
	$("#jl_b").click(function(){
		var sel = $("#jl_sel").val();
		var tel = $("#jl_tel").val();
		
		if (!checkPhone_mask(tel)) {
            $(".serve_wrong_jl").show();
            document.getElementById("jl_tel").focus();
            $("#jl_tel").css({border:"1px solid #ff7777"});
			return false;	
		}
		
		$.post("apply.php", {
             act : 'zx',
            phone:tel,
			city_id:city_id,
			size:sel   
            }, function(data) {
                if (data == 1 ) {
                    $(".serve_wrong_jl").hide();
                    showSuccess();
					tongji();
                }else if(data == 'error')
					{
                        $(".serve_wrong_jl").hide();
						alert('您已经报过名啦，请注意查收短信')
					} else {
                    alert('请联系装修管家：400-8617-000');
                }
            });
	});
	//底部浮动报名
	$(".askFree_button").click(function(){
		var tel = $("#float_input").val();
		
		if (!checkPhone_mask(tel)) {
            $(".float_wrong").show();
            $("#float_input").css({border:"1px solid #ff5151"});
            document.getElementById("float_input").focus();
			return false;	
		}
		
		$.post("apply.php",{
		act : 'zx',
		city_id:city_id,
            phone:tel
		},function(data){
			if (data == 1 ) {
                $(".float_wrong").hide();
                    showSuccess();
					tongji();
                }else if(data == 'error')
					{
                        $(".float_wrong").hide();
					    alert('您已经报过名啦，请注意查收短信')
					} else {
                        alert('请联系装修管家：400-8617-000');
                }
		});
	});
});
function showSuccess(){
	$(".togo_bm_success").css("display", "block");
    $(".info_success").css("display", "block");
    $(".mask").show();
}


	
/*统计代码*/
function tongji()
{
	//统计代码
	var _mvq = window._mvq || []; 
	window._mvq = _mvq;
	_mvq.push(['$setAccount', 'm-121645-0']);
	_mvq.push(['$setGeneral', 'registered', '', /*用户名*/ '', /*用户id*/ Math.random()]);
	_mvq.push(['$logConversion']);
}
	
//轮播
$(function(){
    $("#carousel-container").carousel();
})
