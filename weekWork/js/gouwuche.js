/* 
* @Author: Marte
* @Date:   2018-12-27 01:13:00
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-29 11:06:14
*/

jQuery(function($){

    //购物车渲染===============
    var $message = $(".message");
    var $Allp = $(".Allp");

   var zong =0;
    $.ajax({
    type:'get',
    url:`../api/gouwuche.php`,
    async:false,
    success:function(res){
        res = JSON.parse(res);
        var len = res.length;
        for(var i=0;i<len;i++){
            var arr = res[i];
            $message.append(`<div class="xianshi" data-idx="${arr[0]['idx']}">
                <div class="gouxuan">
                    <input type="checkbox" class="xuanzhong">
                </div>
                <div class="real">
                    <img class="xianshiImg" src="${arr[0]['imgurl']}">
                    <p class="xianshiName">${arr[0]['title']}</p>
                </div>
                <div class="xianshiPrice">
                    ${arr[0]['price']}
                </div>
                <div class="xianshiQua">
                    <div class="formm">
                        <a class="delbtn">减</a>
                        <input type="text" class="ssx" value="${arr[1]}">
                        <a class="addbtn">加</a>
                    </div>
                </div>
                <div class="xianshiDEL">
                    <a>删除</a>
                </div>
                <div class="xiaoji">
                    ￥${arr[1] * arr[0]['price']}
                </div>
            </div>`)
            zong += arr[1]*arr[0]['price']
        }
    $Allp.html('￥'+zong)
    }
    })

    
    //=========点击减少件数并传到数据库修改
    var $jianshu = $(".ssx");
    var $delbtn = $(".delbtn");
    var $addbtn = $(".addbtn");
    $delbtn.on("click",function(){
        var qty = $(this).next().val();
        if(qty>1){
            qty--;
        }
        $(this).next().val(qty);
        var idx = $(this).closest(".xianshi").data('idx');
        var $jiage = $(this).closest('.xianshi').find(".xianshiPrice").html().slice(1);
        console.log($jiage)
        var $xiaoji = $(this).closest('.xianshi').find('.xiaoji');
        $xiaoji.html('￥' + $jiage * qty);
        //准备给总价渲染的，。。卡死
        zong =0;
        var $xuanzhong = $(".xianshi :checked");
        for(var i=0;i<xuanzhong.length;i++){
            var $xiaoji = $xuanzhong.eq(i).closest('.xianshi').find('.xiaoji').html();
            console.log($xiaoji)
            zong += $xiaoji;
        }
        $Allp.html('￥'+zong)
        $.ajax({
            type:'get',
            url:`../api/gouwuche.php?idx=${idx}&qty=${qty}`,
        })
    })
})