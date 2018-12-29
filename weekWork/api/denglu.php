<?php
    $Uhaoma = isset($_GET["Uhaoma"])?$_GET["Uhaoma"]:null;
    $Umima = isset($_GET["Umima"])?$_GET["Umima"]:null;
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
    $res = $conn->query('select * from zhucebiao where haoma="'.$Uhaoma.'"');
    if($res->num_rows > 0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        if($content[0]['mima']==$Umima){
            echo "登录成功！即将为您跳转到主页";
        }else{
            echo "登录失败！用户名或密码错误";
        };
    }else{
        echo "此账号未注册！";
    }
    $res->close();
    $conn->close();



?>