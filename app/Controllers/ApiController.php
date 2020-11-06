<?php
namespace Hangman\Controllers;

use Hangman\Models\Game;
use Hangman\Models\Superhero;

class ApiController implements Controller
{
    public $uri;
    public $requestMethod;

    /**
     * Controller constructor.
     * @param $uri
     * @param $requestMethod
     */
    public function __construct($uri, $requestMethod)
    {
        $this->uri = $uri;
        $this->requestMethod = $requestMethod;
    }


    /**
     * Requests made for the api:
     * @param $data
     */
    public function processRequest($data)
    {
        $lastPartOfUri = $this->uri[count($this->uri) - 1];
        switch ($this->requestMethod) {
            case 'GET':
                if ($lastPartOfUri == 'new-hero'){
                    $response['status_code_header'] = 'HTTP/1.1 200 OK';
                    $response['body'] = Superhero::getRandomSuperHero();
                }
                break;
            case 'POST':
            if ($lastPartOfUri == 'new-game') {
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                $data->word = Superhero::getRandomSuperHero();
                $response['body'] = Game::createGame($data);
            }
            else if ($lastPartOfUri == 'get-game') {
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                $response['body'] = Game::getGame($data);
            }
            else if ($lastPartOfUri == 'set-game') {
                $response['status_code_header'] = 'HTTP/1.1 200 OK';
                $response['body'] = Game::createGame($data);
            }
            break;
        }
        header($response['status_code_header']);
        header('Content-Type: application/json');
        if (isset($response['body'])) {
            echo $response['body'];
        }
    }
}