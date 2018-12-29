<?php

    $idx = isset($_GET["idx"])?$_GET["idx"]:null;
    $register = isset($_GET["register"])?$_GET["register"]:null;
    $qty = isset($_GET["qty"])?$_GET["qty"]:1;
    $shanchu = isset($_GET["shanchu"])?$_GET["shanchu"]:null;

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

    if($register){
        //数据库添加数据
        $res = $conn->query('select * from gouwuche where idx="'.$idx.'"');
        if($res->num_rows > 0){
            $content = $res->fetch_all(MYSQLI_ASSOC);
            $qty = (int)($content[0]['qty']) + $qty;

            //修改qty
            $res = $conn->query('update gouwuche set qty = '.$qty.' where idx='.$idx);

            //传出用于渲染的商品总件数
            $zongqty = 0;
            $res = $conn->query('select * from gouwuche');
            $content = $res->fetch_all(MYSQLI_ASSOC);
            $conlen = count($content);
            for($i=0;$i<$conlen;$i++){
                $zongqty += $content[$i]['qty'];
            }
            echo json_encode($zongqty);

        }else{
            // 写入数据库中的新商品
            $res = $conn->query('insert into gouwuche (idx,qty) values ('.$idx.','.$qty.')');
            //  *需要传出商品的总件数
            $zongqty = 0;
            $res = $conn->query('select * from gouwuche');
            $content = $res->fetch_all(MYSQLI_ASSOC);
            $conlen = count($content);
            for($i=0;$i<$conlen;$i++){
                $zongqty += $content[$i]['qty'];
            }
            echo json_encode($zongqty);
        }
        $res->close();
        $conn->close();
    }else if($shanchu){

    }else{
        //由idx查询，然后返回===========
        $res = $conn->query('select * from gouwuche');
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $conlen = count($content);
        $arr = array();
        for($j=0;$j<$conlen;$j++){
            $res = $conn->query('select * from firstshouye where idx="'.$content[$j]['idx'].'"');
            $con = $res->fetch_all(MYSQLI_ASSOC);
            $con[] = $content[$j]['qty'];
            $arr[] = $con;
        }
        echo json_encode($arr);
        $res->close();
        $conn->close();
    }
?>