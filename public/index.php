<?php
require '../vendor/autoload.php';
use Hangman\Controllers\ApiController;
use Hangman\Controllers\GameController;



$route = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $route );
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($uri[1] == 'api' || ($uri[1] == 'hangman' && $uri[2] == 'public' && $uri[3] == 'api')) {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $controller = new ApiController($uri, $requestMethod);
    $controller->processRequest($data);
}
else {
    $controller = new GameController($uri, $requestMethod);
    $controller->processRequest($_SERVER);
}