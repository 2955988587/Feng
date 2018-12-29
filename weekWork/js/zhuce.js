/* 
* @Author: Marte
* @Date:   2018-12-23 18:02:15
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-28 16:08:29
*/
jQuery(function($){
    var $cellinput = $(".cellinput");
    var $cell = $(".cell");
    var $cell1 = $(".cell1");
    var $cell2 = $(".cell2");
    var $pass1 = $('.pass1');
    var $pass2 = $('.pass2');
    var $pass3 = $('.pass3');
    var $passinput = $('.passinput');
    var $passinput1 = $('.passinput1');
    var $again = $(".again");
    var $again1 = $(".again1");
    var $again2 = $(".again2");
    var $codbtn = $('.codbtn');
    var $codinput = $(".codinput");
    var $yanzhengma = $(".yanzhengma");
    var $warning = $('.warning');
    var $label = $('.label')
    var $tijiao = $(".querenbtn")
        var phone = /^1[34578]\d{9}$/;
        var pass = /^[\\p{Punct}a-zA-Z0-9]{6,20}$/;

        //电话号码注册
        $cellinput.on("click",function(){
            $cell1.css("display",'block');
            $cell.css("border-color",'#58bc58');
        })
        $cellinput.blur(function(){
            if(!phone.test($cellinput.val())){
                     
                $cell1.css("display",'none');
                $cell2.css("display",'block');
                $cell.css("border-color",'#ccc');
            }else{
                $cell1.css("display",'none');
                $cell2.css("display",'none');
                $cell.css("border-color",'#ccc');
            }
        })
        //密码注册
        $passinput.on('click',function(){
            $pass1.css('display','block');
            $pass3.css('border-color','green');
        })
        $passinput.blur(function(){
            if($passinput.val().length>=6 && $passinput.val().length<=20 && $passinput.val().indexOf(" ") == -1){
                $pass1.css("display",'none');
                $pass2.css("display",'none');
                $pass3.css("border-color",'#ccc');
            }else{
                $pass1.css('display','none');
                $pass2.css("display",'block');
                $pass3.css('border-color','#ccc');
            }
        })

        //===========密码验证
        $passinput1.on('click',function(){
            $again.css('display','block');
            $again1.css('border-color','green');
        })
        $passinput1.blur(function(){
            if($passinput.val() == $passinput1.val()){
                $again.css('display','none');
                $again2.css('display','none');
                $again1.css('border-color','#ccc');
            }else{
                $again.css('display','none');
                $again2.css('display','block');
                $again1.css('border-color','#ccc');
            }
        })

        //============验证码
        $codbtn.on('click',function(){
            $codinput.focus();
            $codinput.css('border-color','green');
            var $num = '';
            $yanzhengma.css("display",'block')
            for(var i = 0;i<6;i++){
                $num += Math.floor(Math.random()*10)
                $yanzhengma.html($num);
            }
        })
        $codinput.blur(function(){
            if($yanzhengma.html() != $codinput.val()){
                $warning.css("display",'block');
            }
        })

        $tijiao.on("click",function(){
            if($(".input").val() == ""){
                alert('文本框不为空');
                return false;
            }else{
                var register = true;
                $ .ajax({
                    type:"get",
                    url:`../api/zhuce.php?haoma=${$cellinput.val()}&mima=${$passinput1.val()}&register=${register}`,
                    success: function(res){
                        alert(res);
                        if(res.indexOf('成功') != -1){
                            window.location.href = "denglu.html";
                        }
                    }
                })
            }
        })

})
//===================================

    

    
