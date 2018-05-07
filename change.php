<?php
if (array_key_exists('psw', $_REQUEST) && array_key_exists('psw2', $_REQUEST)
    && $_REQUEST['psw'] === $_REQUEST['psw2'] ) {
    echo '<br>'.'Slaptažodis sėkmingai pakeistas'.'<br>'.'<br>';
    echo json_encode($_REQUEST);
    return true;
}
echo '<br>'.'Slaptažodžiai nesutampa, pakartokite dar kartą ';
return false;
