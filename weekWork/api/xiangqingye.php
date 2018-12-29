<?php

    $idx = isset($_GET["idx"])?$_GET['idx'] : null;

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
    
    $res = $conn->query('select * from firstshouye where idx="'.$idx.'"');
    if($res->num_rows > 0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $content = json_encode($content,JSON_UNESCAPED_UNICODE);
        echo $content;
    }else{
        echo "";
    }
    $res->close();
    $conn->close();


?>