<?php
header('Content-Type: text/html');
echo "MUH! <br>";
print_r($_GET);

if (isset($_GET['r'])) {
    echo $_GET['r'];
    switch ($_GET['r']) {
        case 'nw10og1':
            include 'nagelsweg10_og_1.svg';
        break;
        case 'nw10og2':
            include 'nagelsweg10_og_2.svg';
        break;
        default:
            echo '<p>Keine Raumkarte verfügbar</p>';        
    }
}
//include 'nagelsweg10_og_1.svg';