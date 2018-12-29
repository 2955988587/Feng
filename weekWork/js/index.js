/* 
* @Author: Marte
* @Date:   2018-12-24 15:09:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-27 18:44:38
*/
jQuery(function($){
    // var show = true;
    // var $searchfenlei = $(".searchfenlei");
    // var $xialabtn = $('.xialabtn');
    // $xialabtn.on("click",function(){
    //     if(show){
    //         $searchfenlei.css('display','block');

    //     }
    //     if(!show){
    //         $searchfenlei.css('display','none');
    //     }
    //     show =!show;
    // })
    // 
    var $erjidaohuang = $('.erjidaohuang');
    var $li = $('.erjidaohuang li');
    var $fenqu = $('.fenqu');
    $li.on('mouseover',function(){
        $fenqu.css('display','block');
    })
    $fenqu.on('mouseout',function(){
        $fenqu.css('display','none');
    })

    //==========轮播图===========
    var $focus = $(".focus");
    var $ul = $(".ulbox");
    var $firstImg = $($(".ulbox img")[0]);
    var $cloneLi = $($(".ulbox li")[0]).clone(true);
    $ul.append($cloneLi);
    var $len = $ul.children().length;
    var idx = 0;
    var timer;
    var $page = $("<div/>");

    $ul.width($firstImg.width()*$len);
    $focus.width($firstImg.width());
    autoplay();

    $focus.on("mouseover",function(){
                clearInterval(timer);
            })
    $focus.on("mouseout",function(){
        autoplay();
    })

    function autoplay(){
                timer = setInterval(function(){
                    idx++;
                    if(idx == 7 ){
                        $ul.css("left",0);
                        idx = 1;
                    }
                    $ul.animate({left:-$firstImg.width()*idx}, 1000);
                },3000)
            }

    //==================版心轮播图左边那个=============
    var $box = $(".box");
    var $boxul = $(".boxul");
    var $box1 = $(".box1");
    var $clone1 = $box1.clone(true);
    $boxul.append($clone1);
    var $len1 = $boxul.children().length;
    var i = 0;
    var timer1;

    $boxul.width($clone1.width()*$len1);
    $box.width($clone1.width());
    // automove();

    function automove(){
        timer1 = setInterval(function(){
            console.log(666);
            i++;
            if(i == 4 ){
                $boxul.css("left",0);
                i = 1;
            }
            console.log(777);
            $boxul.animate({left:-$clone1.width()*i}, 500);
        },2000)
    }

    //====================底部轮播图-.-
    var $BD_warp = $(".BD_warp");
    var $scroll_warp = $(".scroll_warp");
    var $zuobtn = $(".zuobtn");
    var $youbtn = $(".youbtn");
    var $warp1 = $(".warp1");
    var $clonediv = $warp1.clone(true);
    $scroll_warp.append($clonediv)
    var $lens = $scroll_warp.children().length;
    var n = 0;

    $zuobtn.on("click",function(){
        n--;
        if(n<0){
            $scroll_warp.css("left",-$warp1.width()*3);
            n = 2;
        }
        $scroll_warp.animate({left:-$warp1.width()*n}, 500);
    })
    $youbtn.on("click",function(){
        n++;
        if(n == 4){
            $scroll_warp.css("left",0);
            n = 1;
        }
        $scroll_warp.animate({left:-$warp1.width()*n}, 500);
    })


    //================返回顶部====================
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



    //首页分区======================
    
    var $zq = $(".zq");
    var $fb = $(".fb");
    var $mua = $(".mua")
    var $lil = $(".zq li");

    $lil.eq(0).css("color",'red');
    $mua.eq(0).css('display','block');
    // console.log($mua.eq(0))
    // for(var i =0;i<$lil.length;i++){
    //     $lil.on("mouseover",function(){
    //         for(var j = 0;j<$lil.length;j++){
    //             $lil.eq(j).css("color",'black');
    //             console.log(666)
    //             $mua.eq(j).css("display",'none');
    //         }
    //         $lil.eq(i).css("color",'red');
    //         $mua.eq(i).css('display','block');
    //     })
    // }

    $lil.eq(0).on("mouseover",function(){
        $lil.eq(0).css("color",'red');
        $lil.eq(1).css("color",'black');
        $lil.eq(2).css("color",'black');
        $lil.eq(3).css("color",'black');
        $mua.eq(0).css('display','block');
        $mua.eq(1).css('display','none');
        $mua.eq(2).css('display','none');
        $mua.eq(3).css('display','none');
    })
    $lil.eq(1).on("mouseover",function(){
        $lil.eq(0).css("color",'black');
        $lil.eq(1).css("color",'red');
        $lil.eq(2).css("color",'black');
        $lil.eq(3).css("color",'black');
        $mua.eq(0).css('display','none');
        $mua.eq(1).css('display','block');
        $mua.eq(2).css('display','none');
        $mua.eq(3).css('display','none');
    })

    $lil.eq(2).on("mouseover",function(){
        $lil.eq(0).css("color",'black');
        $lil.eq(1).css("color",'black');
        $lil.eq(2).css("color",'red');
        $lil.eq(3).css("color",'black');
        $mua.eq(0).css('display','none');
        $mua.eq(1).css('display','none');
        $mua.eq(2).css('display','block');
        $mua.eq(3).css('display','none');
    })

    $lil.eq(3).on("mouseover",function(){
        $lil.eq(0).css("color",'black');
        $lil.eq(1).css("color",'black');
        $lil.eq(2).css("color",'black');
        $lil.eq(3).css("color",'red');
        $mua.eq(0).css('display','none');
        $mua.eq(1).css('display','none');
        $mua.eq(2).css('display','none');
        $mua.eq(3).css('display','block');
    })
    //===================================
    var $zf = $(".zf");
    var $qb = $(".qb");
    var $gun = $(".gun")
    var $lol = $(".zf li");

    $lol.eq(0).css("color",'red');
    $gun.eq(0).css('display','block');
    
    $lol.eq(0).on("mouseover",function(){
        $lol.eq(0).css("color",'red');
        $lol.eq(1).css("color",'black');
        $lol.eq(2).css("color",'black');
        $lol.eq(3).css("color",'black');
        $gun.eq(0).css('display','block');
        $gun.eq(1).css('display','none');
        $gun.eq(2).css('display','none');
        $gun.eq(3).css('display','none');
    })
    $lol.eq(1).on("mouseover",function(){
        $lol.eq(0).css("color",'black');
        $lol.eq(1).css("color",'red');
        $lol.eq(2).css("color",'black');
        $lol.eq(3).css("color",'black');
        $gun.eq(0).css('display','none');
        $gun.eq(1).css('display','block');
        $gun.eq(2).css('display','none');
        $gun.eq(3).css('display','none');
    })

    $lol.eq(2).on("mouseover",function(){
        $lol.eq(0).css("color",'black');
        $lol.eq(1).css("color",'black');
        $lol.eq(2).css("color",'red');
        $lol.eq(3).css("color",'black');
        $gun.eq(0).css('display','none');
        $gun.eq(1).css('display','none');
        $gun.eq(2).css('display','block');
        $gun.eq(3).css('display','none');
    })

    $lol.eq(3).on("mouseover",function(){
        $lol.eq(0).css("color",'black');
        $lol.eq(1).css("color",'black');
        $lol.eq(2).css("color",'black');
        $lol.eq(3).css("color",'red');
        $gun.eq(0).css('display','none');
        $gun.eq(1).css('display','none');
        $gun.eq(2).css('display','none');
        $gun.eq(3).css('display','block');
    })


    //================================
    var $aa = $(".aa");
    var $bb = $(".bb");
    var $cao = $(".cao")
    var $dnf = $(".aa li");

    $dnf.eq(0).css("color",'red');
    $cao.eq(0).css('display','block');
    
    $dnf.eq(0).on("mouseover",function(){
        $dnf.eq(0).css("color",'red');
        $dnf.eq(1).css("color",'black');
        $dnf.eq(2).css("color",'black');
        $dnf.eq(3).css("color",'black');
        $cao.eq(0).css('display','block');
        $cao.eq(1).css('display','none');
        $cao.eq(2).css('display','none');
        $cao.eq(3).css('display','none');
    })
    $dnf.eq(1).on("mouseover",function(){
        $dnf.eq(0).css("color",'black');
        $dnf.eq(1).css("color",'red');
        $dnf.eq(2).css("color",'black');
        $dnf.eq(3).css("color",'black');
        $cao.eq(0).css('display','none');
        $cao.eq(1).css('display','block');
        $cao.eq(2).css('display','none');
        $cao.eq(3).css('display','none');
    })

    $dnf.eq(2).on("mouseover",function(){
        $dnf.eq(0).css("color",'black');
        $dnf.eq(1).css("color",'black');
        $dnf.eq(2).css("color",'red');
        $dnf.eq(3).css("color",'black');
        $cao.eq(0).css('display','none');
        $cao.eq(1).css('display','none');
        $cao.eq(2).css('display','block');
        $cao.eq(3).css('display','none');
    })

    $dnf.eq(3).on("mouseover",function(){
        $dnf.eq(0).css("color",'black');
        $dnf.eq(1).css("color",'black');
        $dnf.eq(2).css("color",'black');
        $dnf.eq(3).css("color",'red');
        $cao.eq(0).css('display','none');
        $cao.eq(1).css('display','none');
        $cao.eq(2).css('display','none');
        $cao.eq(3).css('display','block');
    })

    //=========================

    var $cc = $(".cc");
    var $dd = $(".dd");
    var $emm = $(".emm")
    var $vf = $(".cc li");

    $vf.eq(0).css("color",'red');
    $emm.eq(0).css('display','block');
    
    $vf.eq(0).on("mouseover",function(){
        $vf.eq(0).css("color",'red');
        $vf.eq(1).css("color",'black');
        $vf.eq(2).css("color",'black');
        $vf.eq(3).css("color",'black');
        $emm.eq(0).css('display','block');
        $emm.eq(1).css('display','none');
        $emm.eq(2).css('display','none');
        $emm.eq(3).css('display','none');
    })
    $vf.eq(1).on("mouseover",function(){
        $vf.eq(0).css("color",'black');
        $vf.eq(1).css("color",'red');
        $vf.eq(2).css("color",'black');
        $vf.eq(3).css("color",'black');
        $emm.eq(0).css('display','none');
        $emm.eq(1).css('display','block');
        $emm.eq(2).css('display','none');
        $emm.eq(3).css('display','none');
    })

    $vf.eq(2).on("mouseover",function(){
        $vf.eq(0).css("color",'black');
        $vf.eq(1).css("color",'black');
        $vf.eq(2).css("color",'red');
        $vf.eq(3).css("color",'black');
        $emm.eq(0).css('display','none');
        $emm.eq(1).css('display','none');
        $emm.eq(2).css('display','block');
        $emm.eq(3).css('display','none');
    })

    $vf.eq(3).on("mouseover",function(){
        $vf.eq(0).css("color",'black');
        $vf.eq(1).css("color",'black');
        $vf.eq(2).css("color",'black');
        $vf.eq(3).css("color",'red');
        $emm.eq(0).css('display','none');
        $emm.eq(1).css('display','none');
        $emm.eq(2).css('display','none');
        $emm.eq(3).css('display','block');
    })

    //=================php数据库接受数据==================
        
    var $floor_mid = $(".floor_mid");
    var indexarr = [];
    var arr = [];
    $.ajax({
        type:"get",
        url:"api/index.php",
        async:false,
        success:function(res){
            indexarr = JSON.parse(res);
            arr = indexarr.slice(0, 10)
            index(arr);
            console.log(arr);
        }
    })


    //===================封装index的渲染函数=======
    function index(arr){
        $floor_mid.html(arr.map(function(item){
            return  `<li class="xr">
                        <a href="html/liebiaoye.html">
                        <img src="${item.imgurl}">
                        </a>
                    </li>`;
        }).join(""))
    }
})

  