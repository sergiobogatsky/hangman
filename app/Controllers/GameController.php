<?php
namespace Hangman\Controllers;

class GameController implements Controller
{
    public $uri;
    public $requestMethod;

    /**
     * Controller constructor.
     * @param $route
     * @param $requestMethod
     */
    public function __construct($uri, $requestMethod)
    {
        $this->uri = $uri;
        $this->requestMethod = $requestMethod;
    }


    public function processRequest($data)
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($file = $this->checkRouteList($this->uri[count($this->uri) - 1])) {
                    include $file;
                }
                else {
                    include $_SERVER['DOCUMENT_ROOT'] . '/hangman/public/views/index.php';
                }
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                break;
            default:
                header("HTTP/1.1 404 Not Found");
                exit();
        }
    }


    /**
     * check if the file with the same name as in path exists.
     * @param $view
     * @return false|string
     */
    public function checkRouteList($view)
    {
        $folder = opendir($_SERVER['DOCUMENT_ROOT'] . '/hangman/public/views');

        //reading the folder views:
        while ($file = readdir($folder)) {
            if ($view . '.php' == $file) {
                return $_SERVER['DOCUMENT_ROOT'] . '/hangman/public/views/' . $file;
            }
        }
        return false;
    }
}