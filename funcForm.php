<?php
    sleep(5);
    // echo "succeess";

    echo "[name] is -- ".$_POST[name];.",   [password] is -- ".$_POST[password];
    if (($_POST[name] == "qqq") && ($_POST[password] == "111"))
        echo "success";
    else
        echo "fail".$_POST[name];
?>
