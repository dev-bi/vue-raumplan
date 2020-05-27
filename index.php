<?php
/**
 * Mein Super simpler winziger Router
 * siehe: https://www.taniarascia.com/the-simplest-php-router/
 */
mb_http_output('UTF-8');
mb_internal_encoding("UTF-8");

$baseUrl = 'http://localhost/vue-tuts';
$baseRoute = '/vue-tuts';
$apiSubroute = '/api';
$roomdataEndpoint = '/roomdata';

$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];
$query = $_SERVER['QUERY_STRING'];

$isApiCall = preg_match('#' . $baseRoute . '\/api' . '\/roomdata\?r=(.)*#', $request);

/*
* Falls ein API Aufruf, dann den Request für den Router anpassen
* Abschneiden des querystrings inklusive dem ?
*/

print_r($request);
if($isApiCall) {
    $total_length = strlen($baseRoute) + strlen($apiSubroute) + strlen($roomdataEndpoint);
    $request = substr($request,0, $total_length);
    echo "REQUEST: " . $request;
}

if ($method === 'GET') {
    switch ($request) {
        case $baseRoute . '':
            include_once __DIR__ . '/view/index.php';
        break;
        case $baseRoute . '/':
            include_once __DIR__ . '/view/index.php';
        break;
        case $baseRoute . '/roomplan':
            include_once __DIR__ . '/view/roomplan.php';
        break;
        case $baseRoute . '/api/roomdata':
            include_once __DIR__ . '/backend/rooms2.php';
        break;
        default:
        include_once __DIR__ . '/view/err/404.php';

    }
    
} elseif ($method === 'POST') {

}
