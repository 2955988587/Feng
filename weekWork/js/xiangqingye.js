/* 
* @Author: Marte
* @Date:   2018-12-26 10:16:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-29 11:18:44
*/
jQuery(function($){
    var $erjinav = $(".erjinav");
    var $erjidaohuang = $(".erjidaohuang");
    var $fenqu = $(".fenqu");
    $erjinav.on('mouseover',function(){
        $erjidaohuang.css("display",'block');
    })
    $erjidaohuang.on('mouseover',function(){
        $fenqu.css("display",'block');
    })
    $fenqu.on("mouseleave",function(){
        $erjidaohuang.css("display",'none');
        $fenqu.css("display",'none');
    })

    var $saoma = $(".saoma");
    var $ma = $(".ma");
    $saoma.on("mouseover",function(){
        $ma.css("display",'block')
    })
    $ma.on("mouseleave",function(){
        $ma.css("display",'none')
    })

    var $ul1 = $(".ul1");
    var $ul2 = $(".ul2");
    var $p1 = $(".p1");
    var $p2 = $(".p2");
    $p2.on("mouseover",function(){
        $ul2.css("display",'block');
        $ul1.css("display",'none');
    })
    $p1.on("mouseover",function(){
        $ul2.css("display",'none');
        $ul1.css("display",'block');
    })

    var $go_top = $(".go_top");
    $go_top.on("click",function(){
        console.log(666);
        var times;
        clearInterval(times);
        times = setInterval(function(){
            var $top = window.scrollY;
            $top -= 1000;
            if($top <= 0){
                clearInterval(times);
            }
            window.scrollBy(0, -1000);
        },50)
    })

    var $user = $(".user");
    var $geren =$(".geren");
    $user.on("mouseover",function(){
        $user.css("background",'red');
        $geren.css("display","block");
        $geren.animate({right:40}, 300);
        $geren.fadeTo('100', 1);
    })
    $user.on("mouseout",function(){
        $user.css("background",'#000');
        $geren.css("display","none");
        $geren.animate({right:60}, 1)
    })

    var $qianbao = $(".qianbao");
    var $qianbao2 = $(".qianbao2");
    $qianbao.on("mouseover",function(){
        $qianbao.css("background",'red');
        $qianbao2.css("display","block");
        $qianbao2.animate({right:40}, 300);
        $qianbao2.fadeTo('100', 1);
    })
    $qianbao.on("mouseout",function(){
        $qianbao.css("background",'#000');
        $qianbao2.css("display","none");
        $qianbao2.animate({right:60}, 1)
    })

    var $aixin = $(".aixin");
    var $guanzhu = $(".guanzhu");
    $aixin.on("mouseover",function(){
        $aixin.css("background",'red');
        $guanzhu.css("display","block");
        $guanzhu.animate({right:40}, 300);
        $guanzhu.fadeTo('100', 1);
    })
    $aixin.on("mouseout",function(){
        $aixin.css("background",'#000');
        $guanzhu.css("display","none");
        $guanzhu.animate({right:60}, 1)
    })

    var $colock = $(".colock");
    var $jilu = $(".jilu");
    $colock.on("mouseover",function(){
        $colock.css("background",'red');
        $jilu.css("display","block");
        $jilu.animate({right:40}, 300);
        $jilu.fadeTo('100', 1);
    })
    $colock.on("mouseout",function(){
        $colock.css("background",'#000');
        $jilu.css("display","none");
        $jilu.animate({right:60}, 1)
    })

    var goodsarr = [];
    var $biaoti = $(".biaoti");
    var $biaoti2 = $(".biaoti2");
    var $price1 = $(".price1");
    var $fangda = $("#fangda");
    var $xiaoimg = $(".xiaoimg");
    var obj;
    var params = location.search.slice(1);
    var idx = (params.split('='))[1];
    var $xiao = $(".xiao");
    $.ajax({
        type:"get",
        url:`../api/xiangqingye.php?idx=${idx}`,
        success: function(res){
            obj = (JSON.parse(res))[0];
            $xiaoimg.attr('src',obj['imgurl']);
            $biaoti.html(obj['title']);
            $biaoti2.html(obj['title']);
            $price1.html(obj['price']);
            $xiao.html(obj['chenjiao']);
        }
    })

    //加减件数=====================
    var $jianbtn = $(".jianbtn");
    var $jianshu = $(".jianshu");
    var $addbtn = $(".addbtn");
    $addbtn.on("click",function(){
        var val = Number($jianshu.val())+1
        $jianshu.val(val);
    })
    $jianbtn.on("click",function(){
        var val = $jianshu.val()-1;
        if(val<=0){
            val =1;
        }
        $jianshu.val(val);
    })
     
    //加入购物车=================
    var $addCat = $(".gouwuchebtn");
    $addCat.on("click",function(){
        var $qty = Number($jianshu.val());
        $.ajax({
            type:'get',
            url:`../api/gouwuche.php?idx=${idx}&qty=${$qty}&register=true`,
            success:function(res){
                console.log(idx)
                console.log($qty)
                $(location).attr('href', 'http://localhost/H5_1810/html/gouwuche.html')
            }
        })
    })


})
$(document).ready(function(){
        $('#container').jxfZoomy({
            smallBoxW: 350,//小图框的宽 单位px 默认250px
            smallBoxH: 352,//小图框的高 单位px 默认250px
            bigBoxW: 400, //大图放大镜框的宽 单位px 默认350px
            bigBoxH: 352, //大图放大镜框的高 单位px 默认350px
            smallListImgW:52,//缩略图的宽 单位px 默认50px
            smallListImgH:52,//缩略图的高 单位px 默认50px
            moveSpeed:100 //缩略图点击左右方向键移动的速度 单位px 默认50px
            });
    })