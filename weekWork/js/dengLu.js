/* 
* @Author: Marte
* @Date:   2018-12-24 10:14:37
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-28 10:56:28
*/

jQuery(function($){
    var $a1 = $(".a1");
    var $zhanghu = $(".zhanghu");
    var $con = $(".content");
    var $zhanghao = $(".zhanghao");
    var $ul = $(".tab ul");
    $a1.css("color",'red');
    $zhanghu.on("click",function(){
        $zhanghao.css('display','block');
        $con.css('display','none');
        $zhanghu.css("color",'red');
        $a1.css("color",'black');
    })
    $a1.on("click",function(){
        $zhanghao.css('display','none');
        $con.css('display','block');
        $zhanghu.css("color",'black');
        $a1.css("color",'red');
    })

    var $yonghuming = $(".yonghuming");
    var $passmm = $(".passmm");
    var $denglubtn = $(".denglubtn");
    $denglubtn.on("click",function(){
        console.log(666)
        if($yonghuming.val() != '' && $passmm.val()!=''){
            $.ajax({
                type:"get",
                url:`../api/denglu.php?Uhaoma=${$yonghuming.val()}&Umima=${$passmm.val()}`,
                success:function(res){
                    if(res.indexOf('成功') != -1){
                        window.location.href = "../index.html";
                    }else{
                        alert(res)
                    }
                }
            })
        }else{
            alert("重新输入账号和密码")
        }
    })
})