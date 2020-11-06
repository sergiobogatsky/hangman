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


    /**
     * General routing controller function
     * in case of problems add /hangman/public to the $_SERVER['DOCUMENT_ROOT']
     * @param $data
     */
    public function processRequest($data)
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($file = $this->checkRouteList($this->uri[count($this->uri) - 1])) {
                    include $file;
                }
                else {
                    include  __DIR__ .  '/../../public/views/index.php';
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
        $folder = opendir(__DIR__ .  '/../../public/views');

        //reading the folder views:
        while ($file = readdir($folder)) {
            if ($view . '.php' == $file) {
                return __DIR__ . './../../public/views/' . $file;
            }
        }
        return false;
    }
}