<?php

function encode($obj)
{
    return json_encode($obj, JSON_UNESCAPED_UNICODE);
}

$res = ["status" => "ok"];

echo (encode($res));
