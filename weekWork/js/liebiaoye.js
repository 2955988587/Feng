/* 
* @Author: Marte
* @Date:   2018-12-25 17:22:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-27 19:55:27
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


    //======开始列表页的渲染==========
    var $shangpin = $(".shangpinlie");
    var goodsarr = [];
    var arr = [];

    $.ajax({
        type:'get',
        url:"../api/liebiaoye.php",
        async:false,
        success: function(res){
            goodsarr = JSON.parse(res);
            arr = goodsarr.slice(0,40)
            liebiao(arr);
        }
    })

    //点击翻页==========================
    var $xiayiye = $(".xiayiye");
    var $shangyiye = $(".shangyiye");
    var brr = [];
    var $yeshu = $(".yeshu");
    brr = goodsarr.slice(40,80)
    arr = goodsarr.slice(0,40)
    $xiayiye.on("click",function(){
        liebiao(brr);
        $yeshu.html(2);
    })
    $shangyiye.on("click",function(){
        liebiao(arr);
        $yeshu.html(1);
    })

    //点击排序=====================
    //价格================
    var $orderPrice = $(".orderPrice");
    var $orderPY = $(".orderPY");
    var crr = [];
    var show;
    $orderPrice.on("click",function(){
        if(show){
            goodsarr = goodsarr.sort(function(a,b){
                return b.price - a.price;
            })
            crr = goodsarr.slice(0, 40)
            liebiao(crr);
        }
        if(!show){
            goodsarr = goodsarr.sort(function(a,b){
                return a.price-b.price;
            })
            crr = goodsarr.slice(0,40)
            liebiao(crr);
        }
        show = !show;
    })
    //=======销量=========
    $orderPY.on("click",function(){
        if(show){
            goodsarr = goodsarr.sort(function(a,b){
                return b.chenjiao - a.chenjiao;
            })
            crr = goodsarr.slice(0,40);
            liebiao(crr);
        }
        if(!show){
            goodsarr = goodsarr.sort(function(a,b){
                return a.chenjiao - b.chenjiao;
            })
            crr = goodsarr.slice(0,40);
            liebiao(crr);
        }
        show =!show;
    })
    //    时间==================
    var $orderTime = $(".orderTime");
    $orderTime.on("click",function(){
        if(show){
            goodsarr = goodsarr.sort(function(a,b){
                return a.timer - b.timer;
            })
            crr = goodsarr.slice(0,40);
            console.log(666)
            liebiao(crr);
        }
        if(!show){
            goodsarr = goodsarr.sort(function(a,b){
                return b.timer - a.timer;
            })
            crr = goodsarr.slice(0,40);
            liebiao(crr);
        }
        show =!show;
    })
    //=============默认排序idx==========
    var $orderIdx = $(".orderIdx");
    $orderIdx.on("click",function(){
        goodsarr = goodsarr.sort(function(a,b){
            return a.idx-b.idx;
        })
        crr = goodsarr.slice(0, 40);
        liebiao(crr);
    })

    //封装函数======================
    function liebiao(arr){
        $shangpin.html(arr.map(function(item){
            return  `<li class="shangLi">
                        <a href="../html/xiangqingye.html?idx=${item.idx}">
                            <img src="${item.imgurl}">
                        </a>
                        <div class="jiage">
                            <strong>￥ ${item.price}</strong>
                            <p>成交${item.chenjiao}</p>
                        </div>
                        <span class="span1">${item.title}</span>
                        <span class="span2">${item.dizhi}</span>
                    </li>`;
        }).join(""))
    }
})