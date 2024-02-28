<?php

function encode($obj)
{
    return json_encode($obj, JSON_UNESCAPED_UNICODE);
}

$res = ["status" => "ok"];

sleep(5);

echo (encode($res));
