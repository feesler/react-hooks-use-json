<?php

function encode($obj)
{
    return json_encode($obj, JSON_UNESCAPED_UNICODE);
}

$res = ["status" => "Internal Error"];

echo (encode($res));

header("HTTP/1.1 500 Internal Error", true, 500);
