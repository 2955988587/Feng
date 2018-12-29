<?php
    $haoma = isset($_GET["haoma"])?$_GET["haoma"]:null;
    $mima = isset($_GET["mima"])?$_GET["mima"]:null;
    $register = isset($_GET["register"])?$_GET["register"]:null;

    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "goodlist";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from zhucebiao where haoma="'.$haoma.'"');
    if($res->num_rows > 0){
        echo "该手机号已注册！";
    }else{
        if($register){
            $res = $conn->query('insert into zhucebiao (haoma,mima) values ('.$haoma.','.$mima.')');
            if($res){
                echo "注册成功！即将为您跳转到登录页";
            }else{
                echo "注册失败！请重新注册！";
            }
        }
    }
?>














